import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import calendarIcon from "../../assets/calendar-icon.png";
import filesIcon from "../../assets/files-icon.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import TrackingTable from "../trackingTable/TrackingTable";

function HomePage({ allowance, allowanceUsed, allowanceAvailable }) {
  return (
    <>
      <Container className="homepage-container container-fluid">
        <TrackingTable
          allowance={allowance}
          allowanceUsed={allowanceUsed}
          allowanceAvailable={allowanceAvailable}
        />

        <Row>
          <Col>
            <Link to={`/Calendar`}>
              <img src={calendarIcon} alt="calendar icon" />
              <p>Book time off</p>
            </Link>
          </Col>
          <Col>
            <Link to={`/Holidays`}>
              <img src={filesIcon} alt="files icon for absence booking" />
              <p> Bank Holidays</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
