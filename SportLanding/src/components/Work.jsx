import { useState } from 'react'
import Transparentbutton from './Transparentbutton'
function Work() {

    const [gameMode, setGameMode] = useState(false)

    return (
        <div id='work'>
            <div className='work-left'>
                <img src="https://horizon-courts-tennis.netlify.app/assets/court-CVYUlr6F.png" alt="" />
                <h3>
                    Professional hard courts
                    <span> with tournament-grade
                        lightning & Climate control —
                        play in </span> perfect conditions,
                    in any season
                </h3>

                <div
                    className='work-game'
                    onClick={() => setGameMode(!gameMode)}
                >
                    <div className={`toggle ${gameMode ? "active" : ""}`}></div>
                    Game Mode
                </div>

            </div>

            <div className='work-mid'>
                <Transparentbutton> Private & Group Lesson</Transparentbutton>
            </div>
            <div className='work-right'>
                <div className="work-top">
                    <h1>100+</h1>
                    <h2>Pro Coaches</h2>
                    <p>Certified professional ready to boast your
                        game from first serve to tournament level</p>
                </div>
                <div className="work-bottom">
                    <div className='bottom-div'>
                            <h1>Begginer</h1>
                            <div className="circle">
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                            </div>
                        <h3>55</h3>
                    </div>
                    <div className='bottom-div'>
                            <h1>Intermediate</h1>
                            <div className="circle">
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>

                            </div>
                        <h3>40</h3>
                    </div>
                    <div className='bottom-div'>
                            <h1>Advance</h1>
                            <div className="circle">
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                <div className="bluecircle"></div>
                                
                            </div>
                        <h3>35</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Work