// import React from 'react'
import "./Maindiv.css";
import Smile from "../../assets/smile.jpg";
import Worker from "../../assets/worker.avif";
import Verticle from "../../assets/verticle.webp";
import Handy from "../../assets/handyman.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const Maindiv = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <div
            className="top-left"
            style={{
              backgroundImage: `url(${Smile})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="btns">
              <div className="btn1">
                <button>Services</button>
                <button>HelpPlatform</button>
              </div>
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </div>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              culpa.
            </h1>
            <button>Get help now</button>
          </div>
          <div className="bottom-left">
            <div
              className="bottom-left-1"
              style={{
                backgroundImage: `url(${Worker})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="shiping">
                <button>Shiping</button>
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </div>
              <h2>Shiping + Freight</h2>
            </div>
            <div className="bottom-left-2">
              <div className="text_or_icon">
                <h2>Ready to turn your Skills</h2>
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </div>
              <button>Join us</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div
            className="top-right"
            style={{
              backgroundImage: `url(${Verticle})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="top-right-verticle">
              <button>Administration</button>
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </div>
            <div className="top-right-text">
              <h1>Office Work</h1>
              <h2>
                Efficency starts here <br /> Eleveate your Office Work.
              </h2>
              <button>Get Help Now</button>
            </div>
          </div>
          <div className="bottom-right">
            <div
              className="bottom-right-1"
              style={{
                backgroundImage: `url(${Handy})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="bottom-right-upper">
                <button>Wood</button>
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </div>
              <h3>Handyman Services</h3>
            </div>
            <div className="bottom-right-2">
              <div className="profile-container">
                <div className="profile-images">
                  {/* First Profile Image */}
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile 1"
                    className="profile-img first"
                  />

                  {/* Second Profile Image */}
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile 2"
                    className="profile-img second"
                  />

                  {/* Badge for Count */}
                  <div className="member-count">81K+</div>
                </div>

                {/* Text */}
                <span className="profile-text">Worldwide Members</span>
              </div>
              <h1>Hire Top Tasker</h1>
              <h2>
                Hire the best Tasker <br /> for your need.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maindiv;
