import Cards from "./Cards";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import dayjs from "dayjs";

function BankHolidays({ bankHolidays }) {
  const todayDate = new Date();
  console.log(todayDate);

  const todayPlusOneYear = dayjs().add(1, 'year')

  return (
    <>
      <Container className="container">
        <div className="holiday-events">
          {bankHolidays.map((holiday, index) => {
            if (dayjs(holiday.date).isAfter(dayjs()) && dayjs(holiday.date).isBefore(dayjs(todayPlusOneYear))) {
              return (
                <Cards key={index} title={holiday.title} date={dayjs(holiday.date).format("D MMMM YYYY")} />
              );
            }
          })}
        </div>
      </Container>
    </>
  );
}

export default BankHolidays;
