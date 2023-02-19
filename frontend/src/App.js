//react
import React, { useEffect } from 'react';
//end react

//react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//end react-router-dom

//components
import HomePage from './routes/Home/HomePage';
import Dashboards from './routes/Dashboards/Dashboards';
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
    }
  }
  catch (error) {
    console.log(error)
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,

  },
  {
    path: '/dashboards',
    element:
      <PrivateRoute>
        <Dashboards />
      </PrivateRoute>

  }
])

function App() {

  return (
    <RouterProvider router={router} >

    </RouterProvider>
  );
}

export default App;
