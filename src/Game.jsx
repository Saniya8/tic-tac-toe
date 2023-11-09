import React, { useState, useEffect } from 'react'
import './Game.css';
import Board from './Board';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Game() {

    const notify = () => toast("Wow so easy!");

    const [count, setCount] = useState(Array(9).fill(null));
    // console.log("State is", count)

    const [userturn, setUserTurn] = useState('');

    const handleClick = (index) => {
        if (count[index] !== null) {
            return;
        }
        const copyCount = [...count];
        copyCount[index] = userturn === 'x' ? 'o' : 'x';
        setCount(copyCount)
        setUserTurn(copyCount[index])
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
                return count[x];
            }
        }
        return false;
    }

    const winner = winnerLogic();

    const playAgain = () => {
        setCount(Array(9).fill(null));
    }

    const tie = () => {
        if (count.every((value) => value !== null)) {
            return 'It is a Tie!'; // Return 'Tie' if all cells are filled and there is no winner
        }
    }

    return (
        <div>
            {winner ? (<>{winner} won the game.</>) : tie() ? (<>{tie()}</>) :
                (
                    <>
                        <h1>Player {userturn === 'x' ? 'o' : 'x'} please move on</h1>
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
                            <button onClick={playAgain}>Play again</button>

                            <button onClick={notify}>Invite your friend</button>
                            <ToastContainer />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Game