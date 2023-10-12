import React from "react";
import Calendar from "react-calendar";
import { useState, useEffect, useRef } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "../../App.css";
import dayjs from "dayjs";

function CalendarPicker({
  holidays,
  allowance,
  allowanceUsed,
  allowanceAvailable,
  setAllowanceUsed,
  setAllowanceAvailable,
}) {
  const [date, setDate] = useState(new Date());

  const [daysPicked, setDaysPicked] = useState([]);

  const [daysBooked, setDaysBooked] = useState([]);

  /**
   @todo: 
   - Add Bank Holidays to the calendar so we can visually identify them (same as weekend)
   - Raise an alert if Bank Holiday is Selected
   - Button to book the daysPicked on click
      - booked days should show in a different color
      - available and booked days to be adjusted upon booking (pass down setters)
      - user should not be allowed to select booked days (add a use state for bookedDays?)
  **/

  function dateClick(e) {
    setDate(e);

    if (dayjs(e).isAfter(dayjs())) {
    if (!daysPicked.includes(e.toDateString())) {
      if (e.getDay() === 6 || e.getDay() === 0) {
        alert("Weekends cannot be booked as holiday");
      } else {
        // ...daysPicked is creating a shallow copy of the array
        setDaysPicked([...daysPicked, e.toDateString()]);
      }
    } else {
      // creates a new array removing the unselected item and sets the DayPicked to that new array
      const newDaysPicked = daysPicked.filter(
        (day) => day !== e.toDateString()
      );
      setDaysPicked(newDaysPicked);
    }
  } else {
    alert("You cannot book days in the past")
  }}

  // Function to customize the colour of calendar tiles
  const tileClassName = ({ date, view }) => {
    let result = "";
    if (view === "month") {
      const dateString = date.toDateString();
      if (daysPicked.includes(dateString)) {
        // class name to be returned
        result += "selected-date";
      }
      if (daysBooked.includes(dateString)) {
        result += "booked-date";
      }
    }

    return result;
  };

  const submitBooking = () => {
    const numDays = daysPicked.length;
    console.log("daysPicked", daysPicked);
    console.log("numDays", numDays);
    if (numDays > allowanceAvailable) {
      console.log("allowanceAvailable: ", allowanceAvailable);
      alert(
        "You cannot book more days than the available.\nPlease review your selection."
      );
    } else {
      setDaysBooked(daysBooked.concat(daysPicked))
      console.log("daysBooked", daysBooked)
      console.log("setAllowanceUsed: ", allowanceUsed - numDays);
      setAllowanceUsed(allowanceUsed + numDays);
      setAllowanceAvailable(allowanceAvailable - numDays);
      setDaysPicked([]);
    }
  };

  return (
    <>
      <Container className="calendar-container container">
        <Row>
          <Calendar
            onChange={dateClick}
            value={date}
            tileClassName={tileClassName}
          />
        </Row>
        <Row>
          <p><span className="react-calendar__tile--now">Today</span>  ||  <span className="selected-date">Picked, not yet booked</span>  ||  <span className="booked-date">Booked day</span></p>
        </Row>
        {/* <Row>
          <div className="text-center pagetitle">
            Selected date: {date.toDateString()}
          </div>
        </Row> */}
      </Container>

      <Container className="container booking">
        <Button onClick={submitBooking}>Book {daysPicked.length ? daysPicked.length : ""} days</Button>
        {/* Render the selected dates with the CSS class */}
        <div className="list-booked">
          {daysPicked.map((selectedDate, index) => (
            <div key={index}>{selectedDate}</div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default CalendarPicker;
