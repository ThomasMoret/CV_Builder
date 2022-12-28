import React from "react";
import {
  Header,
  Footer,
  CvHeader,
  Personal,
  Skills,
  Description,
  Experiences,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Cv_form">
        <CvHeader />
        <div className="Cv_form__main">
          <div className="Cv_form__main__left">
            <Personal />
            <Skills />
          </div>
          <div className="Cv_form__main__right">
            <Description />
            <Experiences />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
