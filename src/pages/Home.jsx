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
        <div className="header">
          <img src={fourth} alt="parallax" className="fourth" />
          <img src={third} alt="parallax" className="third" />
          <h1 className="title">DISCOVER BOLIVIA</h1>
          <img src={second} alt="parallax" className="second" />
          <img src={first} alt="parallax" className="first" />
        </div>

        <section className="categories">
          <div className="image__gallery">
            <div className="image__card" id="image__car-1">
              <img src={cities} alt="grid" />
              <h2>Cities</h2>
            </div>
            <div className="image__card" id="image__car-2">
              <img src={forests} alt="grid" />
              <h2>Forests</h2>
            </div>
            <div className="image__card" id="image__car-3">
              <img src={valleys} alt="grid" />
              <h2>Valleys</h2>
            </div>
            <div className="image__card" id="image__car-4">
              <img src={lakes} alt="grid" />
              <h2>Lakes</h2>
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
      </div>
    </>
  );
}

export default Home;
