import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import dayjs from "dayjs";
import ButtonGeneric from "../ButtonGeneric";

function BookedHolidays({ daysBooked, setDaysBooked }) {
  const [indexToRemove, setIndexToRemove] = useState(-1);

  console.log("daysBooked", daysBooked);

  const today = dayjs(); // today's date
  const todayPlus2Year = today.add(2, "year"); // today's date + 2 years

  // Converts the array of string dates into an array of date objects
  const daysBookedFormatted = daysBooked.map((day) => dayjs(day));

  // Sorts the dates ensuring we only capture dates from Today to 2 years after today
  // Filter picks dates only between today and 2 years from today
  // Sort will sort the elements in the array. a/b represent 2 elements of the array. With the ternary comparison we will
  // return a positive number if A is after B and a negative if otherwise. This is so when comparing 2 dates, we know which one
  // comes first in repect to eachother
  const sortedDaysBooked = daysBookedFormatted
    .filter((day) => day.isAfter(today) && day.isBefore(todayPlus2Year))
    .sort((a, b) => (a.isAfter(b) ? 1 : -1));

  useEffect(() => {
    console.log("PRIOR daysBooked", daysBooked);
    console.log("INDEX TO REMOVE", indexToRemove);
    const newBookings = sortedDaysBooked
      .map((date) => date.toDate().toDateString())
      .filter((date, index) => index !== indexToRemove);
    setDaysBooked(newBookings);
    console.log("UPDATED daysBooked", daysBooked);
    setIndexToRemove(-1); // need to reset as the lenght of the array has changed and remaining elements position have changed
  }, [indexToRemove]);

  return (
    <>
      <ListGroup>
        {sortedDaysBooked.length > 0 ? (
          sortedDaysBooked.map((day, idx) => {
            return (
              <ListGroup.Item className="booked-list" key={idx}>
                {day.format("D MMMM YYYY")}{" "}
                <ButtonGeneric
                  styling="btn-cancel"
                  onClick={(e) => setIndexToRemove(idx)}
                >
                  Cancel
                </ButtonGeneric>
              </ListGroup.Item>
            );
          })
        ) : (
          <ListGroup.Item className="booked-list">
            No upcoming holidays booked within the next 2 years. Please go ahead
            and book.
          </ListGroup.Item>
        )}
      </ListGroup>
    </>
  );
}

export default BookedHolidays;
