import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const FormInfoTiket = () => {
  const [airports, setAirports] = useState([]);
  const [flight, setflight] = useState([]);
  const [displayFlight, setdisplayFlight] = useState([]);
  const [bandara, setbandara] = useState("");
  const [bandara2, setbandara2] = useState("");
  const [date, setDate] = useState("");

  // Function to get data airport
  useEffect(() => {
    fetch("https://gotravel-production.up.railway.app/api/v1/airport")
      .then((response) => response.json())
      .then((data) => {
        setAirports(data.data.airports);
      })
      .catch((err) => {
        console.log("err", err);
      });

    fetch("https://gotravel-production.up.railway.app/api/v1/flight")
      .then((response) => response.json())
      .then((data) => {
        setflight(data.data.flights);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

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

  const handleSearchCar = () => {
    // const carsPopulate = populateCars(cars);
    // console.log(carsPopulate);
    // const newDateTime = new Date(`${date}`);

    // if (bandara === "") {
    //   alert("Please select driver type");
    //   return;
    // } else if (!date) {
    //   alert("Please select date");
    //   return;
    // } else if (newDateTime < today) {
    //   alert("Dont select past time");
    //   return;
    // }

    const filterCars = flight.filter(
      (item) =>
        item.FromAirport.name == bandara && item.ToAirport.name == bandara2 
    );
    setdisplayFlight(filterCars);
  };

  // const handleReset = () => {
  //   setdisplayFlight([]);
  //   setbandara("");
  //   setDate("");
  // };

  return (
    <div className="bgFormInfo" id="infoTiket">
      <main className="py-5 px-5">
        <Container>
          <div className="parentInfo">
            <div className="divInfo1 d-flex justify-content-center">
              <h3 className="text-light">Info Tiket</h3>
            </div>
            <div className="divInfo2 ">
              <label className="form-label">Dari</label>
              <div className="input-group mb-3">
                <select
                  id="Penerbangan"
                  name="Penerbangan"
                  className="form-select bg-transparent border-dark"
                  onChange={(e) => setbandara(e.target.value)}
                >
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
        </Container>
      </main>
    </div>
  );
};

export default FormInfoTiket;
