import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from "./Layouts/Landing/Landing.jsx";
import Blog from "~/Layouts/Blog/Blog.jsx";
import Header from "~/components/Header/Header.jsx";
import TransitionWrapper from "~/components/Transitions/TransitionWrapper.jsx";
import Footer from "~/components/Footer/Footer.jsx";
import ScrollTop from "~/components/Utility/ScrollTop.jsx";
import './App.css';
import About from "~/Layouts/About/About.jsx";
import Work from "~/Layouts/Work/Work.jsx";
import Contact from "~/Layouts/Contact/Contact.jsx";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <TransitionWrapper location={location}>
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </TransitionWrapper>
  )
}

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </>
    )
}

export default App;