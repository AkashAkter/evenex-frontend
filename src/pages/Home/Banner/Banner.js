import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "./Banner.css";

const Banner = () => {
  return (
    <header>
      <div className='header-content'>
        <h3># Events for Startups</h3>
        <h1>Startup Grind Global <br /> Conference</h1>
        <ul>
          <li>
            - 14 to 15 FEB 2023
          </li>
          <li>
            - NEW YORK CITY
          </li>
        </ul>
        <div className="lg:flex md:flex justify-center items-center text-center">
          <button className='purches-button'>Purches Tickets</button>
          <button className='button flex items-center mx-auto lg:mx-4'> <AiFillPlusCircle className='mr-2' /> Add to Calender</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
