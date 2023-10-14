import React from "react";
import { Container } from "react-bootstrap";
import dayjs from "dayjs";

function ListPickedDays({ daysPicked }) {
  return (
    <Container className="list-booked-container">
      <div className="list-booked">
        {daysPicked.map((selectedDate, index) => (
          <div key={index}>{dayjs(selectedDate).format("D MMMM YYYY")}</div>
        ))}
      </div>
    </Container>
  );
}

export default ListPickedDays;
