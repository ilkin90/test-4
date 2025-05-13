import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    time: 0,  
    isRunning: false, 
  },
  reducers: {
    setTime: (state, action) => {
      state.time = action.payload
    },
    start: (state) => {
      state.isRunning = true
    },
    pause: (state) => {
      state.isRunning = false
    },
    reset: (state) => {
      state.time = 0
      state.isRunning = false
    },
    tick: (state) => {
      if (state.time > 0) {
        state.time -= 1
      }
    }
  }
})

export const { setTime, start, pause, reset, tick } = timerSlice.actions

export default timerSlice.reducer
