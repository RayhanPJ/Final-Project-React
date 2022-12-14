import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const ConfirmPay = () => {
  const location = useLocation();
  const dataBooking = location.state;

  const [payImg, setPayImg] = useState("");
  const token = localStorage.getItem("token");
  const num = dataBooking.itemBooking.data.id;

  const upload = () => {
    const formData = new FormData();
    formData.append("file", payImg);

    var config = {
      method: "put",
      url: `https://gotravel-ilms4lrona-as.a.run.app/api/v1/confirmation/${num}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    };

    axios(config).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="bayarTiket">
      <Header />
      <Container>
        <div className="row" style={{ paddingTop: "10px" }}>
          <div className="col-lg-12">
            <nav
              className="navbar navbar-expand-lg"
              style={{ backgroundColor: "#4E4E4E" }}
            >
              <div className="container-fluid row">
                <div className="col-lg-7">
                  <a
                    className="navbar-brand"
                    href="#/"
                    style={{ color: "#FFFFFF" }}
                  >
                    Booking
                  </a>
                </div>
                <div className="col-lg-2">
                  <a
                    href="#/"
                    className="nav-link"
                    style={{ color: "#FFFFFF" }}
                  >
                    Pilih Tiket
                  </a>
                </div>
                <div className="col-lg-2">
                  <a
                    href="#/"
                    className="nav-link"
                    style={{ color: "#FFFFFF" }}
                  >
                    Pesanan Tiket
                  </a>
                </div>
                <div className="col-lg-2">
                  <a
                    href="#/"
                    className="nav-link active"
                    style={{ color: "#FFFFFF" }}
                  >
                    Bayar
                  </a>
                </div>
              </div>
            </nav>
            <h2 style={{ paddingTop: "20px" }}>
              <img
                src="assets/img/card.png"
                alt=""
                style={{ paddingRight: "15px" }}
              />
              Upload Bukti Pembayaran
            </h2>
            <section
              style={{ marginLeft: "60px", paddingLeft: "15px" }}
              className="mb-3"
            >
              <div>
                <label htmlFor="formFileLg" className="form-label">
                  Silahkan upload bukti pembayaran kamu dibawah sini
                </label>
                <input
                  onChange={(e) => {
                    setPayImg(e.target.files[0]);
                  }}
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </section>
            <Link
              className="d-grid gap-2 text-decoration-none"
              to="/"
            >
              <button
                className="btn_bayar"
                onClick={upload}
                style={{
                  borderRadius: "26px",
                  width: "250px",
                  height: "50px",
                  marginLeft: "450px",
                  color: "#ffff",
                }}
              >
                Kirim
              </button>
            </Link>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ConfirmPay;
