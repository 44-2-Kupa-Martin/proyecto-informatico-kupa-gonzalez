import React, {useContext, useState} from 'react';
import Nav from './Nav';
import PublishedMsg from './PublishedMsg';
import SigninPage from './SigninPage';
import { Context } from './App';
import PostMsg from './PostMsg';

function LoginPage(props) {
    //global vars
    const context= useContext(Context);
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    //UI update
    function goBack() {
        context.setPage([
            <Nav />,
            <PublishedMsg />,
            <PostMsg />
        ]);
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
        // axios.post('', {username, password})
        //     .then((res, err) => {
        //         if (err) throw err;
        //         if (res.success) {
        //             context.setPage([
        //                 <Nav />,
        //                 <PublishedMsg />,
        //                 <PostMsg />
        //             ]);
        //             context.setLoginState(true);
        //         }
        //     });
    }
    return (
        <div>
            <button onClick={() => goBack()}>X</button>
            <h2>Logo</h2>
            <h3>Log In</h3>
            <form onSubmit={() => login()}>
                <input type="text" value={username} onChange={(event) => handleUsernameChange(event)} />
                <input type="text" value={password} onChange={(event) => handlePasswordChange(event)} />
                <button onClick="submit">Log In</button>
            </form>
            <a onClick={() => signin()}>Don't have an account? Sign in.</a>
        </div>
    )
}

export default LoginPage;