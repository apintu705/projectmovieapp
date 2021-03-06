import "./styles.css"
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./components/home/home";

import Moviedetails from "./components/moviedetails/moviedetails";
import Pagenotfound from "./components/pagenotfound/pagenotfound";


const  App=()=>{
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
  )

}
export default App;