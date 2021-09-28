import React, {useContext} from 'react';
import MessageData from './MessageData';
import {Context} from './App';

function PublishedMsg(props) {
    const context= useContext(Context);
    function messageRenderer(array) {
        let returnArray= [];
        for (let obj of array) {
            returnArray.push(
                <div>
                    <div>
                        <MessageData data={obj.userData}/>
                        <p>{obj.text}</p>
                    </div>
                    <div>
                        delete and edit
                    </div>
                </div>
            )
        }
        return returnArray;
    }
    if (context.messages) {
        var renderMessages= messageRenderer(context.messages);
    } else {
        // axios.get(``)
        //     .then(res => {
        //         var renderMessages= messageRenderer(res);
        //     });
    }
    return (
       <div>{renderMessages}</div> 
    )
}

export default PublishedMsg;