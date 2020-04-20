import React from "react";
import { Route, HashRouter } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./organisms/Footer";



function App() {
  return (
    <HashRouter basename="/Portfolio">
      <div className="App">       
        <Route exact path="/" component={Work}/>
        <Route path="/about" component={About} />
        <Footer/>
      </div>
      
    </HashRouter>
  );
}

export default App;
