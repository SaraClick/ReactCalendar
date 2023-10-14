import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CalendarPicker from "./components/calendar/CalendarPicker";
import BookingButton from "./components/calendar/BookingButton";
import UpcomingAccordion from "./components/accordionUpcomingView/UpcomingAccordion";
import ListPickedDays from "./components/calendar/ListPickedDays";
import TrackingTable from "./components/trackingTable/TrackingTable";
import GetBankHolidays from "./components/data/GetBankHolidays";

function App() {
  const [allowance, setAllowance] = useState(25);
  const [allowanceUsed, setAllowanceUsed] = useState(0);
  const [allowanceAvailable, setAllowanceAvailable] = useState(
    allowance - allowanceUsed
  );

  const bankHolidays = GetBankHolidays();

  const [daysBooked, setDaysBooked] = useState([]);
  const [daysPicked, setDaysPicked] = useState([]);

  return (
    <>
      <div className="content-wrap">
        <Header />
        <div className="content">
          <Row>
            <Col>
              <CalendarPicker
                bankHolidays={bankHolidays}
                allowance={allowance}
                allowanceUsed={allowanceUsed}
                allowanceAvailable={allowanceAvailable}
                setAllowanceUsed={setAllowanceUsed}
                setAllowanceAvailable={setAllowanceAvailable}
                daysBooked={daysBooked}
                setDaysBooked={setDaysBooked}
                daysPicked={daysPicked}
                setDaysPicked={setDaysPicked}
              />
              <BookingButton
                daysPicked={daysPicked}
                setDaysPicked={setDaysPicked}
                allowanceAvailable={allowanceAvailable}
                setDaysBooked={setDaysBooked}
                allowanceUsed={allowanceUsed}
                setAllowanceUsed={setAllowanceUsed}
                setAllowanceAvailable={setAllowanceAvailable}
                daysBooked={daysBooked}
              />
              <ListPickedDays daysPicked={daysPicked} />
            </Col>
            <Col>
              <Row>
                <TrackingTable
                  className="main-tracking-table"
                  allowance={allowance}
                  allowanceUsed={allowanceUsed}
                  allowanceAvailable={allowanceAvailable}
                />
              </Row>
              <Row>
                <UpcomingAccordion
                  bankHolidays={bankHolidays}
                  daysBooked={daysBooked}
                />
              </Row>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
