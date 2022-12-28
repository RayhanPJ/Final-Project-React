import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const InputAirport = () => {
  const [name, setName] = useState("");
  const [typeFood, setTypeFood] = useState({
    anak: true,
    dewasa: false,
  });
  const [baggageWeight, setBaggageWeight] = useState({
    w5: "5",
    w10: "10",
    w15: "15",
    w20: "20",
    w25: "25",
    w30: "30",
    w35: "35",
    w40: "40",
  });
  const [email, setEmail] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const [flight, setflight] = useState([]);

  // Function to get data airport
  useEffect(() => {
    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/flight")
      .then((response) => response.json())
      .then((data) => {
        setflight(data.data.flights);
        console.log(data.data.flights);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#F0F0F0" }} className="pesanTiket">
      <Header />
      <Container>
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
              <a href="#/" className="nav-link" style={{ color: "#FFFFFF" }}>
                Pilih Tiket
              </a>
            </div>
            <div className="col-lg-2">
              <a href="#/" className="nav-link" style={{ color: "#FFFFFF" }}>
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
        {/* data diri */}
        <div className="row" style={{ margin: "50px 0 230px 0" }}>
          <div className="col-lg-12">
            <h3
              style={{
                borderStyle: "solid",
                backgroundColor: "#ffffff",
                borderRadius: "6px",
                width: "240px",
              }}
            >
              <img src="assets/img/icon _User.png" alt="icon user" />
              Input Data Plane
            </h3>
            <form
              style={{
                borderStyle: "solid",
                backgroundColor: "#ffffff",
                borderRadius: "6px",
                padding: "50px",
              }}
            >
              <div className="col-lg-6 nama_lengkap">
                <label>Airport Name</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="Nama lengkap"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label>Province</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="Nama lengkap"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label>City</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="Nama lengkap"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label>Country</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="Nama lengkap"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label>Status</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="Nama lengkap"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </form>
          </div>
          {/* detail pesanan & total */}
          {/* <div className="col-lg-4">
            <div
              style={{
                borderStyle: "solid",
                backgroundColor: "#ffffff",
                borderRadius: "6px",
                marginTop: "50px",
                padding: "17px",
              }}
            >
              <p style={{ textAlign: "center", fontSize: "20px" }}>
                Detail Penerbangan
              </p> */}
          {/* <div>
                {flight
                  .filter(
                    (item) =>
                      item.FromAirport.name == data.dataForm.bandara &&
                      item.ToAirport.name == data.dataForm.bandara2 &&
                      item.kelas == data.dataForm.kelas &&
                      item.id == data.getItemId
                  )
                  .map((item) => {
                    return (
                      <div className="row" key={item.id}>
                        <div className="col-6">
                          <p>Nama Pesawat :</p>
                        </div>
                        <div className="col-6">
                          <p>{item.Plane.name}</p>
                        </div>
                        <div className="col-6">
                          <p>Date :</p>
                        </div>
                        <div className="col-6">
                          <p>{data.dataForm.date}</p>
                        </div>
                        <div className="col-6">
                          <p>Destination :</p>
                        </div>
                        <div className="col-6">
                          <p>
                            {item.FromAirport.city} - {item.ToAirport.city}
                          </p>
                        </div>
                        <div className="col-6">
                          <p>Waiting Time :</p>
                        </div>
                        <div className="col-6">
                          <p>
                            {item.arrival_time} - {item.departure_time}
                          </p>
                        </div>
                        <div className="col-6">
                          <p>Class Booking :</p>
                        </div>
                        <div className="col-6">
                          <p>{item.kelas}</p>
                        </div>
                        <div className="col-6">
                          <p>Tiket</p>
                        </div>
                        <div className="col-6">
                          <p>Rp {item.price}</p>
                        </div>
                        <div className="col-6">
                          <p>Total</p>
                        </div>
                        <div className="col-6">
                          <p>Rp {item.price}</p>
                        </div>
                      </div>
                    );
                  })}
                <div className="btn_lanjutByr d-grid gap-2">
                  <Link
                    className="d-grid gap-2 text-decoration-none"
                    state={{
                      data,
                      name,
                      email,
                      mobilePhone,
                      homePhone,
                      typeFood,
                      baggageWeight,
                    }}
                    to="/bayar"
                  >
                    <button>Lanjut Pembayaran</button>
                  </Link>
                </div>
              </div> */}
          {/* </div>
          </div> */}
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default InputAirport;
