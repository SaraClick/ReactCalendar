import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CalendarPicker from "./CalendarPicker";
import TrackingTable from "../trackingTable/TrackingTable";

function BookDaysOff({ allowance, daysBooked }) {
  return (
    <Container>
      <Row>
        <TrackingTable allowance={allowance} daysBooked={daysBooked} />
      </Row>
      <Row>
        <CalendarPicker />
      </Row>
    </Container>
  );
}

export default BookDaysOff;
