import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './timerslice'

export const store = configureStore({
  reducer: {
    timer: timerReducer
  }
})

