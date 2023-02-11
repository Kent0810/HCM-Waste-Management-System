import React from "react";

import ReactDOM from "react-dom";
import styles from './SignInModal.module.css';

import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui_slice";

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />;
}


const Modal = props => {
    const dispatch = useDispatch();

    const signUpToggle = (e) => {
        e.preventDefault();
        dispatch(uiActions.toggleSignUpUI());
        dispatch(uiActions.toggleSignInUI());
    }

    return (
        <div className={styles.modal__wrapper}>
            <form className={styles.modal__form}>
                <h2 className={styles.modal__form__header}>Login</h2>
                <input type="text" className={styles.modal__form__control} name="username" placeholder="Email Address" required="" autoFocus="" />
                <input type="password" className={styles.modal__form__control} name="password" placeholder="Password" required="" />

                <a href="/#">Forgot Password?</a>

                <label className={styles.checkbox}>
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                </label>
                <button className={styles.modal__form__btn} type="submit">Login</button>
                <div className={styles.divider}></div>
                <button className={`${styles.modal__form__btn} ${styles.modal__form__create}`} onClick={signUpToggle} type="submit">Create An Account?</button>
            </form>
        </div>
    )
}

const SignInModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClick} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal onSubmit={props.onClick} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default SignInModal;