import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// import {getListUser} from "../../apis";

const FormTiket = () => {
  const [roundTrip, setroundTrip] = useState(true);
  const [airports, setAirports] = useState([]);
  const [flight, setflight] = useState([]);
  const [bandara, setbandara] = useState("");
  const [bandara2, setbandara2] = useState("");
  const [trip, setTrip] = useState("");
  const [date, setDate] = useState("");
  const [kelas, setKelas] = useState({
    economi: "Economy Class",
    first: "First Class",
    business: "Business Class",
  });
  const [date2, setDate2] = useState("");
  const [capacity, setCapacity] = useState("");

  // Function to get data airport
  useEffect(() => {
    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/airport")
      .then((response) => response.json())
      .then((data) => {
        setAirports(data.data.airports);
        console.log(data.data.airports);
      })
      .catch((err) => {
        console.log("err", err);
      });

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/flight")
      .then((response) => response.json())
      .then((data) => {
        setflight(data.data.flights);
        console.log(data.data.flights);
      })
      .catch((err) => {
        console.log("err", err);
      });
      // getListUser()
  }, []);
  console.log(flight);

  // const populateCars = (cars) => {
  //   return cars.map((car) => {
  //     const isPositive = getRandomInt(0, 1) === 1;
  //     const timeAt = new Date();
  //     const mutator = getRandomInt(1000000, 100000000);
  //     const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))

  //     return {
  //       ...car,
  //       availableAt,
  //     };
  //   })
  // }

  // const handleSearchCar = () => {
  //   // const carsPopulate = populateCars(cars);
  //   // console.log(carsPopulate);
  //   // const newDateTime = new Date(`${date}`);

  //   // if (bandara === "") {
  //   //   alert("Please select driver type");
  //   //   return;
  //   // } else if (!date) {
  //   //   alert("Please select date");
  //   //   return;
  //   // } else if (newDateTime < today) {
  //   //   alert("Dont select past time");
  //   //   return;
  //   // }

  //   console.log(date);
  //   console.log(bandara);
  //   console.log(bandara2);
  //   console.log(capacity);
  //   console.log(kelas);
  //   const filterCars = flight.filter(
  //     (item) =>
  //       item.FromAirport.name == bandara &&
  //       item.ToAirport.name == bandara2 &&
  //       item.kelas == kelas
  //   );
  //   console.log(filterCars);
  //   setdisplayFlight(filterCars);
  // };

  // const handleReset = () => {
  //   setdisplayFlight([]);
  //   setbandara("");
  //   setDate("");
  // };

  return (
    <div className="bgForm" id="Booking">
      <main className="py-5 px-5">
        <Container>
          <div className="parent row">
            <div className="div1 d-flex justify-content-center">
              <h3 className="text-light">Booking</h3>
            </div>
            <div className="div2">
              <a href="/login">
                <h5>Login</h5>
              </a>
            </div>
      
            <div className="div3 col-lg-3">
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
        
          
            <div className="div4 col-lg-3">
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
        
        
            <div className="div5 col-lg-4">
              <div className="d-flex">
                <div className="form-check">
                  <input
                    onClick={() => setroundTrip(true)}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={"One Trip"}
                    onChange={(e) => setTrip(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Sekali Jalan
                  </label>
                </div>
                <div className="form-check">
                  <input
                    onClick={() => setroundTrip(false)}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={"Round Trip"}
                    onChange={(e) => setTrip(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Pulang Pergi
                  </label>
                </div>
              </div>
              <label className="form-label">Date :</label>
              <div className="input-group mb-3">
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
                {!roundTrip && (
                  <div className="input-group mb-3">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={date2}
                      className="form-control bg-transparent border-dark"
                      placeholder="Pilih Tanggal"
                      onChange={(e) => setDate2(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
          
            
            <div className="div6 col-lg-5">
              <label className="form-label">Penumpang</label>
              <input
                type="number"
                value={capacity}
                className="form-control bg-transparent border-dark"
                placeholder="Jumlah Penumpang"
                id="filterCapacity"
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
            <div className="div7 col-lg-5">
              <label className="form-label">Class</label>
              <div className="input-group mb-3">
                <select
                  id="kelas"
                  name="kelas"
                  className="form-select bg-transparent border-dark"
                  onChange={(e) => setKelas(e.target.value)}
                >
                  <option value="">Pilih Kelas Penerbangan</option>
                  <option value={kelas.economi}>Ekonomi</option>
                  <option value={kelas.business}>Bussiness</option>
                  <option value={kelas.first}>First</option>
                </select>
              </div>
            </div>
            <div className="div8 d-grid col-lg">
              <div style={{ position: "relative", top: "30px" }}>
                <Link
                  className="d-grid gap-2 text-decoration-none"
                  to="/pilih"
                  state={{ bandara, bandara2, date, date2, capacity, kelas, trip, roundTrip }}
                >
                  <button
                    className="btn btn-light shadow py-2 mb-5 bg-body rounded"
                    type="submit"
                    id="btn-search"
                  >
                    <b>Cari Tiket</b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="mt-5">
            {displayFlight.length > 0 ? (
              displayFlight.map((item) => (
                <div className="col-md-12 mb-3" key={item.id}>
                  <div className="card d-grid gap-2 text-start bg-light border-0">
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
                            <li>
                              {item.arrival_time} - {item.departure_time}
                            </li>
                            <li>Class : {item.kelas}</li>
                          </ul>
                        </div>
                        <div className="col-auto my-auto">
                          <span className="text-muted">
                            {day}, {date}
                          </span>
                          <h3 className="fw-bolder mb-0">Rp{item.price}</h3>
                        </div>
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
          </div> */}
        </Container>
      </main>
    </div>
  );
};

export default FormTiket;
