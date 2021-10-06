import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import PublishedMsg from './PublishedMsg';
import React, {useState} from 'react';
import PostMsg from './PostMsg';

export const Context= React.createContext();
function App() {
  const [page, setPage]= useState([
    <Nav />,
    <PublishedMsg />,
    <PostMsg />
  ]);
  const [messages, setMessages]= useState();
  const [loginState, setLoginState]= useState(false);
  return (
    <div>
      <Context.Provider value={{setPage, messages, setMessages, loginState, setLoginState}}>
        {page}
      </Context.Provider>
    </div>
  )
}

export default App;

