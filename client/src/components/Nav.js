import React, { useContext } from 'react';
import LoginPage from './LoginPage';
import SearchBar from './SearchBar';
import { Context } from '../App';
import axios from 'axios';
import {Wrapper} from "./styles/Nav.styled";
import PostAvatar from './PostAvatar';
import UserMenu from './UserMenu';


function Nav(props) {
    const context= useContext(Context);
    //UI update
    function homePage() {
        context.setPage(context.pageContents);
    }
    function login() {
        context.setPage(<LoginPage />);
    }

    return (
        <Wrapper> {/* nav */}
            <ul className="nav">
                <li className="nav">
                    <button className="nav logo" onClick={()=>homePage()}><h2 className="nav">Logo</h2></button>
                </li>
                <SearchBar />
                {
                    false ? //context.loginState
                    <UserMenu /> : 
                    <li className="nav"><button className="nav login" onClick={() => login()}>Log In</button></li>
                }
            </ul>
            <div style={{height: '8vh', display: 'block'}} /> {/*Filling up the space corresponding to the navbar*/}
        </Wrapper>
    )
}

export default Nav;