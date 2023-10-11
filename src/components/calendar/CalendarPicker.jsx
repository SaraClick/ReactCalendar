import React from "react";
import Calendar from "react-calendar";
import { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import "../../App.css";

function CalendarPicker({ holidays }) {
  const [date, setDate] = useState(new Date());

  const [daysPicked, setDaysPicked] = useState([]);

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
  }

  // Function to customize the colour of calendar tiles
  const tileClassName = ({ date, view }) => {
    let result = "";
    if (view === "month") {
      const dateString = date.toDateString();
      if (daysPicked.includes(dateString)) {
        // class name to be returned
        result += "selected-date";
      }
    }

    return result;
  };

  // gets called on re-render

  console.log("render");
  console.log(daysPicked);

  return (
    <>
      <Container className="calendar-container">
        <Row>
          <Calendar
            onChange={dateClick}
            value={date}
            tileClassName={tileClassName}
          />
        </Row>
        <Row>
          <div className="text-center pagetitle">
            Selected date: {date.toDateString()}
          </div>
        </Row>
      </Container>
      {/* Render the selected dates with the CSS class */}
      <div className="list-booked">
        {daysPicked.map((selectedDate, index) => (
          <div key={index}>{selectedDate}</div>
        ))}
      </div>
    </>
  );
}

export default CalendarPicker;
