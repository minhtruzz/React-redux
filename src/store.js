import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "./reducers/slice"

export default configureStore({
    reducer: {
        task: taskReducer,
    },
})