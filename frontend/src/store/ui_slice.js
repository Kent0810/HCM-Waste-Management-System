import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { userIsVisible: false },
    reducers: {
        toggleUserUI(state) {
            console.log(state.userIsVisible)
            state.userIsVisible = !state.userIsVisible; //reducer a function that takes the current state and returns a new state
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;