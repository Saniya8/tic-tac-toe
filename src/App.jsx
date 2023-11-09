import './App.css'
import { useState, useEffect } from 'react'
import Game from './Game'

function App() {

  const [quote, setQuote] = useState('Loading..');

  const fetchquotes = async () => {
    try {
      const fetchdata = await fetch('https://api.adviceslip.com/advice')
      const data = await fetchdata.json();
      console.log(data.slip.advice)
      setQuote(data.slip.advice)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchquotes()
    const interval = setInterval(() => {
      fetchquotes()
    }, 60000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <Game />
      <h1>You can see data here</h1>
      <p>{quote}</p>
      {/* <button onClick={fetchquotes}>click here</button> */}
    </div>
  )
}

export default App
