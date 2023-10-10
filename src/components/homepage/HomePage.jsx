import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import calendarIcon from "../../assets/calendar-icon.png";
import filesIcon from "../../assets/files-icon.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Container className="homepage-container">
        <Row>
          <Col>
            <Link to={`/Calendar`}>
              <img src={calendarIcon} alt="calendar icon" />
            </Link>
          </Col>
          <Col>
            <Link to={`/Holidays`}>
      
              <img src={filesIcon} alt="files icon for absence booking" />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
