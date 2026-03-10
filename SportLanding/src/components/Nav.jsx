import React from 'react'
import Button from './Button'
function Nav() {
    return (
        <div id='nav'>
            <div className='nav-left'><h4>Horizon Courts</h4></div>
            <div className='nav-mid'>
                <span className='nav-about'>About us</span>
                <span> Services</span>
                <span> Coaches</span>
                <span>Events</span>
                <span>Contact</span>
            </div>
            <div className='nav-right'>
                <Button>Book Now  <i class="ri-arrow-right-up-long-line"></i></Button> 
            </div>
        </div>
    )
}

export default Nav