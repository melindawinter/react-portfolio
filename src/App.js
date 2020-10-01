import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

// const About = () => (
//   <div>
//     <h1>About Page</h1>
//   </div>
// );

export default App;
