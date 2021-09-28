import React from 'react';

function MessageData(props) {
    if (props.username === null) {
        props.src= 'anonymousSrc';
        props.username= 'Anonymous';
    }
    
    if (props.posting) {
        return (
            <div>
                <img src={props.src} />
                <h4>{props.username}</h4>
            </div>
        )
    }
    return (
        <div>
            <img src={props.src} />
            <h4>{props.username}</h4>
            <h4>{props.date}</h4>
        </div>
    ) 
}

export default MessageData;