import React from "react";
import Styles from "./MyPost.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validations/validators";
import {Textarea} from "../../common/formsControls/FormsControls";


const  maxLength10 =  maxLengthCreator(10);

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[requiredField,maxLength10]} name={"MyPostText"}
                       placeholder={"Input yor post"}
                       cols="30" rows="2"/>
               <div className={Styles.buttonStyle}><button className={Styles.button}>Create post</button></div>
            </div>
        </form>

    );
}
export const MyPostFromRedux = reduxForm({
    form: 'post'
})(MyPostForm);

export default MyPostForm;