import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button} from "react-bootstrap";
import "../CSS/Booking.css";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
// import { TbArrowsRightLeft } from "react-icons/tb";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsCalendarPlus } from "react-icons/bs";
import { MdOutlineFlightClass } from "react-icons/md";
import format from "date-fns/format";
import DatePicker from 'react-datepicker';
import { addDays } from "date-fns";
import 'react-datepicker/dist/react-datepicker.css';

function Booking() {
  const [isRoundtrip, setIsRoundTrip] = useState(true);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const refFrom = useRef(null);
  const refTo = useRef(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState('Economy');

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  const places = ["new York", "Los Angeles","Chicago", "Miami", "Karippur", "Kochi", "Mumbai", "Delhi", "Chennai", "Bangalore", "Hyderabad", "Kolkata"];

  const handleTripTypeChange = (e) => {
    const tripType = e.target.value;
    setIsRoundTrip(tripType === "roundTrip");
    if (tripType === 'oneWay') {
      setToDate(null); // Optionally clear the toDate when "One Way" is selected
    }
  };

  const handleClickOutside = (e) => {
    if (refFrom.current && !refFrom.current.contains(e.target)) {
      setOpenFrom(false);
    }
    if (refTo.current && !refTo.current.contains(e.target)) {
      setOpenTo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="Ticket">
      <Container>
        <div className="ticket_box">
          <Row className="align-items-center mb-4 trip-row">
            <Col xs={12} md={6} className="trip-type">
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
            {/* Passengers and Cabin Class */}
            <Col xs = {12} md = {6} className="align-items-center people">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select Passengers and Cabin Class
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Row className="p-2">
                    <Col xs={6}>Adults</Col>
                    <Col xs={6} className="text-end">
                      <Button variant="outline-secondary" size="sm" onClick={() => decrement(setAdults, adults)}>-</Button>
                      <span className="mx-2">{adults}</span>
                      <Button variant="outline-secondary" size="sm" onClick={() => increment(setAdults, adults)}>+</Button>
                    </Col>
                  </Row>
                  <Row className="p-2">
                    <Col xs={6}>Children</Col>
                    <Col xs={6} className="text-end">
                      <Button variant="outline-secondary" size="sm" onClick={() => decrement(setChildren, children)}>-</Button>
                      <span className="mx-2">{children}</span>
                      <Button variant="outline-secondary" size="sm" onClick={() => increment(setChildren, children)}>+</Button>
                    </Col>
                  </Row>
                  <Row className="p-2">
                    <Col xs={6}>Infants</Col>
                    <Col xs={6} className="text-end">
                      <Button variant="outline-secondary" size="sm" onClick={() => decrement(setInfants, infants)}>-</Button>
                      <span className="mx-2">{infants}</span>
                      <Button variant="outline-secondary" size="sm" onClick={() => increment(setInfants, infants)}>+</Button>
                    </Col>
                  </Row>
                  <Row className="p-2">
                    <Col xs={12}>
                      <Form.Select value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First Class">First Class</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Dropdown.Menu>
              </Dropdown>
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
                <Form.Control
                  as="select"
                  className="to form-control"
                  value= {arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  placeholder="To"
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
          {/* calender */}
            <Col xs={12} md={6} className="calendarWrap">
              <span className="calender-icon">
                <BsCalendarPlus />
              </span>
              <input
                value={format(fromDate, "MM/dd/yyyy")}
                readOnly
                className="form-control inputBox"
                onClick={() => setOpenFrom((open) => !open)}
              />
              <span className="date-superscript">From Date</span>
              <div ref={refFrom} className="calender-container">
                {openFrom && (
                  <DatePicker
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    // editableDateInputs
                    className="calendarElement"
                    inline
                  />
                )}
              </div>
            </Col>
            <Col xs={12} md={6} className="calendarWrap">
              <span className="calender-icon">
                <BsCalendarPlus />
              </span>
              <input
                value={toDate ? format(toDate, "MM/dd/yyyy"): ""}
                readOnly
                className="form-control inputBox"
                onClick={() => setOpenTo((open) => !open)}
                disabled={!isRoundtrip}
              />
              <span className="date-superscript">To Date</span>
              <div ref={refTo} className="calender-container">
                {openTo && isRoundtrip && (
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                    // editableDateInputs
                    className="calendarElement"
                    inline
                  />
                )}
              </div>
            </Col>
            {/* <Col xs={12} md={6} className="cabin-class">
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
            </Col> */}
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
