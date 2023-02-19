import { useEffect } from 'react';

import styles from './HomePage.module.css';

import { uiActions } from '../../store/ui_slice';
import { useDispatch, useSelector } from 'react-redux';


import SignInModal from '../../components/UI/modal/SignInModal';
import SignUpModal from '../../components/UI/modal/SignUpModal';
import LoadingModal from '../../components/UI/loading/loading';
import Notification from '../../components/UI/notification/Notification';
import Navigation from '../../components/UI/Navigation_Menu/Navigation';




function HomePage() {

    const isLoadingVisible = useSelector(state => state.ui.isLoadingVisible)
    const isNotificationVisible = useSelector(state => state.ui.notificationVisible);
    const notification = useSelector(state => state.ui.notification);
    const signInUI = useSelector(state => state.ui.signInIsVisible);
    const signUpUI = useSelector(state => state.ui.signUpIsVisible);
    const dispatch = useDispatch();

    const AuthentiationMethodHandler = () => {
        dispatch(uiActions.toggleSignInUI());
    }

    const toggleSigInUIHandler = () => {
        dispatch(uiActions.toggleSignInUI());
    };
    const toggleSignUpUIHandler = () => {
        dispatch(uiActions.toggleSignUpUI())
    }
    const toggleNotificationHandler = () => {
        dispatch(uiActions.toggleNotification())
    }

    return (
        <div className={styles.HomePage}>

            {signInUI && <SignInModal onClick={toggleSigInUIHandler} />}
            {signUpUI && <SignUpModal onClick={toggleSignUpUIHandler} />}
            {isLoadingVisible && <LoadingModal />}
            {isNotificationVisible && <Notification onClick={toggleNotificationHandler} title={notification.title} message={notification.message} />}

            <Navigation />
            <header className={styles.flex}>
                <section className={styles.flex_content}>
                    <article className={styles.padding_1x}>
                        <h1 className={styles.title}>Ho Chi Minh City <br />  Waste Management System</h1>
                        <p>A solution for Ho Chi Minh City Waste Handling System.</p>
                        <button className={styles.getStarted} onClick={AuthentiationMethodHandler}>Sign In Now!</button>
                    </article>
                </section>
            </header>
        </div>
    );
}
export default HomePage;