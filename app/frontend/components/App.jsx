import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from "~/Layouts/MainLayout.jsx";
import Landing from "../Layouts/Landing/Landing";
import Blog from "~/Layouts/Blog/Blog.jsx";

const App = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route index element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;