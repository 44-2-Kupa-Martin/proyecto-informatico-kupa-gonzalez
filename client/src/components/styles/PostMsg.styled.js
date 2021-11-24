import styled from "styled-components";

export const Wrapper= styled.div`
    .postMsg.flexContainer {
        display: flex;
        flex-flow: row-reverse;
        justify-content: space-between;
        padding: 2px;
    }
    textarea.postMsg {
        display: block;
        resize: none;
        min-height: 140px;
        width: 35vw;
        outline: none;
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 5px;
        margin: 3px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: medium;
        overflow: hidden;
    }
    form.postMsg {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        min-width: 150px;
    }
    button.postMsg {
        align-self: flex-end;
        margin: 3px;

    }
    .postMsg.cantSubmit {
        background-color: #b3d9ff;
        height: 35px;
        margin: 5px 0;
        border: none;
        width: 15%;
        min-width: 45px;
        border-radius: 3px;
        color: whitesmoke;
    }
`;