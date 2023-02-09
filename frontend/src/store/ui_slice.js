import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { userIsVisible: false, userLanguage: "eng" },
    reducers: {
        toggleUserUI(state) {
            console.log(state.userIsVisible)
            state.userIsVisible = !state.userIsVisible; //reducer a function that takes the current state and returns a new state
        },
        toggleTranslate(state) {
            if (state.userLanguage === "vn") {
                state.userLanguage = "en"
            } else {
                state.userLanguage = "vn"
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;