//react
import React, { useEffect } from 'react';
//end react

//react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//end react-router-dom

//components
import HomePage from './routes/Home/HomePage';
import AdminDashboards from './routes/Dashboards/Dashboards_admin';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
//end components

//redux
import { dataActions, uiActions } from './store/ui_slice';
import storage from './store/redux';
//end redux

//firebase
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './services/config';
import ErrorPage from './routes/Error/ErrorPage';
import EmployeesPage from './routes/Employees/EmployeesPage';
import VehiclesPage from './routes/Vehicles/VehiclesPage';
//end firebase

onAuthStateChanged(auth, async (user) => {
  try {
    if (user) {
      const docRef = doc(db, "USERS_INFO", auth.currentUser.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        storage.dispatch(dataActions.setUser(docSnap.data()))
      }
      if (storage.getState().ui.isLoadingVisible === true) {
        storage.dispatch(uiActions.toggleLoading()) //turn off loading screen 
      }
    }
    else {
      storage.dispatch(dataActions.setUser({}))
      if (storage.getState().ui.isLoadingVisible === true) {
        storage.dispatch(uiActions.toggleLoading()) //turn off loading screen 
      }
    }
  }
  catch (error) {
    console.log(error)
  }
})



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboards" element={(<PrivateRoute><AdminDashboards /></PrivateRoute>)} />
        <Route path="/dashboards/employees" element={<PrivateRoute><EmployeesPage /></PrivateRoute>} />
        <Route path="/dashboards/vehicles" element={<PrivateRoute><VehiclesPage /></PrivateRoute>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
