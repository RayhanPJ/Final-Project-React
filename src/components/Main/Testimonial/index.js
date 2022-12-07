import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mt-5 pt-5 mb-5" id="Testimonial">
      <h1 className="fs-4 text-center fw-bold">Testimonial</h1>
      <p className="text-center py-3">
        Berbagai review positif dari para pelanggan kami
      </p>
      <div
        id="carouselExampleControls"
        className="carousel slide mx-auto"
        style={{ maxWidth: `100%` }}
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner bg-aliceblue"
          style={{ borderRadius: `20px` }}
        >
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className="row mx-4 my-5">
                <div className="col-2 m-auto">
                  <img
                    src="assets/img/photo1-testimoni.png"
                    className="d-block testimonial-img m-auto"
                    alt="Person"
                  />
                </div>
                <div className="col-10">
                  <img
                    src="assets/img/Rate.png"
                    className="testimonial-rating"
                    alt="Rating"
                  />
                  <p className="textContent4">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="textContent4">John Dee 32, Jogja</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row mx-4 my-5">
                <div className="col-2 m-auto">
                  <img
                    src="assets/img/photo2-testimoni.png"
                    className="d-block testimonial-img m-auto"
                    alt="Person"
                  />
                </div>
                <div className="col-10">
                  <img
                    src="assets/img/Rate.png"
                    className="testimonial-rating"
                    alt="Rating"
                  />
                  <p className="textContent4">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod””
                  </p>
                  <p className="textContent4">John Dee 32, Padang</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row mx-4 my-5">
                <div className="col-2 m-auto">
                  <img
                    src="assets/img/photo1-testimoni.png"
                    className="d-block testimonial-img m-auto"
                    alt="Person"
                  />
                </div>
                <div className="col-10">
                  <img
                    src="assets/img/Rate.png"
                    className="testimonial-rating"
                    alt="Rating"
                  />
                  <p className="textContent4">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod””
                  </p>
                  <p className="textContent4">John Dee 32, Bali</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
