import React, {useState, useContext} from 'react';
import axios from 'axios';
import {Context} from '../App';
import { Wrapper } from './styles/PostMsg.styled';

function PostMsg(props) {
    const context= useContext(Context);
    const [value, setValue]= useState('');
    const [errorCode, setErrorCode]= useState(null);
    const errors= [
        "Unauthorized",
        "Cannot post an empty message"
    ]
    function messageHandler() {
        let obj= {};
        if (value === '') {
            setErrorCode(1);
        } else {
            obj.text= value;
            axios.post('/messages', obj)
                .then((req, res) => {
                    if (res.success) {
                        setValue('');
                        context.setMessages(null);
                    } else {
                        setErrorCode(res.err);
                    }
                });
        }
    }
    function handleChange(event) {
        setErrorCode(null);
        setValue(`${event.target.value}`);
    }
    function resizeTextarea(event) {
        event.target.style.height = 'inherit';
        event.target.style.height = `${event.target.scrollHeight}px`; 
    }
    return (
        <Wrapper> {/* div */}
            <form className="postMsg" name="postMessage" onSubmit={(e)=> e.preventDefault()}>
                <textarea className="postMsg" name="message" maxLength="500" placeholder="Enter your message" required value={value} onChange={(event) => {handleChange(event);resizeTextarea(event)}} />
            </form>
            <div className="postMsg flexContainer">
                {
                    value !== '' && errorCode === null ? 
                    <button className="postMsg" form="postMessage" onClick={() => messageHandler()}>Send</button> :
                    <button className="postMsg cantSubmit">Send</button>
                }
                {errorCode ? errors[errorCode] : null}
            </div>
        </Wrapper>
    )
}

export default PostMsg;