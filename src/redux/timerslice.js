import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  time: 0,
  isRunning: false,
  mode: 'stopwatch', 
  laps: []
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: state => {
      state.isRunning = true
    },
    pause: state => {
      state.isRunning = false
    },
    reset: state => {
      state.time = 0
      state.isRunning = false
      state.laps = []
    },
    tick: (state) => {
  if (state.time > 0) {
    state.time -= 1 
  }
},
    setTime: (state, action) => {
      state.time = action.payload
    },
    addLap: state => {
      state.laps.push(state.time)
    },
    setMode: (state, action) => {
      state.mode = action.payload
    }
  }
})

export const { start, pause, reset, tick, setTime, addLap, setMode } = timerSlice.actions
export default timerSlice.reducer
