import './App.css'
import { useState, useEffect } from 'react'
import LandPage from './components/LandPage'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [])
  return (
    <div className="app">
      {/* <LandPage/> */}
      {/* <LoadingScreen/> */}
    {loading ? <LoadingScreen /> : <LandPage />}
    </div>
  )
}

export default App
