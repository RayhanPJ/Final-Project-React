import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

async function updateAirport({
  name,
  province,
  city,
  country,
  code,
  status,
  token,
  id
}) {
  const response = await fetch(
    `https://gotravel-ilms4lrona-as.a.run.app/api/v1/airport/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        province,
        city,
        country,
        code,
        status,
      }),
    }
  );
  const data = await response.json();
  return data;
}

const UpdateAirport = () => {
  const location = useLocation();
  const data = location.state;
  const id = data.id;
  console.log(data);
  const [name, setName] = useState(data.name);
  const [province, setProvince] = useState(data.province);
  const [city, setCity] = useState(data.city);
  const [country, setCountry] = useState(data.country);
  const [code, setCode] = useState(data.code);
  const [status, setStatus] = useState(data.status);
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);
  const [issetRegisterd, setRegisterd] = useState(false);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    updateAirport({
      name,
      province,
      city,
      country,
      code,
      status,
      token,
      id
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
                Update Flight
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
                <label>Airport Name</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="Airport Name"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label>Province</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="Province"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label>City</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="City"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label>Country</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="Country"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <label>Code</label>
                <br />
                <input
                  type="text"
                  id="nama_lengkap"
                  placeholder="Code"
                  className="form-control "
                  style={{ width: "300px" }}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
              <label className="form-label">Plane</label>
                <br />
                <select
                  id="Status"
                  name="Status"
                  className="form-select"
                  style={{ width: "300px" }}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="" hidden>
                    Pilih Status Pesawat
                  </option>
                  <option value="on">
                    On
                  </option>
                  <option value="Off">
                    Off
                  </option>
                </select>
              </div>
              <input
                type="submit"
                className="button-28"
                value={isLoading ? "Loading" : "Update Airport"}
              />
            </form>
            ) : (
              <Navigate to="/listairport"/>
            )}
          </div>
          {/* detail pesanan & total */}
          {/* <div className="col-lg-4">
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
              </p> */}
          {/* <div>
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
                          <p>Waiting Time :</p>
                        </div>
                        <div className="col-6">
                          <p>
                            {item.arrival_time} - {item.departure_time}
                          </p>
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
                          <p>Rp {item.price}</p>
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
                    }}
                    to="/bayar"
                  >
                    <button>Lanjut Pembayaran</button>
                  </Link>
                </div>
              </div> */}
          {/* </div>
          </div> */}
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default UpdateAirport;
