import React from "react";
import Accordion from "react-bootstrap/Accordion";
import BookedHolidays from "../bookedHolidays/BookedHolidays";
import BankHolidays from "../bankHolidays/BankHolidays";

function UpcomingAccordion({ bankHolidays, daysBooked }) {
  return (
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
  );
}

export default UpcomingAccordion;
