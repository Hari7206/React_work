import React from 'react'
import Button from './Button'
import Transparentbutton from './Transparentbutton'
function Service() {
    return (
        <div id='service'>
            <div className="service-clsss service-top">
                <span>
                    <div>Service</div>
                    <h2>
                        Explore our full range of coaching.
                        training, and tennis experiences. From
                        first serve to match point — we've
                        got the right program for you.
                    </h2>
                </span>
                <Button>Explore More <i class="ri-arrow-right-up-long-line"></i></Button>
            </div>
            <div className="service-clsss service-mid">
                <Transparentbutton>Training Program</Transparentbutton>
                <span>
                    <h3>Program and designed for all ages and abilities</h3>
                    <button> <i class="ri-arrow-right-up-long-line"></i> </button>
                </span>
            </div>
            <div className="service-clsss service-bottom">
                <div className="court-service">
                      <Transparentbutton>Court Acess</Transparentbutton>
                      <h3>Hourly Court Rental</h3>
                </div>
               <div className="court-service2">
                 <h3>Steps into a space built for players - to grow . compete and thrive .</h3>
                 <span>
                    <button><i class="ri-arrow-left-long-fill"></i></button>
                    <button><i class="ri-arrow-right-long-fill"></i></button>
                 </span>
               </div>
            </div>

        </div>
    )
}

export default Service