import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

const ListBooking = () => {
  return (
    <div style={{ backgroundColor: "#F0F0F0" }} className="pesanTiket">
      <Header />
      <Container>
        <nav
          className="navbar navbar-expand-lg mt-3"
          style={{ backgroundColor: "#4E4E4E" }}
        >
          <div className="container-fluid row">
            <div className="col-lg-7">
              <a className="navbar-brand" href="#/" style={{ color: "#FFFFFF" }}>
                List User Booking
              </a>
            </div>
          </div>
        </nav>
        {/* data diri */}
        <div className="row" style={{margin: "50px 0 230px 0"}}>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 my-3 ">
                <ul className="d-flex justify-content-between text-center align-items-center">
                  <li><img src="assets/img/user2.png" alt="" /></li>                  
                  <li>rayhan@gmail.com</li>                  
                  <li>User</li>                  
                  <li>Sidoarji - Jakarta</li>                  
                  <li>Rp.1400000</li>                  
                </ul>
              </div>
              <div className="col-md-12 my-3 ">
                <ul className="d-flex justify-content-between text-center align-items-center">
                  <li><img src="assets/img/user2.png" alt="" /></li>                  
                  <li>rayhan@gmail.com</li>                  
                  <li>Admin</li>                  
                  <li>Sidoarji - Jakarta</li>                  
                  <li>Rp.1400000</li>                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ListBooking;
