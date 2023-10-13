import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CalendarPicker from "./CalendarPicker";
import TrackingTable from "../trackingTable/TrackingTable";
import Holidays from "../holidays/Holidays";

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
          <Holidays bankHolidays={bankHolidays}/>
        </Row>
      </Col>
      </Row>
    </Container>
  );
}

export default BookDaysOff;
