import React, {useState} from 'react';

function PostMsg(props) {
    const [value, setValue]= useState('');
    function messageHandler() {
        let obj;
        obj.text= value;
        obj.userData= context.userData;
        axios.post('', obj);
        setValue('');
    }
    function handleChange(event) {
        setValue(`${event.target.value}`);
    }
    return (
        <div>
            lol
            <div>
                <input type="text" placeholder="Enter your message" value={value} onChange={(event) => handleChange(event)} />
            </div>
            <div>
                <button onClick={() => messageHandler()} />
            </div>
        </div>
    )
}

export default PostMsg;