// import React from 'react'
import "./SecondMain.css";
import Large from "../../assets/large.webp"
import Yoga from "../../assets/yoga1.jpg"
import Main from "../../assets/main.webp"
import Back from "../../assets/back.avif"

const SecondMain = () => {
  return (
    <div className="second-upper">
      <div className="second-text-top">
        <h1>Introducing SwastiBharat Project</h1>
      </div>
      <div className="second-text-bottom"
        style={{
          backgroundImage: `url(${Back})`,
          backgroundPosition: "center",
         backgroundSize: "cover"
      }}
      >
        <div className="second-bottom-left">
          <div className="inner-text">
            <h1>Where generater AI and big goals blend Seamlessly....</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos
              repellendus soluta laborum debitis iste sed odio mollitia commodi
              fugit dicta maxime, sit temporibus sequi, hic voluptates minus cum
              officia.
            </h3>
          </div>
        </div>
        <div className="second-bottom-right"
        style={{
          backgroundImage: `url(${Main})`,
          backgroundPosition: "center",
         backgroundSize: "cover"
        }}
        >
          <div className="left-upper"
          style={{
            backgroundImage: `url(${Yoga})`,
             backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          ></div>
          <div className="right-lower"
          style={{
            backgroundImage: `url(${Large})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SecondMain;
