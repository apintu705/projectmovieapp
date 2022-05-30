import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/header/header";
import Moviedetails from "./components/moviedetails/moviedetails";
import Pagenotfound from "./components/pagenotfound/pagenotfound";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:id" exact element={<Moviedetails />} />
          <Route path="*" exact element={<Pagenotfound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

