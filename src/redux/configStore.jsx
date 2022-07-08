import { configureStore } from '@reduxjs/toolkit'
import LoaddingReducer from './LoaddingReducer/LoaddingReducer'

export const store = configureStore({
  reducer: {
    LoaddingReducer
  },
})