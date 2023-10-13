import { useState, useEffect } from "react";

function GetBankHolidays() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const holidaysApiUrl = "https://www.gov.uk/bank-holidays.json";
    fetch(holidaysApiUrl)
      .then((holidaysResponse) => holidaysResponse.json())
      .then((holidaysRes) => {
        const { division, events } = holidaysRes["england-and-wales"];
        setEvents(events); // Store the events in the component state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return events;
}
export default GetBankHolidays;
