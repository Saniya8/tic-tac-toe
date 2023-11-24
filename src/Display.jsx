import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Display.css';

const Display = () => {

    // Notification toast
    const notify = () => toast("Invite link copied");

    return (
        <div>
            <div className='display-main'>
                <div className='display-box'>
                    <div className='display-two'>
                        <button>NEW GAME ( VS CPU )</button>
                        <button>NEW GAME ( VS HUMAN ) Coming soon</button>
                    </div>
                    <div className='display-three'>
                        <button onClick={notify}>Invite your friend</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display