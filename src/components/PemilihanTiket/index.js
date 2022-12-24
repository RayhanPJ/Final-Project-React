import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const PemilihanTiket = () => {
  const location = useLocation();
  const dataForm = location.state;
  console.log(dataForm);
  const [flight, setflight] = useState([]);
  const [getItemId, setgetItemId] = useState("");
  const [getItemId2, setgetItemId2] = useState("");
  // const [show, setShow] = useState(true);
  // const [flightId, setflightId] = useState([]);
  const roundTrip = dataForm.roundTrip;

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
  const d = new Date(dataForm.date);
  let day = weekday[d.getDay()];

  // const handleGetitem = () => {
  //   const filteritems = flightId
  //     .filter(
  //       (item) =>
  //         item.FromAirport.name === dataForm.bandara &&
  //         item.ToAirport.name === dataForm.bandara2 &&
  //         item.kelas === dataForm.kelas && item.id === 7
  //     )
  //     .map((item) => item.id);
  //   console.log(filteritems);
  // };

  return (
    <div>
      <Header />
      <div className="container">
        {flight
          .filter(
            (item) =>
              item.FromAirport.name === dataForm.bandara &&
              item.ToAirport.name === dataForm.bandara2 &&
              item.kelas === dataForm.kelas
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
                        {day}, {dataForm.date}
                      </h6>
                    </div>
                  </div>
                  <hr />
                  {!roundTrip && (
                    <div className="row">
                      <div className="col-md text-start">
                        <img src="assets/img/plane1.png" alt="" />
                      </div>
                      <div className="col-md">
                        <h5>{item.ToAirport.city}</h5>
                        <p>{item.ToAirport.name}</p>
                      </div>
                      <div className="col-md offset-1 text-center">
                        <img
                          src="assets/img/Vector.png"
                          style={{ position: "relative", top: "25px" }}
                          alt="Arrow"
                        />
                      </div>
                      <div className="col-md">
                        <h5>{item.FromAirport.city}</h5>
                        <p>{item.FromAirport.name}</p>
                      </div>
                      <div className="col-md text-end">
                        <img src="assets/img/date.png" alt="Tanggal" />
                        <h6>
                          {day}, {dataForm.date2}
                        </h6>
                      </div>
                    </div>
                  )}
                  <hr />
                  <div className="row">
                    <div className="col-md-8">
                      <div
                        className="card d-grid gap-2 btn text-start"
                        onClick={() => {
                          setgetItemId(`${item.id}`);
                        }}
                      >
                        <img
                          src="assets/img/flightImg.png"
                          className="card-img-top"
                          alt="Gambar Garuda"
                        />
                        <div className="card-body">
                          <div
                            className="card-body p-0 row justify-content-between"
                            value={getItemId}
                            onClick={(e) => {
                              setgetItemId(e.target.value);
                            }}
                          >
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
                                {day}, {dataForm.date}
                              </span>
                              <h3 className="fw-bolder mb-0">Rp{item.price}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {!roundTrip && (
                        <div>
                          {flight
                            .filter(
                              (item) =>
                                item.FromAirport.name === dataForm.bandara2 &&
                                item.ToAirport.name === dataForm.bandara &&
                                item.kelas === dataForm.kelas
                            )
                            .map((item) => {
                              return (
                                <div
                                  className="card d-grid gap-2 btn text-start mt-4"
                                  key={item.id}
                                  onClick={() => {
                                    setgetItemId2(`${item.id}`);
                                  }}
                                >
                                  <img
                                    src="assets/img/flightImg.png"
                                    className="card-img-top"
                                    alt="Gambar Garuda"
                                  />
                                  <div className="card-body">
                                    <div
                                      className="card-body p-0 row justify-content-between"
                                      value={getItemId2}
                                      onClick={(e) => {
                                        setgetItemId2(e.target.value);
                                      }}
                                    >
                                      <div className="col-auto">
                                        <a href="#/" className="link-dark-card">
                                          <h4 className="fw-bolder">
                                            {item.FromAirport.city} -{" "}
                                            {item.ToAirport.city}
                                          </h4>
                                        </a>
                                        <ul className="list-unstyled mb-0">
                                          <li>
                                            {item.arrival_time} -{" "}
                                            {item.departure_time}
                                          </li>
                                          <li>{item.kelas}</li>
                                        </ul>
                                      </div>
                                      <div className="col-auto my-auto">
                                        <span className="text-muted">
                                          {day}, {dataForm.date2}
                                        </span>
                                        <h3 className="fw-bolder mb-0">
                                          Rp{item.price}
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      )}
                    </div>
                    <div className="col-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Detail Penerbangan</h5>
                          {flight
                            .filter(
                              (item) =>
                                item.FromAirport.name == dataForm.bandara &&
                                item.ToAirport.name == dataForm.bandara2 &&
                                item.kelas == dataForm.kelas &&
                                item.id == getItemId
                            )
                            .map((item) => {
                              return (
                                <div key={item.id}>
                                  <p>Plane : {item.Plane.name}</p>
                                  <p>Date : {dataForm.date}</p>
                                  <p>Destination :</p>
                                  <p>
                                    {item.FromAirport.city} -{" "}
                                    {item.ToAirport.city}
                                  </p>
                                  <p>
                                    Time : {item.arrival_time} -{" "}
                                    {item.departure_time}
                                  </p>
                                  <p>Class : {item.kelas}</p>
                                  <div className="row">
                                    <div className="col-6">
                                      <p>Tiket</p>
                                    </div>
                                    <div className="col-6">
                                      <p>Rp {item.price}</p>
                                    </div>
                                  </div>
                                  {roundTrip && (
                                    <div className="btn_lanjutByr d-grid gap-2">
                                    <Link
                                      className="d-grid gap-2 text-decoration-none"
                                      state={{
                                        dataForm,
                                        getItemId,
                                        item,
                                      }}
                                      to="/pesan"
                                    >
                                      <button>Lanjut Pembayaran</button>
                                    </Link>
                                  </div>
                                  )}
                                  <hr />
                                  <hr />
                                  {flight
                                    .filter(
                                      (item) =>
                                        item.FromAirport.name ==
                                          dataForm.bandara2 &&
                                        item.ToAirport.name ==
                                          dataForm.bandara &&
                                        item.kelas == dataForm.kelas &&
                                        item.id == getItemId2
                                    )
                                    .map((item2) => {
                                      return (
                                        <div key={item2.id}>
                                          <p>Plane : {item2.Plane.name}</p>
                                          <p>Date : {dataForm.date2}</p>
                                          <p>Destination :</p>
                                          <p>
                                            {item2.FromAirport.city} -{" "}
                                            {item2.ToAirport.city}
                                          </p>
                                          <p>
                                            Time : {item2.arrival_time} -{" "}
                                            {item2.departure_time}
                                          </p>
                                          <p>Class : {item2.kelas}</p>

                                          <div className="row">
                                            <div className="col-6">
                                              <p>Tiket</p>
                                            </div>
                                            <div className="col-6">
                                              <p>Rp {item2.price}</p>
                                            </div>
                                            <br />
                                            <hr />
                                            <div className="col-6">
                                              <p>Total</p>
                                            </div>
                                            <div className="col-6">
                                              <p>
                                                Rp {item.price + item2.price}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="btn_lanjutByr d-grid gap-2">
                                            <Link
                                              className="d-grid gap-2 text-decoration-none"
                                              state={{
                                                dataForm,
                                                getItemId,
                                                item,
                                                item2,
                                              }}
                                              to="/pesan"
                                            >
                                              <button>Lanjut Pembayaran</button>
                                            </Link>
                                          </div>
                                        </div>
                                      );
                                    })}
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
