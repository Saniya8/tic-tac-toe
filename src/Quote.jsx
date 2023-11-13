import React from 'react'
import { useState, useEffect } from 'react'
import './Quote.css'

function Quote() {

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
        <div className='quote-container'>
            <h1>You can see data here</h1>
            <p>{quote}</p>
        </div>
    )
}

export default Quote