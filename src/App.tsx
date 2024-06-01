import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./index.css";
import Navbar from "./utils/navbar/Navbar";
import PageOne from "./pages/pageOne/PageOne";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageOne" element={<PageOne />} />
      </Routes>
    </Router>
  );
};

export default App;
