import styled from "styled-components";

export const Wrapper= styled.div`
    .PostAvatar.container {
        width: 75vw;
        height: 55vh;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: white;
        border-radius: 30px;
        border: 3px solid lightgray;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
    }
    h3.PostAvatar {
        margin: 0;
        margin-top: 10px;
        text-align: center;
    }
    .PostAvatar.avatar {
        height: auto;
        max-width: 150px;
        width: 50%;
        border-radius: 50%;
        border: solid #262626 3px;
        margin: 5px;
    }

    form.PostAvatar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: fit-content;
        max-width: 400px;
        width: 100%;
    }
    .PostAvatar.chooseFile {
        background-color: #66b3ff;
        height: 5vh;
        margin: 5px 0;
        border: none;
        cursor: pointer;
        width: 35%;
        border-radius: 20px;
        color: whitesmoke;
        transition: all 0.15s;
    }
    .PostAvatar.buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .PostAvatar.goBack, .PostAvatar.submit {
        background-color: #66b3ff;
        height: 5vh;
        margin: 5px 0;
        border: none;
        cursor: pointer;
        width: 15%;
        border-radius: 3px;
        color: whitesmoke;
        transition: all 0.15s;
    }
    .PostAvatar.cantSubmit {
        background-color: #b3d9ff;
        height: 5vh;
        margin: 5px 0;
        border: none;
        cursor: not-allowed;
        width: 15%;
        border-radius: 3px;
        color: whitesmoke;
        transition: all 0.15s;
    }
    .PostAvatar.goBack:hover, .PostAvatar.submit:hover, .PostAvatar.chooseFile:hover {
        background-color: #4da6ff;
    }
    .PostAvatar.err {
        text-align: center;
        margin: 0;
    }
`;