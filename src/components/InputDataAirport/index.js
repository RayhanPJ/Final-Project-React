import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

async function addAirport({
  name,
  province,
  city,
  country,
  code,
  status,
  token,
}) {
  const response = await fetch(
    "https://gotravel-ilms4lrona-as.a.run.app/api/v1/airport",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name : name,
        province : province,
        city: city,
        country: country,
        code: code,
        status: status
      }),
    }
  );
  const data = await response.json();
  return data;
}

const InputAirport = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);
  const [issetRegisterd, setRegisterd] = useState(false);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    addAirport({
      name,
      province,
      city,
      country,
      code,
      status,
      token,
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
               Add Airport
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
              Input Data Airport
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
              <label className="form-label">Status</label>
                <br />
                <select
                  id="Status"
                  name="Status"
                  className="form-select"
                  style={{ width: "300px" }}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="" hidden>
                    Pilih Status Bandara
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
                value={isLoading ? "Loading" : "Add Airport"}
              />
            </form>
            ) : (
              <Navigate to="/listairport"/>
            )}
          </div>
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default InputAirport;
