import React, {useContext, useState} from 'react';
import axios from 'axios';
import SigninPage from './SigninPage';
import { Context } from '../App';
import { Wrapper } from './styles/LoginPage.styled';

function LoginPage(props) {
    //global vars
    const context= useContext(Context);
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [errorCode, setErrorCode]= useState(null);
    const errors= [
        `User is not registered`,
        `Username and password do not match`
    ];
    //UI update
    function goBack() {
        context.setPage(context.pageContents);
    }
    function signin() {
        context.setPage([
            <SigninPage />
        ]);
    }
    //input handlers 
    function handleUsernameChange(event) {
        setUsername(`${event.target.value}`);
    }
    function handlePasswordChange(event) {
        setPassword(`${event.target.value}`);
    }
    //Component functions
    function login() {
        axios.post('/login', {username, password})
            .then((req, res) => {
                if (res.success) {
                    context.setPage(context.pageContents);
                    context.setLoginState({username});
                } else {
                    setUsername('');
                    setPassword('');
                    setErrorCode(res.err);
                }
            });
    }
    return (
        <Wrapper style={{height: '100vh', width: '100vw', backgroundColor: '#1E90FF'}}> {/* div */}
            <h1 className="LoginPage">Logo</h1>
            <div className="LoginPage container">
                <button className="LoginPage exit" onClick={() => goBack()}>X</button>
                <h3 className="LoginPage">Log In</h3>
                <div className="LoginPage formContainer">
                    <form className="LoginPage" autoComplete="off" onSubmit={(e)=>e.preventDefault()}>
                        <label className="LoginPage" htmlFor="username">Username</label>
                        <input className="LoginPage" type="text" name="username" value={username} onChange={(event) => handleUsernameChange(event)} />
                        <label className="LoginPage" htmlFor="password">Password</label>
                        <input className="LoginPage password" type="password" name="password" value={password} onChange={(event) => handlePasswordChange(event)} />
                        <button className="LoginPage login" onClick={() => login()}>Log In</button>
                    </form>
                    {errorCode !== null ? errors[errorCode] : null}
                    <button className="LoginPage signin" onClick={() => signin()}>Don't have an account? Sign in.</button>
                </div>
            </div>
        </Wrapper>
    )
}

export default LoginPage;