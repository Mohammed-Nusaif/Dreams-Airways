import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import '../CSS/memories.css'

function Memories() {
  return (
    <>
    
        <section id="memories">
            <Container>
                <section className="top">
                    <div className="left"><h2>Travel to make memories all <br />around the world</h2></div>
                    <div className="right"><Button className='btn' >view all</Button></div>
                </section>
                <section className="bottom">
                    <div className="box box1" >
                        <span><FaRegCalendarAlt /></span>
                        <h4>Book & Relax</h4>
                        <p>you can also call airlines from your phone and book a flight ticket </p>
                    </div>
                    <div className="box box2">
                        <span><GoChecklist/></span>
                        <h4>Smart Checklist</h4>
                        <p>you can also call airlines from your phone and book a flight ticket</p>
                    </div>
                    <div className="box box3">
                        <span><BsBookmarkCheck/></span>
                        <h4>Save More</h4>
                        <p>you can also call airlines from your phone and book a flight ticket</p>
                    </div>
                </section>
            </Container>
            
        </section>
    
    </>
  )
}

export default Memories