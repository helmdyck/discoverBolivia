import React from "react";
import cities from "../assets/img/cities.jpg";
import forests from "../assets/img/forests.jpg";
import valleys from "../assets/img/valleys.jpg";
import lakes from "../assets/img/lakes.jpg";

function Categories() {
  return (
    <section className="categories">
      <div className="category__gallery">

        <div className="category__card">
          <img src={cities} alt="" />
          <div className="layer"></div>
          <div className="info">
            <h2>Cities</h2>
            <p>All about cities</p>
          </div>
        </div>

        <div className="category__card">
          <img src={forests} alt="" />
          <div className="layer"></div>
          <div className="info">
            <h2>Forests</h2>
            <p>All about forests</p>
          </div>
        </div>

        <div className="category__card">
          <img src={valleys} alt="" />
          <div className="layer"></div>
          <div className="info">
            <h2>Valleys</h2>
            <p>All about valleys</p>
          </div>
        </div>

        <div className="category__card">
          <img src={lakes} alt="" />
          <div className="layer"></div>
          <div className="info">
            <h2>Lakes</h2>
            <p>All about lakes</p>
          </div>
        </div>
      </div>
      {/* <div className="details">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          asperiores consectetur eius optio aspernatur nobis et obcaecati?
          Corrupti corporis, quo rem possimus sequi doloribus enim neque minima,
          eius recusandae a. Ratione voluptates alias quos, deleniti mollitia ad
          totam voluptatem nostrum consequuntur.
        </p>
      </div>
      <div className="footer__btn">
        <button className="learn__more">Learn More</button>
      </div> */}
    </section>
  );
}

export default Categories;
