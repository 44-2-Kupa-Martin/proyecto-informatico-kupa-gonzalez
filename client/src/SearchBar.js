import React, {useContext, useState} from "react";
import {Context} from './App';

function SearchBar(props) {
    const [value, setValue]= useState('');
    const context= useContext(Context);
    function searchHandler() {
        // let query= value.algo;
        // axios.get('', query).then((res) => {
        //     context.setMessages(res)
        // })
        // return
    }
    function handleChange(event) {
        setValue(`${event.target.value}`);
    }
    return (
        <form onSubmit={() => searchHandler()} className="searchbar">
            <button type="submit"><i className="fa fa-search" /></button>
            <input type="text" placeholder="Search" value={value} onChange={(event) => handleChange(event)} />
        </form>
    )
}

export default SearchBar;