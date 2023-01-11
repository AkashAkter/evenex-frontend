import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "./Banner.css";

const Banner = () => {
  return (
    <header>
      <div className='header-content'>
        <h3># Events for Startups</h3>
        <h1>Startup Grind Global Conference</h1>
        <ul>
          <li>
            - 14 to 15 FEB 2023
          </li>
          <li>
            - NEW YORK CITY
          </li>
        </ul>
        <div>
          <button className='purches-button'>Purches Tickets</button>
          <button className='button'> <AiFillPlusCircle className='mr-2' /> Add to Calender</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
