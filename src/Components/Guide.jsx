import React from 'react'
import { Container } from 'react-bootstrap'
import'../CSS/guide.css'
import window1 from '../assets/window1.png';
import window2 from '../assets/window2.jpg';
import plane from '../assets/planeoutside.png';

function Guide() {
  return (
    <>
        <Container className=''>
            <section id="support">
                <div className="content">
                    <h3>TRAVEL SUPPORT</h3>
                    <h2>Plan your travel with confidence</h2>
                    <p>find help with booking and travel plans,see what to expect along the journey </p>   
                </div>
            </section>
            <section  id="guide">
                <div className="left">
                    <div className="requirement cnt">
                        <span>01</span>
                        <h2>Travel requirements for your Destinations</h2>
                        <p>Find help booking and travel plans,see what to expect along the journey to your favourite destinations!</p>
                    </div>
                    <div className="services cnt">
                    <span>02</span>
                        <h2>Chauffeur services at your arrival</h2>
                        <p>Find help booking and travel plans,see what to expect along the journey to your favourite destinations!</p>
                    </div>
                    <div className="insurance cnt">
                    <span>03</span>
                        <h2>Multi-risk travel insurances</h2>
                        <p>Find help booking and travel plans,see what to expect along the journey to your favourite destinations!</p>
                    </div>  
                </div>
                <div className="right">
                    <img src={window1}  className='window1' alt="" />
                    <img src={window2}  className="window2" alt="" />
                    <img src={plane} alt="" className='plane'/>
                </div>
            </section>
        </Container>
    </>
  )
}

export default Guide