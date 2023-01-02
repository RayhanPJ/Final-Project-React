import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

async function addFlight({
  penerbangan,
  bandara,
  bandara2,
  capacity,
  price,
  time,
  time2,
  date,
  kelas,
  token
}) {
  const response = await fetch(
    "https://gotravel-ilms4lrona-as.a.run.app/api/v1/flight",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id_plane: penerbangan,
        from_airport_id: bandara,
        to_airport_id: bandara2,
        kelas: kelas,
        available_seats: capacity,
        price: price,
        arrival_time: time,
        departure_time: time2,
        flight_date: date,
      }),
    }
  );
  const data = await response.json();
  return data;
}

const InputFlight = () => {
  const [airports, setAirports] = useState([]);
  const [bandara, setBandara] = useState("");
  const [bandara2, setBandara2] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [time2, setTime2] = useState("");
  const [date, setDate] = useState("");
  const token = localStorage.getItem("token");
  const [kelas, setKelas] = useState({
    economi: "Economy Class",
    first: "First Class",
    business: "Business Class",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [issetRegisterd, setRegisterd] = useState(false);
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const [planes, setPlanes] = useState([]);
  const [penerbangan, setPenerbangan] = useState([]);

  // Function to get data airport
  useEffect(() => {
    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/airport")
      .then((response) => response.json())
      .then((data) => {
        setAirports(data.data.airports);
      })
      .catch((err) => {
        console.log("err", err);
      });

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/plane")
      .then((response) => response.json())
      .then((data) => {
        setPlanes(data.data.planes);
      })
      .catch((err) => {
        console.log("err", err);
      });
    // getListUser()
  }, []);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    addFlight({
      penerbangan,
      bandara,
      bandara2,
      capacity,
      price,
      time,
      time2,
      date,
      kelas,
      token
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsLoading(false);
        setRegisterd(true);
      });
  }

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
                Add Flight
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
              Input Data Flight
            </h3>
            {!issetRegisterd ? (
            <form
              style={{
                borderStyle: "solid",
                backgroundColor: "#ffffff",
                borderRadius: "6px",
                padding: "50px",
              }}
              onSubmit={handleSubmit}
            >
              <div className="col-lg-6 nama_lengkap">
                <label className="form-label">Plane</label>
                <br />
                <select
                  id="Penerbangan"
                  name="Penerbangan"
                  className="form-select"
                  style={{ width: "300px" }}
                  onChange={(e) => setPenerbangan(e.target.value)}
                >
                  <option value="" hidden>
                    Pilih Pesawat
                  </option>
                  {planes &&
                    planes.map((plane) => (
                      <option key={plane.id} value={plane.id}>
                        {plane.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-lg-6 nama_lengkap">
                <label className="form-label">From Airport</label>
                <br />
                <select
                  id="Penerbangan"
                  name="Penerbangan"
                  className="form-select"
                  style={{ width: "300px" }}
                  onChange={(e) => setBandara(e.target.value)}
                >
                  <option value="" hidden>
                    Pilih Tujuan
                  </option>
                  {airports &&
                    airports.map((airport) => (
                      <option key={airport.id} value={airport.id}>
                        {airport.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-lg-6 nama_lengkap">
                <label className="form-label">To Airport</label>
                <br />
                <select
                  id="Penerbangan"
                  name="Penerbangan"
                  className="form-select"
                  style={{ width: "300px" }}
                  onChange={(e) => setBandara2(e.target.value)}
                >
                  <option value="" hidden>
                    Pilih Tujuan
                  </option>
                  {airports &&
                    airports.map((airport) => (
                      <option key={airport.id} value={airport.id}>
                        {airport.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-lg-6">
                <label className="form-label">Class</label>
                <div className="input-group mb-3">
                  <select
                    id="kelas"
                    name="kelas"
                    className="form-select"
                    style={{ width: "300px" }}
                    onChange={(e) => setKelas(e.target.value)}
                  >
                    <option value="" hidden>
                      Pilih Kelas Penerbangan
                    </option>
                    <option value={kelas.economi}>Ekonomi</option>
                    <option value={kelas.business}>Bussiness</option>
                    <option value={kelas.first}>First</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <label className="form-label">Available Seat</label>
                <input
                  type="number"
                  value={capacity}
                  className="form-control"
                  placeholder="Jumlah Penumpang"
                  style={{ width: "300px" }}
                  id="filterCapacity"
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  value={price}
                  className="form-control"
                  placeholder="Jumlah Penumpang"
                  style={{ width: "300px" }}
                  id="filterPrice"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label">Arrival at</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={time}
                  className="form-control"
                  style={{ width: "300px" }}
                  placeholder="Pilih Tanggal"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label">Departure at</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={time2}
                  className="form-control"
                  style={{ width: "300px" }}
                  placeholder="Pilih Tanggal"
                  onChange={(e) => setTime2(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={date}
                  className="form-control"
                  style={{ width: "300px" }}
                  placeholder="Pilih Tanggal"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <input
                type="submit"
                className="button-28"
                value={isLoading ? "Loading" : "Add Flight"}
              />
            </form>
            ) : (
              <Navigate to="/listflight"/>
            )}
          </div>    
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default InputFlight;
