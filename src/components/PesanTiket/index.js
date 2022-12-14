import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const PesanTiket = () => {
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
  const [name2, setName2] = useState("");
  const [typeFood2, setTypeFood2] = useState({
    anak: true,
    dewasa: false,
  });
  const [baggageWeight2, setBaggageWeight2] = useState({
    w5: "5",
    w10: "10",
    w15: "15",
    w20: "20",
    w25: "25",
    w30: "30",
    w35: "35",
    w40: "40",
  });
  const [email2, setEmail2] = useState("");
  const [homePhone2, setHomePhone2] = useState("");
  const [mobilePhone2, setMobilePhone2] = useState("");
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const capacity = parseInt(data.dataForm.capacity);

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
          <div className="col-lg-8">
            <h3
              style={{
                borderStyle: "solid",
                backgroundColor: "#ffffff",
                borderRadius: "6px",
                width: "240px",
              }}
            >
              <img src="assets/img/icon _User.png" alt="icon user" />
              Pemesan
            </h3>
            <form
              style={{
                borderStyle: "solid",
                backgroundColor: "#ffffff",
                borderRadius: "6px",
                padding: "50px",
              }}
            >
              <h3>Data Diri</h3>
              <div className="col-lg-12 nama_lengkap">
                <label>Nama Lengkap</label>
                <br />
                <input
                  required
                  type="text"
                  id="nama_lengkap"
                  placeholder="Nama lengkap"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-6">
                  <label>Makanan</label>
                  <br />
                  <select
                    required
                    className="form-select"
                    id="pilih-makanan"
                    onChange={(e) => setTypeFood(e.target.value)}
                  >
                    <option value="">Pilih Tipe Makanan</option>
                    <option value={typeFood.anak}>Anak</option>
                    <option value={typeFood.dewasa}>Dewasa</option>
                  </select>
                </div>
                <div className="col-lg-6">
                  <label>Bagasi</label>
                  <br />
                  <select
                    required
                    className="form-select"
                    id="kapasitas-bagasi"
                    onChange={(e) => setBaggageWeight(e.target.value)}
                  >
                    <option value="">Kapasitas bagasi</option>
                    <option value={baggageWeight.w5}>5 KG</option>
                    <option value={baggageWeight.w10}>10 KG</option>
                    <option value={baggageWeight.w15}>15 KG</option>
                    <option value={baggageWeight.w20}>20 KG</option>
                    <option value={baggageWeight.w25}>25 KG</option>
                    <option value={baggageWeight.w30}>30 KG</option>
                    <option value={baggageWeight.w35}>35 KG</option>
                    <option value={baggageWeight.w40}>40 KG</option>
                  </select>
                </div>
              </div>
              <h3 style={{ marginTop: "30px" }}>Informasi Kontak</h3>
              <div className="row">
                <div className="col-lg-6">
                  <label>Email</label>
                  <br />
                  <input
                    required
                    type="email"
                    id="email"
                    className="form-control "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-lg-6">
                  <label>Mobile Phone</label>
                  <br />
                  <input
                    required
                    type="number"
                    id="homeph"
                    className="form-control "
                    value={mobilePhone}
                    onChange={(e) => setMobilePhone(e.target.value)}
                  />
                  <br />
                  <label>Home Phone</label>
                  <br />
                  <input
                    required
                    type="number"
                    id="mobileph"
                    className="form-control "
                    value={homePhone}
                    onChange={(e) => setHomePhone(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
          {/* detail pesanan & total */}
          <div className="col-lg-4">
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
              </p>
              <div>
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
                          <p>Arrival Time :</p>
                        </div>
                        <div className="col-6">
                          <p>{item.arrival_time}</p>
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
                          <p>Rp {item.price * data.dataForm.capacity}</p>
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
                      name2,
                      email2,
                      mobilePhone2,
                      homePhone2,
                      typeFood2,
                      baggageWeight2,
                    }}
                    to="/bayar"
                  >
                    <button>Lanjut Pembayaran</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {capacity > 1 && (
            <div className="col-lg-8 mt-2">
              <form
                style={{
                  borderStyle: "solid",
                  backgroundColor: "#ffffff",
                  borderRadius: "6px",
                  padding: "50px",
                }}
              >
                <h3>Data Diri</h3>
                <div className="col-lg-12 nama_lengkap">
                  <label>Nama Lengkap</label>
                  <br />
                  <input
                    required
                    type="text"
                    id="nama_lengkap"
                    placeholder="Nama lengkap"
                    className="form-control "
                    style={{ width: "300px" }}
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                  />
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6">
                    <label>Makanan</label>
                    <br />
                    <select
                      required
                      className="form-select"
                      id="pilih-makanan"
                      onChange={(e) => setTypeFood2(e.target.value)}
                    >
                      <option value="">Pilih Tipe Makanan</option>
                      <option value={typeFood2.anak}>Anak</option>
                      <option value={typeFood2.dewasa}>Dewasa</option>
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <label>Bagasi</label>
                    <br />
                    <select
                      required
                      className="form-select"
                      id="kapasitas-bagasi"
                      onChange={(e) => setBaggageWeight2(e.target.value)}
                    >
                      <option value="">Kapasitas bagasi</option>
                      <option value={baggageWeight2.w5}>5 KG</option>
                      <option value={baggageWeight2.w10}>10 KG</option>
                      <option value={baggageWeight2.w15}>15 KG</option>
                      <option value={baggageWeight2.w20}>20 KG</option>
                      <option value={baggageWeight2.w25}>25 KG</option>
                      <option value={baggageWeight2.w30}>30 KG</option>
                      <option value={baggageWeight2.w35}>35 KG</option>
                      <option value={baggageWeight2.w40}>40 KG</option>
                    </select>
                  </div>
                </div>
                <h3 style={{ marginTop: "30px" }}>Informasi Kontak</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <label>Email</label>
                    <br />
                    <input
                      required
                      type="email"
                      id="email"
                      className="form-control "
                      value={email2}
                      onChange={(e) => setEmail2(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label>Mobile Phone</label>
                    <br />
                    <input
                      required
                      type="number"
                      id="homeph"
                      className="form-control "
                      value={mobilePhone2}
                      onChange={(e) => setMobilePhone2(e.target.value)}
                    />
                    <br />
                    <label>Home Phone</label>
                    <br />
                    <input
                      required
                      type="number"
                      id="mobileph"
                      className="form-control "
                      value={homePhone2}
                      onChange={(e) => setHomePhone2(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default PesanTiket;
