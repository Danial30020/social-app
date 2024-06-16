import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './components/Data/State';
// import state from './components/Data/State'
import { addPost } from './components/Data/State';
// let postsItem = [{ messages:"hi", id:1},{ messages:"hid", id:2}, { messages:"ffi", id:3}]
export let rerenderTree =(state)=>{
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App postsData={postsData}/> */}
    <App state={state} addPost={store.addPost.bind(store)}/>
  </React.StrictMode>
);
} 
rerenderTree(store._state)