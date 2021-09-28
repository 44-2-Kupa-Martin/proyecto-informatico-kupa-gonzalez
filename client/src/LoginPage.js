import React, {useContext} from 'react';
import Nav from './Nav';
import PublishedMsg from './PublishedMsg';
import SigninPage from './SigninPage';
import { Context } from './App';
import PostMsg from './PostMsg';

function LoginPage(props) {
    const context= useContext(Context);
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
    return (
        <div>
            <button onClick={() => goBack()}>X</button>
            <h2>Logo</h2>
            <h3>Log In</h3>
            <form>
                <input />
                <input />
                <button>Log In</button>
            </form>
            <a onClick={() => signin()}>Don't have an account? Sign in.</a>
        </div>
    )
}

export default LoginPage;