import React, {useContext, useState} from "react";
import axios from 'axios';
import { Context } from "../App";
import LoginPage from "./LoginPage";
import PostAvatar from "./PostAvatar";
import {Wrapper} from "./styles/SigninPage.styled"

function SigninPage(props) {
    const context= useContext(Context);
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setPasswordConfirmation]= useState('');
    const [errorCode, setErrorCode]= useState(null);
    const errors= [
        "User is already registered",
        "Username must be longer than 3 characters",
        "Password must be longer than 4 characters",
        "Passwords do not match"
    ];
    //UI update
    function goBack() {
        context.setPage(context.pageContents);
    }
    function login() {
        context.setPage([
            <LoginPage />
        ]);
    }
    //inputHandlers
    function handleUsernameChange(event) {
        setUsername(`${event.target.value}`);
    }
    function handlePasswordChange(event) {
        setPassword(`${event.target.value}`);
    }
    function handlePasswordConfirmationChange(e) {
        setPasswordConfirmation(`${e.target.value}`);
    }
    //local functions
    function signin() {
        if (password !== confirmPassword) {
            setErrorCode(3);
            return
        }
        axios.post('/users', {username, password})
            .then((req, res) => {
                if (res.success) {
                    context.setPage(context.pageContents);
                } else {
                    setErrorCode(res.err)
                }
            })
    }
    return (
        <Wrapper style={{height: '100vh', width: '100vw', backgroundColor: '#1E90FF'}}> {/* div */}
            <h1 className="SigninPage">Logo</h1>
            <div className="SigninPage container">
                <button className="SigninPage exit" onClick={() => goBack()}>X</button>
                <h3 className="SigninPage">Sign In</h3>
                <div className="SigninPage formContainer">
                    <form className="SigninPage" autoComplete="off" onSubmit={(e)=>e.preventDefault()}>
                        <label className="SigninPage" htmlFor="username">Username</label>
                        <input className="SigninPage" type="text" name="username" value={username} onChange={(event) => handleUsernameChange(event)} />
                        <label className="SigninPage" htmlFor="password">Password</label>
                        <input className="SigninPage password" type="password" name="password" value={password} onChange={(event) => handlePasswordChange(event)} />
                        <label className="SigninPage" htmlFor="confirmPassword">Confirm Password</label>
                        <input className="SigninPage password" type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => handlePasswordConfirmationChange(e)} />
                        <button className="SigninPage signin" onClick={() => signin()}>Sign In</button>
                    </form>
                    {errorCode !== null ? errors[errorCode] : null}
                    <button className="SigninPage login" onClick={() => login()}>Already have an account? Log in.</button>
                </div>
            </div>
        </Wrapper>
    )
}

export default SigninPage;