import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


export let renderEntireTree = (state,event)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} event = {event}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}