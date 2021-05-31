import React from "react";
import './App.css';
import './style/null.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Srttings";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>

                <Navbar state={props.appState.navbar}/>

                <div className="app-wrapper__content">
                    <Route path="/message" render={() => <Dialogs messagePage={props.appState.messagePage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.appState.profilePage}
                                                    dispatch ={props.dispatch}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

