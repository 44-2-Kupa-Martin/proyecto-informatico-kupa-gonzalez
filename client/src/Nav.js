import React, { useContext } from 'react';
import LoginPage from './LoginPage';
import SearchBar from './SearchBar';
import { Context } from './App';


function Nav(props) {
    const context= useContext(Context);
    //UI update
    function login() {
        context.setPage([<LoginPage />]);
    }
    function logout() {
        //put to '/logout' and update context.user
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
                    {context.login ? 
                    [<img src="#" />, <button onClick={() => logout()}>Log Out</button>] : 
                    <button onClick={() => login()}>Log In</button>}
                </li>
            </ul>
        </nav>
    )
}

export default Nav;