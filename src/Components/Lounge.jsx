import React from "react";
import "../CSS/Lounge.css";
import { Container } from "react-bootstrap";
import airhost1 from "../assets/air-hostess-work-20395107.webp";
import airhost from "../assets/private-jet-2642985.webp";
function Lounge() {
  return (
    <>
      <section id="main">
        <Container>
          <section className="content">
            <div className="left">
              <h3>Unaccompanied Minor Lounge</h3>
              <div className="main_part">
                <div className="parts">
                  <h5>Help through the airpot</h5>
                  <p>
                    you can also call the airlines and book a flight ticket to
                    one of your favourite destinations
                  </p>
                </div>
                <div className="parts">
                  <h5>Priority Boarding</h5>
                  <p>
                    you can also call the airlines and book a flight ticket to
                    one of your favourite destinations
                  </p>
                </div>
                <div className="parts">
                  <h5>Care on the flight</h5>
                  <p>
                    you can al so call the airlines and book a flight ticket to
                    one of your favourite destinations
                  </p>
                </div>
                <div className="parts">
                  <h5>Chauffeur-drive service </h5>
                  <p>
                    you can also call the airlines and book a flight ticket to
                    one of your favourite destinations
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="inside">
                <img src={airhost} alt="" className="img1" />
                <img src={airhost1} alt="" className="img2" />
              </div>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
}

export default Lounge;
