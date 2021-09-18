import React from 'react';

function PublishedMsg(props) {

    return (
        <div>
            <div>
                <MessageData />
                <p>{props.text}</p>
            </div>
            <div>
                delete and edit
            </div>
        </div>
    )
}

export default PublishedMsg;