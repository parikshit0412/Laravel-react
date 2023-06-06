import React from "react";
import {createRoot} from 'react-dom/client';
import Login from "./Components/Login";
export default function Hello(){
   return(
    <div>
        <h1>React with Laravel vite</h1>
        <Login/>
    </div>
   ) 
}

if(document.getElementById('app')){
    createRoot(document.getElementById('app')).render(<Hello />)
}