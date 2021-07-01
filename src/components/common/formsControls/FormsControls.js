import React from "react";
import Styles from './FormsContols.module.css'


const FormControle = (props)=>{

        return (
            <div className={Styles.formControl + " " + (props.meta.touched && props.meta.error ? Styles.error : "")}>
                <div>
                    {props.children}
                </div>
                {props.meta.touched && props.meta.error && <span>{props.meta.error}</span>}
            </div>
        );
    }

export const Textarea = (props) => {
    return (
        <FormControle {...props}>
            <textarea className={Styles.textInput} {...props.input}/>
        </FormControle>
    );
}

export const Input = (props) => {
    return (
        <FormControle {...props}>
            <input className={Styles.inputLogin}  {...props.input}/>
        </FormControle>
    );
}