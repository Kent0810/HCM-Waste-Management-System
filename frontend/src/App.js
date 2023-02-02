import React from 'react';
import styles from './App.module.css';

import CenterDashboard from './components/dashboards/center_dashboard/center_dashboard';

import LeftDashboard from './components/dashboards/left_dashboard/left_dashboard';
import RightDashboard from './components/dashboards/right_dashboard/right_dashboard';

function App() {
  return (
    <main className={styles.main}>
      <LeftDashboard />
      <CenterDashboard />
      <RightDashboard />
    </main>
  );
}

export default App;
