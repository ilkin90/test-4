import { useDispatch, useSelector } from 'react-redux'
import { start, pause, reset, tick, addLap } from '../redux/timerslice'
import { useEffect } from 'react'

const Stopwatch = () => {
  const dispatch = useDispatch()
  const { time, isRunning, laps } = useSelector(state => state.timer)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => dispatch(tick()), 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, dispatch])

  const formatTime = (t) => {
    const h = Math.floor(t / 3600)
    const m = Math.floor((t % 3600) / 60)
    const s = t % 60
    return `${h} saat ${m} dəqiqə ${s} saniyə`
  }

  return (
    <div>
      <h1 style={{ fontSize: '3rem' }}>{formatTime(time)}</h1>
      <div>
        <button onClick={() => dispatch(start())}>Start</button>
        <button onClick={() => dispatch(pause())}>Pause</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(addLap())}>➕</button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <h3>Dövrələr</h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>{formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Stopwatch
