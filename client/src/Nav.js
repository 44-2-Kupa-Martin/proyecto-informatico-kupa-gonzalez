import React from 'react';
import ProfilePic from './ProfilePic';
import LoginButton from './LoginButton';


function Nav() {
    var loginState= false;
    return (
        <nav>
            <ul>
                <li className="logo">
                    <h2>Logo</h2>
                </li>
                <li>
                    <form action className="searchbar">
                        <button onClick="searchHandler()"><i className="fa fa-search" /></button>
                        <input type="text" placeholder="Search" />
                    </form>
                </li>
                <li className="login">
                    <ProfilePic loggedIn={loginState}/>
                    <LoginButton />
                </li>
            </ul>
        </nav>
    )
}

export default Nav;