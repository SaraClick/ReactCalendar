import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CalendarPicker from "./calendar/CalendarPicker";
import TrackingTable from "./trackingTable/TrackingTable";
import BankHolidays from "./bankHolidays/BankHolidays";
import Accordion from "react-bootstrap/Accordion";
import BookedHolidays from "./bookedHolidays/BookedHolidays";
import { useState } from "react";

function BookDaysOff({
  allowance,
  allowanceUsed,
  allowanceAvailable,
  setAllowanceUsed,
  setAllowanceAvailable,
  bankHolidays,
}) {
  const [daysBooked, setDaysBooked] = useState([]);

  return (
    <Row>
      <Col>
        <CalendarPicker
          bankHolidays={bankHolidays}
          allowance={allowance}
          allowanceUsed={allowanceUsed}
          allowanceAvailable={allowanceAvailable}
          setAllowanceUsed={setAllowanceUsed}
          setAllowanceAvailable={setAllowanceAvailable}
          daysBooked={daysBooked}
          setDaysBooked={setDaysBooked}
        />
      </Col>
      <Col>
        <Row>
          <TrackingTable
            className="main-tracking-table"
            allowance={allowance}
            allowanceUsed={allowanceUsed}
            allowanceAvailable={allowanceAvailable}
          />
        </Row>
        <Row>
          <Accordion className="main-accordion">
            <Accordion.Item className="accordion-bankholiday" eventKey="0">
              <Accordion.Header>
                <span>View upcoming Public Bank Holidays</span>
              </Accordion.Header>
              <Accordion.Body>
                <BankHolidays bankHolidays={bankHolidays} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="accordion-bookedholidays" eventKey="1">
              <Accordion.Header>
                <span>View your upcoming Booked Holidays</span>
              </Accordion.Header>
              <Accordion.Body>
                <BookedHolidays daysBooked={daysBooked} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Col>
    </Row>
  );
}

export default BookDaysOff;
