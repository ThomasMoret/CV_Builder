import React from "react";
import { Header, Footer, CvHeader } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Cv_form">
        <CvHeader />
      </div>
      <Footer />
    </div>
  );
};

export default App;
