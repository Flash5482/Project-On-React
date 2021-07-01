import React from "react";
import Styles from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validations/validators";

let maxLength = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <div className={Styles.formLoginWrapper}>
            <div className={Styles.formLogin}>
                <h1>Login</h1>
                <form onSubmit={props.handleSubmit}>
                    <div><Field placeholder={"Login"} name={"login"} validate={[requiredField, maxLength]}
                                component={Input}/></div>
                    <div><Field placeholder={"password"} name={"password"} validate={[requiredField, maxLength]} type={"password"}
                                 component={Input}/></div>
                    <div><span className={Styles.textRemember}>Remember me</span><Field component={"input"}
                                                                                        name={"rememberMe"}
                                                                                        type={"checkbox"}/></div>
                    { props.error && <div className={Styles.formSummeryError}>
                        {props.error}
                    </div>}
                    <div className={Styles.buttonWrapp}>
                        <button className={Styles.buttonLogin}>Login</button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

export default LoginForm;
