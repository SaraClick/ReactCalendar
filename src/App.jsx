import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Holidays from "./components/holidays/Holidays";
import CalendarPicker from "./components/calendar/Calendar";
import HomePage from "./components/homepage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [holidays, setHolidays] = useState({ division: "", events: [] });

  return (
    <>
      <Router>
        <div id="page-container">
          <Header/>
          <div className="content-wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Holidays" element={<Holidays holidays={holidays} setHolidays={setHolidays}/>} />
            <Route path="/Calendar" element={<CalendarPicker />} />
          </Routes>
          </div>
          <Footer/>
          </div>
      </Router>

    </>
  );
}

export default App;
