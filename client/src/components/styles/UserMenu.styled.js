import styled from "styled-components";

export const Wrapper= styled.li`
    .userMenu{
        color: #bfbfbf;
    }
    strong.userMenu {
        display: inline-block;
    }
    div.userMenu.dropdown {
        height: 0;
        overflow: hidden;
        transition: all 1s ease;
        width: 100%;
    }
    ul.userMenu {
        padding: 0;
        display: flex;
        flex-flow: column nowrap;
        height: fit-content;
        transition: all 1.6s;
    }
    li.userMenu.text {
        padding: 0 5px;
        align-items: center;
    }
    li.userMenu {
        display: flex;
        justify-content: center;
        height: 8vh;
        width: 100%;
    }
    ul.userMenu:hover div.userMenu.dropdown {
        display: inline-flex;
        flex-flow: column nowrap;
        height: 16vh;
    }
    ul.userMenu:hover {
        background-color: #0080ff;
        transition: background-color 0.3s
    }
    button.userMenu {
        width: 100%;
        height: 80%;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 2px;
        transition: all 0.8s;
    }
    button.userMenu:hover {
        background-color: #0059b3;
        color: whitesmoke;
    }
    button.userMenu.logout {
        color: #ff4d4d;
        font-weight: bolder;
        transition: all 1s;
    }
    button.userMenu.logout:hover {
        color: red;
        
    }
`;