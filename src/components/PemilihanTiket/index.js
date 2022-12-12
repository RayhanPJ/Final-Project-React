import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";

const PemilihanTiket = (props) => {
  const location = useLocation();
  console.log(props, "props");
  console.log(location, "use Location Hook");
  const data = location.state.data;
  console.log(data);
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

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <p className="fs-5 fw-semibold">
              Harap Pilih Penerbangan Keberangkatan
            </p>
            <div className="row">
              <div className="col-md text-start">
                <img src="assets/img/plane1.png" alt="" />
              </div>
              <div className="col-md">
                <h5>Jakarta</h5>
                <p>Bandara International Soekarno Hatta (CGK)</p>
              </div>
              <div className="col-md offset-1 text-center">
                <img
                  src="assets/img/Vector.png"
                  style={{ position: "relative", top: "25px" }}
                  alt="Arrow"
                />
              </div>
              <div className="col-md">
                <h5>Jakarta</h5>
                <p>Bandara International Soekarno Hatta (CGK)</p>
              </div>
              <div className="col-md text-end">
                <img src="assets/img/date.png" alt="Tanggal" />
                <h6>RAB 30 NOV</h6>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="mt-5">
                {displayFlight ? (
                  displayFlight.map((item) => (
                    <div className="col-md-8 mb-3" key={item.id}>
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
                                  {item.FromAirport.city} -{" "}
                                  {item.ToAirport.city}
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
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5>Detail Penerbangan</h5>
                    <p>Garuda Airlines</p>
                    <p>dd/mm/yy</p>
                    <p>Jakarta (JKT) - Bali (DPS)</p>
                    <p>15.30 WIB - 18.00 WIB</p>
                    <p>2 jam 30 menit</p>
                    <div className="row" style={{ marginTop: "10px" }}>
                      <div className="col-6">
                        <p>Tiket</p>
                      </div>
                      <div className="col-6">
                        <p>Rp 850.000</p>
                      </div>
                      <div className="col-6">
                        <p>Layanan</p>
                      </div>
                      <div className="col-6">
                        <p>Rp 250.000</p>
                      </div>
                      <div className="col-6">
                        <p>Total</p>
                      </div>
                      <div className="col-6">
                        <p>Rp 1.150.000</p>
                      </div>
                    </div>
                    <div className="btn_lanjutByr d-flex justify-content-center">
                      <button className="btn btn-secondary">
                        Lanjut Pembayaran
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PemilihanTiket;
