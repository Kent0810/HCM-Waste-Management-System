import React from 'react';
import styles from './App.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui_slice';

import CenterDashboard from './components/dashboards/center_dashboard/center_dashboard';

import LeftDashboard from './components/dashboards/left_dashboard/left_dashboard';
import RightDashboard from './components/dashboards/right_dashboard/right_dashboard';
import SignUpModal from './components/UI/modal/SignUpModal';



function App() {
  const userUI = useSelector(state => state.ui.userIsVisible);
  const dispatch = useDispatch();
  const toggleModalHandler = () => {
    dispatch(uiActions.toggleUserUI());
  };
  return (
    <main className={styles.main}>
      {userUI && <SignUpModal onClick={toggleModalHandler} />}
      <LeftDashboard />
      <CenterDashboard />
      <RightDashboard />
    </main>
  );
}

export default App;
