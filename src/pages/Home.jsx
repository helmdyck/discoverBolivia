import React from "react";
import "../App.css";
import first from "../assets/img/first.png";
import second from "../assets/img/second.png";
import third from "../assets/img/third.png";
import fourth from "../assets/img/fourth.png";

import Categories from "../components/Categories";

function Home() {
  return (
    <>
      <div className="parallax__container">
        <div className="header">
          <img src={fourth} alt="parallax" className="fourth" />
          <img src={third} alt="parallax" className="third" />
          <h1 className="title">DISCOVER BOLIVIA</h1>
          <img src={second} alt="parallax" className="second" />
          <img src={first} alt="parallax" className="first" />
        </div>

        <Categories/>
      </div>
    </>
  );
}

export default Home;
