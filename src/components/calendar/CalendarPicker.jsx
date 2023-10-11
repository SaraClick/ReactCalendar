import React from "react";
import Calendar from "react-calendar";
import { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import '../../App.css'


function CalendarPicker() {
  const [date, setDate] = useState(new Date());

  const [daysPicked, setDaysPicked] = useState([]);



  function dateClick(e) {
    setDate(e)
    console.log("e: ", e)
    console.log("date: ", date)
    console.log("daysPicked BEFORE: ", daysPicked)
    if(!daysPicked.includes(e.toDateString())) {
      setDaysPicked([...daysPicked,e.toDateString()])} else {
        const newDaysPicked = daysPicked.filter(day => day !== e.toDateString());
        setDaysPicked(newDaysPicked)
      }
      // ...daysPicked is creating a copy of the array (shallow)
    console.log("click action")
    console.log("daysPicked AFTER: ",daysPicked)
  }


  // gets called on re-render 

  console.log("render")
  console.log(daysPicked)

  return (
    <>
      <Container className="calendar-container">
        <Row>
          <Calendar onChange={dateClick} value={date} />
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
          <div key={index} >
            {selectedDate}
          </div>
        ))}
      </div>
    </>
  );
}

export default CalendarPicker;
