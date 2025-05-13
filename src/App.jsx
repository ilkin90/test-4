import { useDispatch, useSelector } from 'react-redux'
import { setMode } from './redux/timerslice'
import Fulltime from './components/Fulltime'
import Stopwatch from './components/Stopwatch'
import Timer from './components/Timer'

const App = () => {
  const mode = useSelector(state => state.timer.mode)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => dispatch(setMode('fulltime'))} className={mode === 'fulltime' ? 'active' : ''}>Fulltime</button>
        <button onClick={() => dispatch(setMode('stopwatch'))} className={mode === 'stopwatch' ? 'active' : ''}>Stopwatch</button>
        <button onClick={() => dispatch(setMode('timer'))} className={mode === 'timer' ? 'active' : ''}>Timer</button>
      </div>

      {mode === 'fulltime' && <Fulltime />}
      {mode === 'stopwatch' && <Stopwatch />}
      {mode === 'timer' && <Timer />}
    </div>
  )
}

export default App
