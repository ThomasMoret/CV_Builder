import React from "react";
import "../styles/footer.css";
import GitHubIcon from "../assets/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright © 2022 thomasmoret</p>
      <a href="https://github.com/ThomasMoret" target="_blank" rel="noreferrer">
        <img src={GitHubIcon} alt="GitHub" className="github-icon" />
      </a>
    </div>
  );
};

export default Footer;
