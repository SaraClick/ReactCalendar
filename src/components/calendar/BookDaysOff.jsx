import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CalendarPicker from "./CalendarPicker";
import TrackingTable from "../trackingTable/TrackingTable";

function BookDaysOff({
  allowance,
  allowanceUsed,
  allowanceAvailable,
  setAllowanceUsed,
  setAllowanceAvailable,
  holidays,
}) {
  return (
    <Container>
      <Row>
        <TrackingTable
          allowance={allowance}
          allowanceUsed={allowanceUsed}
          allowanceAvailable={allowanceAvailable}
        />
      </Row>
      <Row>
        <CalendarPicker
          holidays={holidays}
          allowance={allowance}
          allowanceUsed={allowanceUsed}
          allowanceAvailable={allowanceAvailable}
          setAllowanceUsed={setAllowanceUsed}
          setAllowanceAvailable={setAllowanceAvailable}
        />
      </Row>
    </Container>
  );
}

export default BookDaysOff;
