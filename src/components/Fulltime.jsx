import { useEffect, useState } from 'react'

const Fulltime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (value) => value.toString().padStart(2, '0')

  return (
    <h1 style={{ fontSize: '5rem' }}>
      {formatTime(time.getHours())} {formatTime(time.getMinutes())} {formatTime(time.getSeconds())}
    </h1>
  )
}

export default Fulltime
