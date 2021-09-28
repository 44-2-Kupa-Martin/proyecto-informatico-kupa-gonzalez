import React, {useContext} from "react";
import { Context } from "./App";
import LoginPage from "./LoginPage";
import Nav from "./Nav";
import PostMsg from "./PostMsg";
import PublishedMsg from "./PublishedMsg";

function SigninPage(props) {
    const context= useContext(Context);
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
    return (
        <div>
            <button onClick={() => goBack()}>X</button>
            <h2>Logo</h2>
            <h3>Sign In</h3>
            <form>
                <input />
                <input />
                <button>Sign In</button>
            </form>
            <a onClick={() => login()}>Already have an account? Log in.</a>
        </div>
    )
}

export default SigninPage;