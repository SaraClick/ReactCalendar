import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const holidaysApiUrl = "https://www.gov.uk/bank-holidays.json";

function Holidays({ holidays, setHolidays }) {
  // fetch returns a promise due to the request not being an instant response.
  // promise will ensure that you can process the response upon receipt
  // Use effect will only call in once this event
  useEffect(() => {
    fetch(holidaysApiUrl).then((holidaysResponse) => {
      // using console.log will call the API a second time because is a use effect
      // You can remove the Stric Mode to avoid this and only run it once
      //   console.log("holidays response: ", holidaysResponse.text());
      holidaysResponse.json().then((holidaysRes) => {
        const { division, events } = holidaysRes["england-and-wales"];

        setHolidays({
          division,
          events,
        });
      });
    });
  }, []);

  return (
    <>
    <Container className="container-fluid">
      <h2>Holidays for: {holidays.division}</h2>
      <div className="holiday-events">
        {holidays.events.map((holiday, index) => {
          return (
            <Cards key={index} title={holiday.title} date={holiday.date} />
          );
        })}
      </div>
      </Container>
    </>
  );
}

export default Holidays;
