import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./Navbars";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className="bgHeader pt-3">
      <NavbarHeader />
      <Container>
        <div className="row" style={{position: "relative", top : "150px" }}>
          <div className="col-lg-7"></div>
          <div className="col-lg-5 text-end col-md-12 headerC">
            <h3>Nikmati Perjalanan Anda Dengan Go Travel !</h3>
            <p>
              Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket
              di Travel kamu akan dapatkan pelayanan terbaik untuk wisata
              liburanmu kemana saja dan kapan saja
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
