import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from "~/Layouts/MainLayout.jsx";
import Landing from "../Layouts/Landing/Landing";

const App = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route index element={<Landing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;