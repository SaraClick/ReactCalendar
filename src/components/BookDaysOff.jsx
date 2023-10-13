import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CalendarPicker from "./calendar/CalendarPicker";
import TrackingTable from "./trackingTable/TrackingTable";
import Holidays from "./bankHolidays/BankHolidays";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function BookDaysOff({
  allowance,
  allowanceUsed,
  allowanceAvailable,
  setAllowanceUsed,
  setAllowanceAvailable,
  bankHolidays,
}) {
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
                <Accordion.Header>Upcoming Bank Holidays</Accordion.Header>
                <Accordion.Body>
                <Holidays bankHolidays={bankHolidays} />
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
