import React from "react";
import { Button } from "react-bootstrap";

function BookingButton({
  daysPicked,
  setDaysPicked,
  allowanceAvailable,
  setDaysBooked,
  allowanceUsed,
  setAllowanceUsed,
  setAllowanceAvailable,
  daysBooked,
}) {
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

  return (
    <Button className="book-button" onClick={submitBooking}>
      Book {daysPicked.length ? daysPicked.length : ""} days
    </Button>
  );
}

export default BookingButton;
