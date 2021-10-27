import './App.css';
import Nav from './components/Nav';
import React, {useState} from 'react';
import GlobalStyles from "./components/styles/Global";
import Messages from './components/Messages';

export const Context= React.createContext();
function App() {
  const pageContents= [
    <Nav />,
    <Messages />
  ];
  const [page, setPage]= useState(pageContents);
  const [messages, setMessages]= useState();
  const [loginState, setLoginState]= useState(false);
  return (
    <div>
      <Context.Provider value={{setPage, messages, setMessages, loginState, setLoginState, pageContents}}>
        <GlobalStyles />
        {page}
      </Context.Provider>
    </div>
  )
}

export default App;

