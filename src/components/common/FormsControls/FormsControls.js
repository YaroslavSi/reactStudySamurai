import React from "react";
import styles from './FormsControls.module.css';
import { Field } from "redux-form";

export const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasErorr = touched && error;
    return (
        <div className={styles.formControl + " " + (hasErorr ? styles.error : "")}>
            <div>
                {children}
            </div>
            { touched && error && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    const hasErorr = meta.touched && meta.error;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} 
            name={name} 
            component = {component} 
            validate={validators} 
            {...props} /> {text}
    </div> 
)