import React from 'react';
import styles from './App.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui_slice';

import CenterDashboard from './components/dashboards/center_dashboard/center_dashboard';

import LeftDashboard from './components/dashboards/left_dashboard/left_dashboard';
import RightDashboard from './components/dashboards/right_dashboard/right_dashboard';
import SignInModal from './components/UI/modal/SignInModal';
import SignUpModal from './components/UI/modal/SignUpModal';

import Notification from './components/UI/notification/Notification';
import LoadingModal from './components/UI/loading/loading';

function App() {
  const signInUI = useSelector(state => state.ui.signInIsVisible);
  const signUpUI = useSelector(state => state.ui.signUpIsVisible);
  const isNotificationVisible = useSelector(state => state.ui.notificationVisible);
  const notification = useSelector(state => state.ui.notification);
  const isLoadingVisible = useSelector(state => state.ui.isLoadingVisible)
  const dispatch = useDispatch();
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
    <main className={styles.main}>
      {isLoadingVisible && <LoadingModal />}
      {isNotificationVisible && <Notification onClick={toggleNotificationHandler} title={notification.title} message={notification.message} />}
      {signInUI && <SignInModal onClick={toggleSigInUIHandler} />}
      {signUpUI && <SignUpModal onClick={toggleSignUpUIHandler} />}
      <LeftDashboard />
      <CenterDashboard />
      <RightDashboard />
    </main>
  );
}

export default App;
