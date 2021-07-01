import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginThunk, logOutThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.login, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {loginThunk, logOutThunk}))
(Login);
