import React from 'react';

function PostMsg(props) {

    return (
        <div>
            <div>
                <MessageData posting="true" />
                <input type="text" placeholder="Enter your message" id="msg" />
            </div>
            <div>
                <button onClick="messageHandler()" />
            </div>
        </div>
    )
}

export default PostMsg;