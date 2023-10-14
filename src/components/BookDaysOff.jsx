import React from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CalendarPicker from "./calendar/CalendarPicker";
import TrackingTable from "./trackingTable/TrackingTable";
import UpcomingAccordion from "./accordionUpcomingView/UpcomingAccordion";
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
          <UpcomingAccordion
            bankHolidays={bankHolidays}
            daysBooked={daysBooked}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default BookDaysOff;
