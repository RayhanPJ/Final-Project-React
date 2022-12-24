import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ConfirmPay = () => {
  // const location = useLocation();
  // const dataBooking = location.state;
  // console.log(dataBooking);
  // const [flight, setflight] = useState([]);
  const token = localStorage.getItem("token");
  const [payImg, setPayImg] = useState("");

  const booking = () => {
    // Gunakan endpoint-mu sendiri

    // var myHeaders = new Headers();
    // myHeaders.append(
    //   "Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJkaXRhdGF0YTMxMzk3QGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMTItMjFUMTc6NDE6NDYuNjAzWiIsInVwZGF0ZWRBdCI6IjIwMjItMTItMjFUMTc6NDE6NDYuNjAzWiIsImlhdCI6MTY3MTY1MDM2OX0.rE7qYsHBSxvYWwp_NnO8yZkYX7ws0ALeJe-Bh8etKfU"
    // );

    var formdata = new FormData();
    formdata.append("image", payImg);

    // var requestOptions = {
    //   mode: 'no-cors',
    //   method: "POST",
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: "follow",
    // };

    // fetch(
    //   "https://gotravel-ilms4lrona-as.a.run.app/confirmation",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    var method = {
      mode: "no-cors",
      method: "put",
      url: "https://gotravel-ilms4lrona-as.a.run.app/api/v1/updateProfileUser",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: payImg,
    };

    axios(method)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log(payImg);
    // const data = response.text();
    // console.log(data);
    // return data;
  };

  // async function profile() {
  //   // Gunakan endpoint-mu sendiri

  //   var method = {
  //     mode : "no-cors",
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     }
  //   };

  //   const response = await fetch(
  //     "https://gotravel-ilms4lrona-as.a.run.app/confirmation",
  //     method
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // }
  // console.log(profile());

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
                    setPayImg(e.target.files);
                  }}
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </section>
            <Link className="d-grid gap-2 text-decoration-none">
              <button
                className="btn_bayar"
                onClick={booking}
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
