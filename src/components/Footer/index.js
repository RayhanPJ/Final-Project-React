import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="pt-3">
      <Container>
        <div className="row d-flex align-content-center">
          <div className="col-lg-3 col">
            <img src="assets/img/GoTravel.png" alt="GoTravel" />
            <br />
            <p className="text-light">Copyright Go Travel 2022</p>
          </div>
          {/* <!-- social media --> */}
          <div className="col-lg-3 col sosmed">
            <p>Connect With Us</p>
            <a href="tes">
              <img src="assets/img/icon_facebook.png" alt="" />
            </a>
            <a href="tes">
              <img src="assets/img/icon_instagram.png" alt="" />
            </a>
            <a href="tes">
              <img src="assets/img/icon_twitter.png" alt="" />
            </a>
            <a href="tes">
              <img src="assets/img/icon_mail.png" alt="" />
            </a>
          </div>
          {/* <!-- navigation --> */}
          <div className="col-lg-3">
            <div className="nav_footer">
              <a href="#/">
                <p>Beranda</p>
              </a>
              <a href="#Booking">
                <p>Book</p>
              </a>
              <a href="#aboutUs">
                <p>About Us</p>
              </a>
              <a href="#Testimonial">
                <p>Testimonial</p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 addres">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo Indonesia</p>
            <p>gotravel@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
