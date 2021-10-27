import React from "react";
import PostMsg from './PostMsg';
import PublishedMsg from "./PublishedMsg";
import { Wrapper } from "./styles/Messages.styled";

function Messages(props) {
    return (
        <Wrapper> {/* div */}
            <div className="messages container">
                <PostMsg />
                <PublishedMsg />
            </div>
        </Wrapper>
    )
}

export default Messages;