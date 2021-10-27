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
    return (
        <Wrapper> {/* div */}
            <form className="postMsg" onSubmit={(e)=> e.preventDefault()}>
                <input className="postMsg" type="text" placeholder="Enter your message" value={value} onChange={(event) => handleChange(event)} />
                <button className="postMsg" onClick={() => messageHandler()}>Send</button>
            </form>
            {errorCode ? errors[errorCode] : null}
        </Wrapper>
    )
}

export default PostMsg;