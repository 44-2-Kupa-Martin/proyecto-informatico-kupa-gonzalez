import React, { useContext } from 'react';
import LoginPage from './LoginPage';
import SearchBar from './SearchBar';
import { Context } from './App';


function Nav(props) {
    const context= useContext(Context);
    function login() {
        context.setPage([<LoginPage />]);
    }
    return (
        <nav>
            <ul>
                <li className="logo">
                    <h2>Logo</h2>
                </li>
                <li>
                    <SearchBar />
                </li>
                <li className="login">
                    <img src="#" />
                    <button onClick={() => login()}>Log In</button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;