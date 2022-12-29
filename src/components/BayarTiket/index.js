import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BayarTiket = () => {
  const location = useLocation();
  const dataBooking = location.state;
  console.log(dataBooking);

  const token = localStorage.getItem("token");
  const [itemBooking, setItemBooking] = useState("");

  // const booking = () => {
  //   // Gunakan endpoint-mu sendiri

  //   var method = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       id_flight: `${dataBooking.data.item.id_plane}`,
  //       baggage: `${dataBooking.baggageWeight}`,
  //       food: `${dataBooking.typeFood}`,
  //       name: `${dataBooking.name}`,
  //       homephone: `${dataBooking.homePhone}`,
  //       mobilephone: `${dataBooking.mobilePhone}`,
  //       totalprice: `${dataBooking.data.item.price}`,
  //     }),
  //   };

  //   const response = fetch(
  //     "https://gotravel-ilms4lrona-as.a.run.app/api/v1/booking",
  //     method
  //   );
  //   const data = response.json();
  //   console.log(data);
  //   return data;
  // }

  var method = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id_flight: `${dataBooking.data.item.id_plane}`,
      baggage: `${dataBooking.baggageWeight}`,
      food: `${dataBooking.typeFood}`,
      name: `${dataBooking.name}`,
      homephone: `${dataBooking.homePhone}`,
      mobilephone: `${dataBooking.mobilePhone}`,
      totalprice: `${dataBooking.data.item.price}`,
      trip_type: `${dataBooking.data.dataForm.trip}`
    }),
  };
  useEffect(() => {
    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/booking", method)
      .then((response) => response.json())
      .then((data) => {
        setItemBooking(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="bayarTiket">
      <Header />
      <Container>
        <div className="row" style={{ paddingTop: "10px" }}>
          <div className="col-lg-12" key={dataBooking.data.item.id}>
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
            <h2 style={{ marginTop: "40px" }}>
              <img
                src="assets/img/park-tickets-couple 1.png"
                alt="tiket"
                style={{ paddingRight: "15px" }}
              />
              Metode Pengiriman
            </h2>
            <section style={{ marginLeft: "60px", paddingLeft: "15px" }}>
              <h3>Tiket Elektronik</h3>
              <p>
                Inilah cara hemat waktu dan tanpa kertas untuk bepergian. Anda
                akan menerima referensi tiket elektronik melalui e-mail.
              </p>
            </section>
            <h2 style={{ paddingTop: "20px" }}>
              <img
                src="assets/img/card.png"
                alt=""
                style={{ paddingRight: "15px" }}
              />
              Pembayaran
            </h2>
            <div
              style={{
                textAlign: "center",
                width: "1050px",
                height: "70px",
                marginLeft: "70px",
                backgroundColor: "#9f9f9f",
                borderRadius: "8px",
              }}
              className="tbayar"
            >
              <p style={{ paddingTop: "20px" }}>
                Jumlah yang harus di bayar adalah IDR{" "}
                <b>
                  {dataBooking.data.item.price *
                    dataBooking.data.dataForm.capacity}
                </b>
              </p>
            </div>
            <section style={{ marginLeft: "60px", paddingLeft: "15px" }}>
              <h3>Pembayaran Online</h3>
              <p>
                Pembayaran Online Anda akan dialihkan ke halaman eksternal bila
                mengklik tombol Konfirmasi perjalanan. Metode pembayaran yang
                tersedia antara lain:
              </p>
              <ul>
                <li>
                  <p>Internet Banking </p>
                </li>
                <li>
                  <p>Kartu Kredit (Visa, Master, JCB)</p>
                </li>
              </ul>
            </section>
            <Link
              className="d-grid gap-2 text-decoration-none"
              state={{
                dataBooking,
                itemBooking
                
              }}
              to="/confirmpay"
            >
              <button
                className="btn_bayar"
                onClick={setItemBooking}
                style={{
                  borderRadius: "26px",
                  width: "250px",
                  height: "50px",
                  marginLeft: "450px",
                  color: "#ffff",
                }}
              >
                Bayar
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

export default BayarTiket;
