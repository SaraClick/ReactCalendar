import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "../../App.css";
import dayjs from "dayjs";

function CalendarPicker({
  bankHolidays,
  allowanceUsed,
  allowanceAvailable,
  setAllowanceUsed,
  setAllowanceAvailable,
  daysBooked,
  setDaysBooked
}) {
  const [date, setDate] = useState(new Date());

  const [daysPicked, setDaysPicked] = useState([]);

  const bankHolidayStrings = bankHolidays.map((holiday) =>
    dayjs(holiday.date).toDate().toDateString()
  );

  daysPicked.sort((a, b) => (dayjs(a).isAfter(dayjs(b)) ? 1 : -1));

  function dateClick(e) {
    setDate(e);

    if (daysBooked.includes(e.toDateString())) {
      alert("Day already booked.");
    } else if (bankHolidayStrings.includes(e.toDateString())) {
      alert("Public Bank Holiday, already off work!");
    } else if (dayjs(e).isAfter(dayjs())) {
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
      alert("You cannot book days in the past");
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
      if (daysBooked.includes(dateString)) {
        result += "booked-date";
      }
      if (bankHolidayStrings.includes(dateString)) {
        result += "bankholiday";
      }
    }

    return result;
  };

  const submitBooking = () => {
    const numDays = daysPicked.length;
    // console.log("daysPicked", daysPicked);
    // console.log("numDays", numDays);
    if (numDays > allowanceAvailable) {
      // console.log("allowanceAvailable: ", allowanceAvailable);
      alert(
        "You cannot book more days than the available.\nPlease review your selection."
      );
    } else {
      setDaysBooked(daysBooked.concat(daysPicked));
      // console.log("daysBooked", daysBooked);
      // console.log("setAllowanceUsed: ", allowanceUsed - numDays);
      setAllowanceUsed(allowanceUsed + numDays);
      setAllowanceAvailable(allowanceAvailable - numDays);
      setDaysPicked([]);
    }
  };
  console.log("daysBooked after submit:", daysBooked);

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
          <p>
            <span className="react-calendar__tile--now badge badge-secondary color-legend">
              Today
            </span>
            <span className="selected-date badge badge-secondary color-legend">
              Picked, not yet booked
            </span>
            <span className="booked-date badge badge-secondary color-legend">
              Booked day
            </span>
            <span className="bankholiday badge badge-secondary color-legend">
              Bank Holiday
            </span>
          </p>
        </Row>
      </Container>

      <Container className="container booking">
        <Button className="book-button" onClick={submitBooking}>
          Book {daysPicked.length ? daysPicked.length : ""} days
        </Button>
        {/* Render the selected dates with the CSS class */}
        <Container className="list-booked-container">
          <div className="list-booked">
            {daysPicked.map((selectedDate, index) => (
              (<div key={index}>{dayjs(selectedDate).format("D MMMM YYYY")}</div>)
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
}

export default CalendarPicker;
