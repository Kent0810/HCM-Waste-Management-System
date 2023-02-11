import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { doc, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { auth, db } from "../services/config";

import { uiActions } from "../store/ui_slice";




const useSignUp = () => {

    const [userData, setUserData] = useState({})
    const dispatch = useDispatch()
    const userUid = useSelector(state => state.ui.user)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(uiActions.setUserInfo(user.uid))
        }
    })

    async function HandleData(userInputData) {
        try {
            await createUserWithEmailAndPassword(auth, userInputData.email, userInputData.password)

            delete userInputData.password // dont push our password to database

            await setDoc(doc(db, "USERS_INFO", userUid), userInputData)

            dispatch(uiActions.toggleSignUpUI())

            dispatch(uiActions.toggleNotification({
                title: "Sign Up Successful",
                message: "You can now sign in"
            }))
        }
        catch (error) {
            dispatch(uiActions.toggleNotification({
                title: "Sign Up Failed",
                message: "Error: " + error.message.slice(error.message.indexOf("/") + 1, error.message.indexOf(")")).toUpperCase().replace(/-/g, ' ')//regex expression
            }))
        }
        setUserData(userInputData)
    }

    return [userData, HandleData]
}

export default useSignUp