import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import Navbar from './components/Navbar/Navbar';
const toursData = require("./data/db.json");

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home toursData={toursData} />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </div>
  );
}

export default App;