import React from "react";
import "../App.css";
import first from "../assets/img/first.png";
import second from "../assets/img/second.png";
import third from "../assets/img/third.png";
import fourth from "../assets/img/fourth.png";
import cities from "../assets/img/cities.jpg";
import forests from "../assets/img/forests.jpg";
import valleys from "../assets/img/valleys.jpg";
import lakes from "../assets/img/lakes.jpg";

function Home() {
  return (
    <>
      <div className="parallax__container">
        <img src={fourth} alt="parallax" />
        <img src={third} alt="parallax" />
        <h1>DISCOVER BOLIVIA</h1>
        <img src={second} alt="parallax" />
        <img src={first} alt="parallax" />
      </div>

      <section className="categories">
        <div className="image__gallery">
          <div className="image__card" id="image__car-1">
            <img src={cities} alt="grid" />
          </div>
          <div className="image__card" id="image__car-2">
            <img src={forests} alt="grid" />
          </div>
          <div className="image__card" id="image__car-3">
            <img src={valleys} alt="grid" />
          </div>
          <div className="image__card" id="image__car-4">
            <img src={lakes} alt="grid" />
          </div>
        </div>
        <div className="details">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            asperiores consectetur eius optio aspernatur nobis et obcaecati?
            Corrupti corporis, quo rem possimus sequi doloribus enim neque
            minima, eius recusandae a. Ratione voluptates alias quos, deleniti
            mollitia ad totam voluptatem nostrum consequuntur. 
          </p>
        </div>
        <div className="footer__btn">
            <button className="learn__more">Learn More</button>
        </div>
      </section>
    </>
  );
}

export default Home;
