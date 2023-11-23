import React from 'react'
import { useState, useEffect } from 'react'
import './Quote.css'
import Image from './assets/image.png'
import Image2 from './assets/image_2.png'

function Quote() {

    const [quote, setQuote] = useState('Loading..');
    const [count, setCount] = useState('');

    const fetchquotes = async () => {
        try {
            const fetchdata = await fetch('https://api.adviceslip.com/advice')
            const data = await fetchdata.json();
            console.log(data.slip.advice)
            setCount(data.slip.id)
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
        <div className='quote'>
            <div className='quote-container'>
                <h1 className='quote-title'>Quote #<span>{count}</span></h1>
                <p className='quote-p'>"{quote}"</p>
                <div className='quote-img'>
                    <img src={Image} alt="image" />
                    {/* <img src={Image2} alt="image_2" /> */}
                </div>
            </div>
        </div>
    )
}

export default Quote