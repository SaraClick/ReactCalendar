import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";


function CalendarPicker() {
  const [date, setDate] = useState(new Date());

  

  return (
    <>
      <Container className="calendar-container">
        <Row>
          <Calendar onChange={setDate} value={date} />
        </Row>
        <Row>
          <div className="text-center">
            Selected date: {date.toDateString()}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CalendarPicker;
