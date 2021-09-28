import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import PublishedMsg from './MessageData';
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
  return (
    <div>
      <Context.Provider value={{setPage: setPage, messages: messages, setMessages: setMessages}}>
        {page}
      </Context.Provider>
    </div>
  )
}

export default App;

