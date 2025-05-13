import { useDispatch, useSelector } from 'react-redux'
import { start, pause, reset, tick, setTime } from '../redux/timerslice'
import { useEffect, useState } from 'react'

const Timer = () => {
  const dispatch = useDispatch()
  const { time, isRunning } = useSelector(state => state.timer)
  const [input, setInput] = useState({ hour: 0, min: 0, sec: 0 })

  
  useEffect(() => {
    let interval
    if (isRunning && time > 0) {
      interval = setInterval(() => dispatch(tick()), 1000) 
    }
    if (time === 0 && isRunning) {
      dispatch(pause()) 
    }
    return () => clearInterval(interval) 
  }, [isRunning, time, dispatch])

 
  const handleStart = () => {
    const totalSec = input.hour * 3600 + input.min * 60 + input.sec
    dispatch(setTime(totalSec))  
    dispatch(start()) 
  }

  
  const formatTime = (t) => {
    const h = Math.floor(t / 3600)
    const m = Math.floor((t % 3600) / 60)
    const s = t % 60
    return `${h} saat ${m} dəqiqə ${s} saniyə`
  }

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="number" placeholder="Saat" onChange={e => setInput({ ...input, hour: +e.target.value })} />
        <input type="number" placeholder="Dəqiqə" onChange={e => setInput({ ...input, min: +e.target.value })} />
        <input type="number" placeholder="Saniyə" onChange={e => setInput({ ...input, sec: +e.target.value })} />
      </div>
      <h1 style={{ fontSize: '3rem' }}>{formatTime(time)}</h1>
      <div>
        <button onClick={handleStart}>START</button>
        <button onClick={() => dispatch(pause())}>PAUSE</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </div>
  )
}

export default Timer;
