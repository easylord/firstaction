import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetail"
import Header from "./container/Header";
import FirstSection from "./container/FirstSection";
import SecondSection from "./container/SecondSection";
import "./App.css";
import ThirdSection from "./container/ThirdSection";
import FourthSection from "./container/FourthSection";
import FifthSection from "./container/FifthSection";
import SixthSection from "./container/SixthSection";
import End from "./container/End";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection />
        <FifthSection />
        <SixthSection/>
        <Routes>
          <Route path="/"  element={<End/>} />
          <Route path="/products/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;