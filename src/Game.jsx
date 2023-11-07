import React, { useState } from 'react'
import './Game.css';
import Board from './Board';

function Game() {

    const [count, setCount] = useState(Array(9).fill(null));
    // console.log("State is", count)

    const [xturn, setXTurn] = useState(true);

    const handleClick = (index) => {
        const copyCount = [...count];
        copyCount[index] = xturn ? 'x' : 'o'
        setCount(copyCount)
        setXTurn(!xturn)
    }

    const winnerLogic = () => {
        const logic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let items of logic) {
            const [x, y, z] = items;
            if (count[x] == count[y] && count[x] == count[z] && count[x] != null) {
                return true;
            }
        }
        return false;
    }

    const winner = winnerLogic();

    return (
        <div>
            {winner ? (<>Someone won</>) :
                (
                    <>
                        <div className='game-container'>
                            <div className='game-row'>
                                <button onClick={() => handleClick(0)}><Board value={count[0]} /></button>
                                <button onClick={() => handleClick(1)}><Board value={count[1]} /></button>
                                <button onClick={() => handleClick(2)}><Board value={count[2]} /></button>
                            </div>
                            <div className='game-row'>
                                <button onClick={() => handleClick(3)}><Board value={count[3]} /></button>
                                <button onClick={() => handleClick(4)}><Board value={count[4]} /></button>
                                <button onClick={() => handleClick(5)}><Board value={count[5]} /></button>
                            </div>
                            <div className='game-row'>
                                <button onClick={() => handleClick(6)}><Board value={count[6]} /></button>
                                <button onClick={() => handleClick(7)}><Board value={count[7]} /></button>
                                <button onClick={() => handleClick(8)}><Board value={count[8]} /></button>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Game