import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";

const PemilihanTiket = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [flight, setflight] = useState([]);
  const [show, setShow] = useState(true);
  const [flightId, setflightId] = useState([]);

  // Function to get data airport
  useEffect(() => {
    fetch("https://gotravel-production.up.railway.app/api/v1/flight")
      .then((response) => response.json())
      .then((data) => {
        setflight(data.data.flights);
        console.log(data.data.flights);
      })
      .catch((err) => {
        console.log("err", err);
      });
    fetch("https://gotravel-production.up.railway.app/api/v1/flight")
      .then((response) => response.json())
      .then((data) => {
        setflightId(data.data.flights);
        console.log(data.data.flights);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  // function DateTime(hasil) {
  //   const t = new Date();
  //   let minutes = t.getUTCMinutes();
  //   let hour = t.getUTCHours();
  //   hasil = new Date(hour + ":" + minutes + " WIB");
  //   return hasil;
  // };

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
  const d = new Date(data.date);
  let day = weekday[d.getDay()];

  const handleGetitem = () => {
    const filteritems = flight
      .filter(
        (item) =>
          item.FromAirport.name === data.bandara &&
          item.ToAirport.name === data.bandara2 &&
          item.kelas === data.kelas
      )
      .map((item) => item);
    console.log(filteritems);
  };

  return (
    <div>
      <Header />
      <div className="container">
        {flight
          .filter(
            (item) =>
              item.FromAirport.name === data.bandara &&
              item.ToAirport.name === data.bandara2 &&
              item.kelas === data.kelas
          )
          .map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="card-body">
                  <p className="fs-5 fw-semibold">
                    Harap Pilih Penerbangan Keberangkatan
                  </p>
                  <div className="row">
                    <div className="col-md text-start">
                      <img src="assets/img/plane1.png" alt="" />
                    </div>
                    <div className="col-md">
                      <h5>{item.FromAirport.city}</h5>
                      <p>{item.FromAirport.name}</p>
                    </div>
                    <div className="col-md offset-1 text-center">
                      <img
                        src="assets/img/Vector.png"
                        style={{ position: "relative", top: "25px" }}
                        alt="Arrow"
                      />
                    </div>
                    <div className="col-md">
                      <h5>{item.ToAirport.city}</h5>
                      <p>{item.ToAirport.name}</p>
                    </div>
                    <div className="col-md text-end">
                      <img src="assets/img/date.png" alt="Tanggal" />
                      <h6>
                        {day}, {data.date}
                      </h6>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-8">
                      <div
                        className="card d-grid gap-2 btn text-start"
                        onClick={handleGetitem}
                      >
                        <img
                          src="assets/img/flightImg.png"
                          className="card-img-top"
                          alt="Gambar Garuda"
                        />
                        <div className="card-body">
                          <div className="card-body p-0 row justify-content-between">
                            <div className="col-auto">
                              <a href="#/" className="link-dark-card">
                                <h4 className="fw-bolder">
                                  {item.FromAirport.city} -{" "}
                                  {item.ToAirport.city}
                                </h4>
                              </a>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  {item.arrival_time} - {item.departure_time}
                                </li>
                                <li>{item.kelas}</li>
                              </ul>
                            </div>
                            <div className="col-auto my-auto">
                              <span className="text-muted">
                                {day}, {data.date}
                              </span>
                              <h3 className="fw-bolder mb-0">Rp{item.price}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Detail Penerbangan</h5>
                          {flight
                            .filter(
                              (plane) =>
                                plane.id === 7
                            )
                            .map((item) => {
                              console.log(item)
                              return (
                                <div>
                                  <p>{item.Plane.name}</p>
                                  <p>{data.date}</p>
                                  <p>
                                    {item.FromAirport.city} -{" "}
                                    {item.ToAirport.city}
                                  </p>
                                  <p>
                                    {item.arrival_time} - {item.departure_time}
                                  </p>
                                  <p>{item.kelas}</p>
                                  <div className="row">
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
                                  <div className="btn_lanjutByr d-grid gap-2">
                                    <button>Lanjut Pembayaran</button>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default PemilihanTiket;
