import React, {useContext, useState} from "react";
import { Context } from "./App";
import LoginPage from "./LoginPage";
import Nav from "./Nav";
import PostMsg from "./PostMsg";
import PublishedMsg from "./PublishedMsg";

function SigninPage(props) {
    const context= useContext(Context);
    const [localUsername, setLocalUsername]= useState('');
    const [localPassword, setLocalPassword]= useState('');
    //UI update
    function goBack() {
        context.setPage([
            <Nav />,
            <PublishedMsg />,
            <PostMsg />
        ]);
    }
    function login() {
        context.setPage([
            <LoginPage />
        ])
    }
    //inputHandlers
    function handleUsernameChange(event) {
        setLocalUsername(`${event.target.value}`);
    }
    function handlePasswordChange(event) {
        setLocalPassword(`${event.target.value}`);
    }
    //local functions
    function signin() {
        axios.put('', {localUsername, localPassword})
            .then((req, res) => {
                if (res.success) {
                    login()
                } else {
                    //failed signin
                }
            })
    }
    return (
        <div>
            <button onClick={() => goBack()}>X</button>
            <h2>Logo</h2>
            <h3>Sign In</h3>
            <form onSubmit={() => signin()}>
                <input type="text" value={localUsername} onChange={(event) => handleUsernameChange(event)} />
                <input type="text" value={localPassword} onChange={(event) => handlePasswordChange(event)} />
                <button onClick="submit">Sign In</button>
            </form>
            <a onClick={() => login()}>Already have an account? Log in.</a>
        </div>
    )
}

export default SigninPage;