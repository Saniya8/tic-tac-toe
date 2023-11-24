import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Display.css';
import PlayBoard from './PlayBoard';

const Display = () => {

    // Notification toast
    const notify = () => toast("Invite link copied");

    return (
        <div>
            <div className='display-main'>
                <div className='display-box'>
                    <div className='display-two'>
                        <button className='cpu-game' onClick={console.log("Button clicked")}>NEW GAME ( VS CPU )</button>
                        <button className='human-game'>NEW GAME ( VS HUMAN ) Coming soon</button>
                    </div>
                    <div className='display-three'>
                        <button className='invite-button' onClick={notify}>Invite your friend</button>
                        {/* <button style={{ cursor: 'pointer', }}>Click me</button> */}
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display