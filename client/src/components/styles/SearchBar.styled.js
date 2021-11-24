import styled from "styled-components";

export const Wrapper= styled.li`
    form.searchBar {
        display: inline-flex;
        height: 100%;
        align-items: center;
    }
    input.searchBar {
        background-color: #4682B4;
        height: 80%;
        max-height: 40px;
        width: 30vw;
        border: 1px solid #4da6ff;
        outline: none;
        border-radius: 8px 0 0 8px;
        padding-left: 15px;
        color: white;
    }
    input.searchBar::placeholder {
        color: #a6a6a6;
    }
    input.searchBar::-webkit-input-placeholder {
        color: #a6a6a6;
    }
    input.searchBar:focus {
        border: 1px solid #4d4dff;
    }
    button.searchBar {
        height: 80%;
        max-height: 40px;
        width: 5vw;
        padding: 0;
        border: 1px solid #4da6ff;
        background-color: #4da6ff;
        border-radius: 0 8px 8px 0;
        cursor: pointer;
    }
`;