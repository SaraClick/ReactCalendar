import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Holidays from "./components/holidays/Holidays";
import BookDaysOff from "./components/calendar/BookDaysOff";
import HomePage from "./components/homepage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GetBankHolidays from "./components/data/GetBankHolidays"

function App() {
  const [allowance, setAllowance] = useState(25);
  const [allowanceUsed, setAllowanceUsed] = useState(0);
  const [allowanceAvailable, setAllowanceAvailable] = useState(allowance - allowanceUsed);

  const bankHolidays = GetBankHolidays();

  return (
    <>
      <Router>
        <div className="page-container">
          <Header />
          <div className="content-wrap">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    allowance={allowance}
                    allowanceUsed={allowanceUsed}
                    allowanceAvailable={allowanceAvailable}
                    setAllowanceAvailable={setAllowanceAvailable}
                  />
                }
              />
              <Route
                path="/Holidays"
                element={
                  <Holidays bankHolidays={bankHolidays} />
                }
              />
              <Route
                path="/Calendar"
                element={
                  <BookDaysOff
                    allowance={allowance}
                    allowanceUsed={allowanceUsed}
                    setAllowanceUsed={setAllowanceUsed}
                    allowanceAvailable={allowanceAvailable}
                    setAllowanceAvailable={setAllowanceAvailable}
                    bankHolidays={bankHolidays}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
