import React from "react";
import './App.css';
import './null.css'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
//import 'E:\React\first-project\img\logo.png';

function App() {
    return (
        <div className="app-wrapper">

            <Header/>
            <Navbar/>
            <Profile/>

        </div>
    );
}


export default App;

