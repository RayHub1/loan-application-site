import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurServices from "./Pages/OurServices";
import WhyUs from "./Pages/WhyUs";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/whyUs" element={<WhyUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
