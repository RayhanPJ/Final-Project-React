import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Header from "../Header";
import Footer from "../Footer";

const Wishlist = () => {
  const [airports, setAirports] = useState([]);
  const [flight, setflight] = useState([]);
  const [displayFlight, setdisplayFlight] = useState([]);
  const [bandara, setbandara] = useState("");
  const [bandara2, setbandara2] = useState("");
  const [date, setDate] = useState("");
  const [flightId, setFlightId] = useState("");
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
      })
      .catch((err) => {
        console.log("err", err);
      }); 
  }, []);

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
          id_flight: "10"
        }),
    };

    const response = await fetch(
        "https://gotravel-ilms4lrona-as.a.run.app/api/v1/whislist",
        method
    );
    
   
    const data = await response.json();
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
                          onClick={() => { setFlightId(`${item.id}`);
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
                  {/* <div className="col-4">
                      <div className="card">
                        <div className="card-body">
                          <h5>Detail Penerbangan</h5>
                          {flight
                            .filter(
                              (item) =>
                                item.FromAirport.name == dataForm.bandara &&
                                item.ToAirport.name == dataForm.bandara2 &&
                                item.kelas == dataForm.kelas &&
                                item.id == flightId
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
                                        flightId,
                                        item,
                                      }}
                                      to="/pesan"
                                    >
                                      <button>Simpan ke Wishlist</button>
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
                                        item.id == flightId2
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
                                                flightId2,
                                                item,
                                                item2,
                                              }}
                                              to="/pesan"
                                            >
                                              <button>Simpan ke Wishlist</button>
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
                    </div> */}
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