import axios from "axios";
import React, {useContext, useState} from "react";
import {Context} from '../App';
import Nav from "./Nav";
import { Wrapper } from "./styles/SearchBar.styled.js";

function SearchBar(props) {
    const [value, setValue]= useState('');
    const context= useContext(Context);
    function searchHandler() {
        if (value[0] === '@') {
            let userQuery= {username: (value.replace('@', '').split(' '))[0]};
            axios.get('/messages', userQuery)
                .then((req, res) => {
                    if (res.err) { //will probably throw error on success due to undefined property
                        context.setPage([
                            <Nav />,
                            <div>
                                <p>X</p>
                                <p>There are no matches for your search</p>
                            </div>
                        ]);
                    } else {
                        context.setMessages(res);
                    }
                });
        } else if (value[0] === '#') {
            let messageQuery= {_id: (value.replace('#', '').split(' '))[0]};
            axios.get('/messages', messageQuery)
                .then((req, res) => {
                    if (res.err) {
                        context.setPage([
                            <Nav />,
                            <div>
                                <p>X</p>
                                <p>There are no matches for your search</p>
                            </div>
                        ]);
                    } else {
                        context.setMessages([res]);
                    }
                });
        } else {
            context.setPage([
                <Nav />,
                <p>Invalid search</p>
            ]);
        }
    }
    function handleChange(event) {
        setValue(`${event.target.value}`);
    }
    return (
        <Wrapper className="nav searchBar"> {/* li */}
            <form className="searchBar" onSubmit={(e)=>e.preventDefault()}>
                <input className="searchBar" id="input" type="text" placeholder="Search" value={value} onChange={(event) => handleChange(event)} />
                <button className="searchBar" onClick={() => searchHandler()}><i className="fa fa-search" /></button>
            </form>
        </Wrapper>
    )
}

export default SearchBar;