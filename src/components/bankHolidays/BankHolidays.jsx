import Cards from "./Cards";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import dayjs from "dayjs";

function Holidays({ bankHolidays }) {
  const todayDate = new Date();
  console.log(todayDate);

  return (
    <>
      <Container className="container">
        <div className="holiday-events">
          {bankHolidays.map((holiday, index) => {
            if (dayjs(holiday.date).isAfter(dayjs())) {
              return (
                <Cards key={index} title={holiday.title} date={holiday.date} />
              );
            }
          })}
        </div>
      </Container>
    </>
  );
}

export default Holidays;
