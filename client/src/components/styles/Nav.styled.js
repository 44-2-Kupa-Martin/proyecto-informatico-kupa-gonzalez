import styled from "styled-components";
//StyledNav
export const Wrapper= styled.nav`
    ul.nav {
        list-style: none;
        padding: 0 5%;
        margin: 0;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        background-color: #1E90FF;
        height: 8vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    li.nav {
        align-self: center;
        align-items: center;
        height: 100%;
        display: flex;
    }
    button.nav.logo {
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        color: white;
    }
    li.nav.userMenu {
        height: fit-content;
        align-self: flex-start;
    }
    button.nav.login {
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 100%;
        height: 100%;
        transition: background-color 0.3s;
        color: #bfbfbf;
    }

    button.nav.login:hover {
        background-color: #0059b3;
        color: whitesmoke;
    }
`;