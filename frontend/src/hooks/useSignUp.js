import { useState } from "react";

import { useDispatch } from "react-redux";

import { doc, setDoc, getDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { auth, db } from "../services/config";

import { uiActions, dataActions } from "../store/ui_slice";

import storage from "../store/redux";


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



const useSignUp = () => {
    const [userData, setUserData] = useState({})
    const dispatch = useDispatch()

    async function HandleSignUpData(userInputData) {
        try {
            if (userInputData.userName.length === 0) {
                throw new Error("Username cannot be empty ")
            }
            else if (userInputData.userName.length > 15) {
                throw new Error("Username cannot be longer than 15 characters ")
            }
            else if (userInputData.userName.length < 3) {
                throw new Error("Username cannot be shorter than 3 characters ") //firebase has a limit of 3 characters  for username
            }
            else if (userInputData.userName.includes(" ") || userInputData.userName.includes(".") || userInputData.userName.includes("#") || userInputData.userName.includes("$") || userInputData.userName.includes("[") || userInputData.userName.includes("]") || userInputData.userName.includes("@")) {
                throw new Error("Username cannot contain spaces or special characters ")
            }
            else if (new Date(userInputData.birth).getFullYear() > new Date().getFullYear() - 13) {
                throw new Error("You must be at least 13 years old to use our service ")
            }
            else if (userInputData.password !== userInputData.confirmedPassword) {
                throw new Error("Passwords do not match ")
            }

            await createUserWithEmailAndPassword(auth, userInputData.email, userInputData.password)

            console.log(new Date(userInputData.birth).getFullYear())
            delete userInputData.password // dont push our password to database

            //check if form is valid





            await setDoc(doc(db, "USERS_INFO", auth.currentUser.uid), userInputData)

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
            dispatch(uiActions.toggleLoading())
        }
        setUserData(userInputData)
    }

    return [userData, HandleSignUpData]
}

export default useSignUp