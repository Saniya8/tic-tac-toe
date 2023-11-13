import React from 'react'
import { useState, useEffect } from 'react'
import './Quote.css'
import Image from './assets/image_2.png'

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
            <h1 className='quote-title'>Quote #1</h1>
            <p className='quote-p'>"{quote}"</p>
            <img src={Image} alt="image" />
        </div>
    )
}

export default Quote