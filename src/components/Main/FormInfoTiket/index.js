import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";

const FormInfoTiket = () => {
  const [show, setShow] = useState(true);
  const [airports, setAirports] = useState();
  const [flights, setFlight] = useState();

  // Function to get data airport
  const getApiDataAirports = async () => {
    const response = await fetch(
      "https://gotravel-production.up.railway.app/api/v1/airport"
    ).then((response) => response.json());
    console.log(response.data);
    setAirports(response.data.airports);
  };

  // Function to get data airport
  const getApiDataFlight = async () => {
    const response = await fetch(
      "https://gotravel-production.up.railway.app/api/v1/flight"
    ).then((response) => response.json());
    console.log(response);
    setFlight(response.data);
  };

  useEffect(() => {
    getApiDataAirports();
    getApiDataFlight();
  }, []);

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
                >
                  {airports &&
                    airports.map((airport) => (
                      <option key={airport.id} value="">{airport.city}</option>
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
                >
                  {airports &&
                    airports.map((airport) => (
                      <option key={airport.id} value="">{airport.city}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="divInfo4">
              <div className="d-flex mb-1">
                <div className="form-check">
                  <input
                    onClick={() => setShow(true)}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
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
                    onClick={() => setShow(false)}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Pulang Pergi
                  </label>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="form-control bg-transparent border-dark"
                  placeholder="Pilih Tanggal"
                />
                {!show && (
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="form-control bg-transparent border-dark"
                    placeholder="Pilih Tanggal"
                  />
                )}
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
                >
                  <b>Cari Tiket</b>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default FormInfoTiket;
