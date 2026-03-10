import React from 'react'
import Button from './Button'
import Transparentbutton from './Transparentbutton'

function Hero() {
    return (
        <div id='Hero'>
            <div className='hero-top'>
                <h1>
                    Unleash Your Inner Champion Today.
                    All In One Place.
                </h1>
                <p>
                    Join the ultimate tennis experience — where passion meets performance.
                    and every swing brings you closer to victory,</p> 
                <Button>Start your own journey</Button>
            </div>
            <div className='hero-bottom'>
                <div className="hero-left">
                    <p>Train with real professional . get the real result</p>
                    
                    <div className="hero-imgs">
                          <Transparentbutton>
                            <img src="https://i.pinimg.com/736x/73/9a/71/739a712a2853d5f77ff1e631bb29c4e7.jpg" alt="" />
                            <img src="https://i.pinimg.com/736x/13/41/7f/13417f44f196ee358b7b1685367dc5bd.jpg" alt="" />
                            <img src="https://i.pinimg.com/736x/39/47/60/3947601de20a364346a15dd5cfdafb33.jpg" alt="" />
                        </Transparentbutton>
                    </div>
                        
                </div>
                <div className="hero-right">
                    <button >Instagram</button>
                    <button>Facebook</button>
                    <button>Tik Tok</button>
                </div>
            </div>
        </div>
    )
}

export default Hero