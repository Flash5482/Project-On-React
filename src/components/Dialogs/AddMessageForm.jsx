import React from "react";
import Styles from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validations/validators";
import {Textarea} from "../common/formsControls/FormsControls";

const  maxLength10 =  maxLengthCreator(10);


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field component={Textarea} validate={[requiredField,maxLength10]} name={"newMessageBody"} placeholder={"Enter your message"}
                              className={Styles.input__text}  cols="30" rows="2"/>
            </div>
            <div className={Styles.buttonStyle}>
                <button className={Styles.button}>Send</button>

            </div>

        </form>

    );
}
export const MessageReduxForm = reduxForm({
    form:"dialogAddMessageForm"
})(AddMessageForm);

export default AddMessageForm;