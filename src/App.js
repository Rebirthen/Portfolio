import React from "react";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";

const sections = [
  { title: "Work", url: "/" },
  { title: "About", url: "/about" }
];

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header title="Diana Temirkhan" sections={sections} />
        <Route exact path="/" component={Work} />
        <Route path="/about" component={About} />
        <Footer/>
      </div>
      
    </HashRouter>
  );
}

export default App;
