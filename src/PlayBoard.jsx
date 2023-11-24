import React, { useState, useEffect } from 'react'
import Board from './Board';

const PlayBoard = () => {

    const [count, setCount] = useState(Array(9).fill(null));
    const [userturn, setUserTurn] = useState('');
    const [gameStarted, setGameStarted] = useState(false);

    // player's logic
    const handleClick = (index) => {
        if (count[index] !== null || !gameStarted) {
            return;
        }
        const copyCount = [...count];
        copyCount[index] = userturn;
        setCount(copyCount)
        setUserTurn(userturn === 'x' ? 'o' : 'x')
    }

    // Computer's logic
    const computerLogic = (count) => {
        const emptyArray = [];
        for (let i = 0; i < 9; i++) {
            if (count[i] == null) {
                emptyArray.push(i)
            }
        }
        const randomIndex = Math.floor(Math.random() * emptyArray.length);
        return emptyArray[randomIndex]
    }

    const handlePlayerChoice = (choice) => {
        setUserTurn(choice);
        setGameStarted(true);
    };

    // game play
    useEffect(() => {
        if (userturn === 'o' && gameStarted) {
            const empty = computerLogic(count)
            const copyCount = [...count];
            copyCount[empty] = 'o';
            setCount(copyCount)
            setUserTurn('x')
        }
    }, [count, userturn, gameStarted])

    // Winner
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

    // Tie logic
    const tie = () => {
        if (count.every((value) => value !== null)) {
            return 'It is a Tie!'; // Return 'Tie' if all cells are filled and there is no winner
        }
    }

    // Play again
    const playAgain = () => {
        setCount(Array(9).fill(null));
    }

    return (
        <div>
            {gameStarted ? (
                <p>Current Turn: {userturn === 'x' ? 'x turn' : 'o turn'}</p>
            ) : (
                <div>
                    <p>Choose 'x' or 'o' to start:</p>
                    <button onClick={() => handlePlayerChoice('x')}>Choose X</button>
                    <button onClick={() => handlePlayerChoice('o')}>Choose O</button>
                </div>
            )}
            {winner ? (<>{winner} won the game.</>) : tie() ? (<>{tie()}</>) :
                (
                    <>
                        {/* <h1>{userturn === 'x' ? 'o' : 'x'} turn</h1> */}
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


                        </div>
                    </>
                )
            }
        </div>
    )
}

export default PlayBoard