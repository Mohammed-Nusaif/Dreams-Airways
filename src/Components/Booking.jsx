import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form} from "react-bootstrap";
import "../CSS/Booking.css";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { TbArrowsRightLeft } from "react-icons/tb";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsCalendarPlus } from "react-icons/bs";
import { MdOutlineFlightClass } from "react-icons/md";
import format from "date-fns/format";
import { addDays } from "date-fns";

function Booking() {
  const [isRoundtrip, setIsRoundTrip] = useState(true);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("")

  const places = ["new York", "Los Angeles","Chicago", "Miami", "Karippur", "Kochi", "Mumbai", "Delhi", "Chennai", "Bangalore", "Hyderabad", "Kolkata"];

  const handleTripTypeChange = (e) => {
    setIsRoundTrip(e.target.value === "roundTrip");
  };

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <section id="Ticket">
      <Container>
        <div className="ticket_box">
          <Row className="align-items-center mb-4 trip-row">
            <Col xs={12} md={12} className="trip-type">
              <label className="me-3">
                <input
                  type="radio"
                  name="tripType"
                  value="roundTrip"
                  checked={isRoundtrip}
                  onChange={handleTripTypeChange}
                />
                Round Trip
              </label>
              <label>
                <input
                  type="radio"
                  name="tripType"
                  value="oneWay"
                  checked={!isRoundtrip}
                  onChange={handleTripTypeChange}
                />
                One Way
              </label>
            </Col>
            {/* <Col xs={12} md={6} className="text-center text-md-end">
              <TbArrowsRightLeft className="double-arrow" />
            </Col> */}
          </Row>

          <Row className="mb-4">
            <Col xs={12} md={6}>
              <div className="label-container">
                <FaPlaneDeparture className="departure" />
                <Form.Control
                  as ="select"
                  className="from form-control"
                  value = {departure}
                  onChange = {(e) => setDeparture(e.target.value)}
                  placeholder="Departure"
                >
                <option value="" disabled>
                  Select Departure
                </option>
                {
                  places.map((place, index) => (
                    <option key={index} value={place}>
                      {place}
                    </option>
                  ))
                }
                {/* <span className="from-superscript">FROM</span> */}
                </Form.Control>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="To-container">
                <FaPlaneArrival className="arrival" />
                <Form.Control as="select"
                  className="to form-control"
                  value= {arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  placeholder="To"
                  disabled={!isRoundtrip}
                >
                {/* <span className="to-superscript">TO</span> */}
                <option value="" disabled>
                  Select Arrival
                </option>
                {
                  places.map((place,index) => (
                    <option key={index} value={place}>
                      {place}
                    </option>
                  ))
                }
                </Form.Control>
              </div>
            </Col>
          </Row>

          <Row className="mb-4 fromto">
            <Col xs={12} md={6} className="calendarWrap">
              <span className="calender-icon">
                <BsCalendarPlus />
              </span>
              <input
                value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
                  range[0].endDate,
                  "MM/dd/yyyy"
                )}`}
                readOnly
                className="form-control inputBox"
                onClick={() => setOpen((open) => !open)}
              />
              <span className="date-superscript">Date</span>
              <div ref={refOne}>
                {open && (
                  <DateRangePicker
                    onChange={(item) => setRange([item.selection])}
                    editableDateInputs
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={1}
                    direction="vertical"
                    className="calendarElement"
                  />
                )}
              </div>
            </Col>
            <Col xs={12} md={6} className="cabin-class">
              <select name="main-cabin" className="form-select">
                <span className="cabin-icon">
                  <MdOutlineFlightClass />
                </span>
                <option value="main-cabin" disabled selected hidden>
                  Main cabin
                </option>
                <option value="economy-class">Economy Class</option>
                <option value="business-class">Business class</option>
              </select>
              <span className="cabin-superscript">Cabin Class</span>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <button className="btn btn-primary">SEARCH FLIGHTS</button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Booking;
