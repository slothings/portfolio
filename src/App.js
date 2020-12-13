import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={ } />
        <Route exact path="/" component={ } />
        <Route exact path="/" component={ } />
        <Route exact path="/" component={ } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;