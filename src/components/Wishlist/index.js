import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Wishlist = () => {
  // const location = useLocation();
  const [airports, setAirports] = useState([]);
  const [flight, setflight] = useState([]);
  const [displayFlight, setdisplayFlight] = useState([]);
  const [bandara, setbandara] = useState("");
  const [bandara2, setbandara2] = useState("");
  const [date, setDate] = useState("");
  const [flightId, setFlightId] = useState("");
  const [whislist, setWhislist] = useState([]);

  // const [flightId2, setFlightId2] = useState("");
  // const dataForm = location.state;

  // const roundTrip = dataForm.roundTrip;

  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/airport")
      .then((response) => response.json())
      .then((data) => {
        setAirports(data.data.airports);
      })
      .catch((err) => {
        console.log("err", err);
      });

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/flight")
      .then((response) => response.json())
      .then((data) => {
        setflight(data.data.flights);
      })
      .catch((err) => {
        console.log("err", err);
      });

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/profile")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/whislist")
      .then((response) => response.json())
      .then((data) => {
        setWhislist(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const getId = () => {
    const idFlight = flight.id;
    const idUser = user.id;
    console.log(idFlight);
    console.log(idUser);
  }

  async function getWishlist() {
    // Gunakan endpoint-mu sendiri
    var method = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id_user: `${user.id}`,
        id_flight: `${flightId}`
      }),
    };

    const response = await fetch(
      "https://gotravel-ilms4lrona-as.a.run.app/api/v1/whislist",
      method
    );

    const data = await response.json();
    console.log(data);
    return data;

  }
  //Get Name Day
  const weekday = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const d = new Date(date);
  let day = weekday[d.getDay()];

  const handleSearchCar = () => {

    const filterCars = flight.filter(
      (item) =>
        item.FromAirport.name === bandara && item.ToAirport.name === bandara2 

    );
    setdisplayFlight(filterCars);
    
  };

  const handleGetitem = () => {
    const filteritems = flightId
      .filter(
        (item) =>
          item.FromAirport.name === bandara && item.ToAirport.name === bandara2 && item.kelas === kelas && item.id === 7
      )
      .map((item) => item.id);
    console.log(filteritems);
  };

  return (
    <div>
      <Header />
      <section className="container-fluid px-0 py-5 my-5">
        <div className="container mt-10">
          <div className="row">
           
            <div className="row justify-content-between">
              <div className="col-md-6 my-auto">
                <h3 className="fw-bolder">Wishlist</h3>
              </div>
            </div>
            <div className="w-100 my-3"></div>
            <main className="py-5 px-5">
              <div className="parentInfo">
                <div className="divInfo2 ">
                  <label className="form-label">Dari</label>
                  <div className="input-group mb-3">
                    <select
                      id="Penerbangan"
                      name="Penerbangan"
                      className="form-select bg-transparent border-dark"
                      onChange={(e) => setbandara(e.target.value)}
                    >
                      <option value="">Pilih Tujuan</option>
                      {airports &&
                        airports.map((airport) => (
                          <option key={airport.id} value={airport.name}>
                            {airport.city}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="divInfo3">
                  <label className="form-label">Ke</label>
                  <div className="input-group mb-3">
                    <select
                      id="Penerbangan"
                      name="Penerbangan"
                      className="form-select bg-transparent border-dark"
                      onChange={(e) => setbandara2(e.target.value)}
                    >
                      <option value="">Pilih Tujuan</option>
                      {airports &&
                        airports.map((airport) => (
                          <option key={airport.id} value={airport.name}>
                            {airport.city}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="divInfo4">
                  <label className="form-label">Date :</label>
                  <div className="input-group mb-3">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={date}
                      className="form-control bg-transparent border-dark"
                      placeholder="Pilih Tanggal"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="divInfo5 d-grid">
                  <div
                    className="d-grid gap-2"
                    style={{ position: "relative", top: "30px" }}
                  >
                    <button
                      className="btn btn-light shadow py-2 mb-5 bg-body rounded"
                      type="submit"
                      id="btn-search"
                      onClick={handleSearchCar}
                    >
                      <b>Cari Tiket</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                {displayFlight.length > 0 ? (
                  displayFlight.map((item) => (
                    <div className="col-md-12 mb-3" key={item.id}>
                      <div
                        className="card d-grid gap-2 text-start bg-light border-0 btn "
                        onClick={() => {
                          setFlightId(`${item.id}`);
                        }} value={item.id}>
                        {console.log(flightId)}
                        <img
                          src="assets/img/list.png"
                          className="card-img-top"
                          alt="Gambar Garuda"
                        />
                        <div className="card-body">
                          <div className="card-body p-0 row justify-content-between">
                            <div className="col-auto">
                              <a
                                href="#/"
                                title="Jakarta (JKT) - Bali (DPS)"
                                className="link-dark-card"
                              >
                                <h4 className="fw-bolder">
                                  {item.FromAirport.city} - {item.ToAirport.city}
                                </h4>
                              </a>
                              <ul className="list-unstyled mb-0">
                                <li>{item.arrival_time} - {item.departure_time}</li>
                                <li>Class : {item.kelas}</li>
                              </ul>
                            </div>
                            <div className="col-auto my-auto">
                              <span className="text-muted">
                                {day}, {date}
                              </span>
                              <h3 className="fw-bolder mb-0">Rp{item.price}</h3>
                            </div>
                            <Button
                              variant="btn-lg btn-outline-dark"
                              type="submit"
                              id="btn-search"
                              onClick={getWishlist}
                            >
                              save on wishlist
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center">
                    <h1>Penerbangan Kosong</h1>
                  </div>
                )}
              </div>
              {whislist.length > 0 ? (
                whislist
                  .filter((item) => item.id_user == user.id)
                  .map((item) => {
                    return (
                      <div className="col-md-6 col-lg-4 my-3" key={item.id}>
                        {console.log(item)}
                        <div className="card shadow-sm">
                          <div className="card-header p-0">
                            <img
                              src="assets/img/pesawat-garuda.jpg"
                              alt="Gambar Garuda"
                              className="img-fluid image-zoom-on-hover rounded-top-5"
                            />
                          </div>
                          <div className="card-body">
                            <div className="card-title">
                              <h4 className="fw-bolder mb-0">
                                {item.Flight.Plane.name}
                              </h4>
                              <small>{item.Flight.flight_date}</small>
                            </div>
                            <div className="card-body p-0 mt-4">
                              <ul className="list-unstyled">
                                <li className="mb-3">{item.Flight.FromAirport.name} - {item.Flight.ToAirport.name}</li>
                                <li className="mb-3">{item.Flight.arrival_time} - {item.Flight.departure_time}</li>
                                <li className="mb-3">Kelas : {item.Flight.kelas} </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <div className="text-center">
                  
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Wishlist;

{/* <div className="container">
  <div className="card">
    <div className="card-body">
      <h3 className="fw-bolder">Wishlist</h3>
      <div className="row">
        <div className="col-12">
          <div className="card d-grid gap-2">
            <img src="/public/img/list.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="card-body p-0 row justify-content-between">
                <div className="col-auto my-auto">
                  <a
                    href="#"
                    title="Jakarta (JKT) - Bali (DPS)"
                    className="link-dark-card"
                  >
                    <h4 className="fw-bolder">Jakarta (JKT) - Bali (DPS)</h4>
                  </a>
                  <ul className="list-unstyled mb-0">
                    <li>15.30 - 18.00 WIB</li>
                    <li>2 jam 30 menit</li>
                  </ul>
                </div>
                <div className="col-auto my-auto">
                  <span className="text-muted">Rabu, 26/11/2022</span>
                  <h3 className="fw-bolder mb-0">Rp850.000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */}
