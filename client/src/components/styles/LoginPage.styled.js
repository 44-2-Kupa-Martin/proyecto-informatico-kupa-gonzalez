import styled from "styled-components";

export const Wrapper= styled.div`
    .LoginPage.container {
        height: fit-content;
        width: 30vw;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: white;
        border: 3px solid lightgray;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    h3.LoginPage {
        margin-bottom: 0;
    }
    h1.LoginPage {
        text-align: center;
        color: white;
        margin: 0;
        padding-top: 7vh;
        font-size: xx-large;
    }
    form.LoginPage {
        width: 100%;
    }
    div.LoginPage.formContainer {
        width: 100%;
        margin-top: 35px;
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
    }
    label.LoginPage {
        display: block;
    }
    input.LoginPage {
        display: block;
        height: 5vh;
        width: 100%;
        outline: none;
        margin: 5px 0;
    }
    input.LoginPage.password {
        font-size: larger;
    }
    button.LoginPage.exit {
        align-self: flex-end;
        background-color: transparent;
        border: none;
        border-radius: 10px;
        height: 20px;
        width: 20px;
        padding: 0;
        cursor: pointer;
        transition: all 0.15s ease-in-out;
    }
    button.LoginPage.exit:hover {
        background-color: #d9d9d9;
    }
    button.LoginPage.exit:active {
        background-color: #bfbfbf;
    }
    button.LoginPage.signin {
        background-color: none;
        cursor: pointer;
        color: blue;
        border: none;
    }
    button.LoginPage.signin:hover {
        color: #3333ff;
    }
    button.LoginPage.login {
        background-color: #66b3ff;
        height: 5vh;
        margin: 5px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        border-radius: 3px;
        color: whitesmoke;
        transition: all 0.15s;
    }
    button.LoginPage.login:hover {
        background-color: #4da6ff;
    }

    button.LoginPage.login:active {
        background-color: #0066cc;
    }
`;