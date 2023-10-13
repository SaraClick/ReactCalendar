import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookDaysOff from "./components/calendar/BookDaysOff";
import GetBankHolidays from "./components/data/GetBankHolidays";

function App() {
  const [allowance, setAllowance] = useState(25);
  const [allowanceUsed, setAllowanceUsed] = useState(0);
  const [allowanceAvailable, setAllowanceAvailable] = useState(
    allowance - allowanceUsed
  );

  const bankHolidays = GetBankHolidays();

  return (
    <>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <BookDaysOff
            allowance={allowance}
            allowanceUsed={allowanceUsed}
            setAllowanceUsed={setAllowanceUsed}
            allowanceAvailable={allowanceAvailable}
            setAllowanceAvailable={setAllowanceAvailable}
            bankHolidays={bankHolidays}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
