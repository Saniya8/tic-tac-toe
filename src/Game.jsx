import React, { useState, useEffect } from 'react'
import './Game.css';
import x_image from './assets/x.png';
import o_image from './assets/o.png';
import Display from './Display';
import PlayBoard from './PlayBoard';

function Game() {

    return (
        <div className='container'>

            <div className='home'>
                <div className='main-img'>
                    <img src={x_image} alt="x" />
                    <img src={o_image} alt="o" />
                </div>

                <div className='box'>
                    <div className='home-box'>
                        <div className='pick-player'>PICK PLAYER</div>
                        <div className='home-content'>
                            <button><img src={x_image} alt="x" /></button>
                            <button><img src={o_image} alt="o" /></button>
                        </div>
                    </div>
                </div>
                {/* <PlayBoard /> */}
                <Display />
            </div>
        </div>
    )
}

export default Game