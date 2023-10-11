import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Holidays from "./components/holidays/Holidays";
import BookDaysOff from "./components/calendar/BookDaysOff";
import HomePage from "./components/homepage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [holidays, setHolidays] = useState({ division: "", events: [] });
  const [allowance, setAllowance] = useState(25);
  const [daysBooked, setDaysBooked] = useState(0);

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
                  <HomePage allowance={allowance} daysBooked={daysBooked} />
                }
              />
              <Route
                path="/Holidays"
                element={
                  <Holidays holidays={holidays} setHolidays={setHolidays} />
                }
              />
              <Route path="/Calendar" element={<BookDaysOff allowance={allowance} daysBooked={daysBooked}/>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
