import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css';


const LoginForm = ({handleSubmit, error}) => {
    
    return (
            <form onSubmit={handleSubmit}>
                    {createField ("Email", "email", Input, [required])}
                    {createField ("Password", "Password", Input, [required], {type: "password"})}
                    {createField (null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}

                { error && <div className={style.formSummaryError}>
                    Error
                </div>
                }
                
                <div>
                    <button>Submit</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login',
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div>

            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit } />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);