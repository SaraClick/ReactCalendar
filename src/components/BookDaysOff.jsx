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
    <Container>
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
              allowance={allowance}
              allowanceUsed={allowanceUsed}
              allowanceAvailable={allowanceAvailable}
            />
          </Row>
          <Row>
            

            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>View upcoming Public Bank Holidays</Accordion.Header>
                <Accordion.Body>
                <BankHolidays bankHolidays={bankHolidays} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>View your upcoming Booked Holidays</Accordion.Header>
                <Accordion.Body>
                <BookedHolidays daysBooked={daysBooked} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BookDaysOff;
