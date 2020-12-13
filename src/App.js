import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;