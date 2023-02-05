import { configureStore } from '@reduxjs/toolkit'

import uiSlice from './ui_slice'

const storage = configureStore({
    reducer: { ui: uiSlice.reducer }
})

export default storage