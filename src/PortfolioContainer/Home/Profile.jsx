import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text"> </span>
            Hello, I'M <span className="highlighted-text">Shivam</span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🥇",
                    1500,
                    "Front End Dev 🖥️",
                    1500,
                    "React & Vue Dev 💟",
                    1500,
                    "Sitecore Dev 🔯",
                    1500,
                  ]}
                />
              </h1>
              <span>knack of building applications with fron and back end operations</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Hire Me {" "}
            </button>
            <div class="cta-wrapper">
            <a className="cta-primary" href="ehizcv.pdf" download="Shivam ehizcv.pdf" title="Download Resume" target="_blank">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Get Resume
            </a>
                  </div>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
