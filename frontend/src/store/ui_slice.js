import { createSlice } from '@reduxjs/toolkit';



const uiSlice = createSlice({
    name: 'ui',
    initialState: { signInIsVisible: false, signUpIsVisible: false, notificationVisible: false, notification: {}, userLanguage: "eng", user: '' },
    reducers: {
        toggleSignInUI(state) {
            console.log(state.signInIsVisible)
            state.signInIsVisible = !state.signInIsVisible; //reducer a function that takes the current state and returns a new state
        },
        toggleSignUpUI(state) {
            state.signUpIsVisible = !state.signUpIsVisible;
        }
        ,
        toggleTranslate(state) {
            if (state.userLanguage === "vn") {
                state.userLanguage = "en"
            } else {
                state.userLanguage = "vn"
            }
        },
        toggleNotification(state, action) {
            state.notification = action.payload
            state.notificationVisible = !state.notificationVisible
        },
        setUserInfo(state, action) {
            state.user = action.payload
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;