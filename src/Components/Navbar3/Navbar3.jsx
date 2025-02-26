// import React from 'react'
import "./Navbar3.css";

const Navbar3 = () => {
  return (
    <div>
      <div className="search-bar">
        <div className="location">
            <h2>Location</h2>
        <input
          type="text"
          placeholder="Enter your address "
          className="input-field"
        />
        </div>
        {/* <h2>Start Time</h2> */}
        <div className="location">
        <h2>Start Time</h2>
        <input type="date" className="input-field" />
        </div>
        <div className="location">
            <h2>End Time</h2>
        <input type="date" className="input-field" />
        </div>
        <div className="location">
            <h2>Find help today</h2>
        <select className="input-field">
          <option>Select category</option>
        </select>
        </div>
        <button className="search-button">Find help now</button>
      </div>
    </div>
  );
};

export default Navbar3;
