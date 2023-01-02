import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const ListAirport = () => {
  const [listAirport, setListAirport] = useState({});
  const token = localStorage.getItem("token");
  const [ukuran, setUkuran] = useState({ width: "100px", height: "100px" });

  useEffect(() => {
    const token = localStorage.getItem("token");

    var method = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/airport", method)
      .then((response) => response.json())
      .then((data) => {
        setListAirport(data.data.airports);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  //fungsi delete
  const handleDelete = (id) => {
    setListAirport(
      listAirport.map((item) => {
        if (item.id === id) {
          var method = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };

          fetch(
            `https://gotravel-ilms4lrona-as.a.run.app/api/v1/airport/${id}`,
            method
          ).then((data) => {window.location.reload()});
        }
        return item;
      })
    );
  };

  return (
    <div style={{ backgroundColor: "#F0F0F0" }} className="pesanTiket">
      <Header />
      <Container>
        <nav
          className="navbar navbar-expand-lg mt-3"
          style={{ backgroundColor: "#4E4E4E" }}
        >
          <div className="container-fluid row">
            <div className="col-lg-7">
              <a
                className="navbar-brand"
                href="#/"
                style={{ color: "#FFFFFF" }}
              >
                List Airport
              </a>
            </div>
          </div>
        </nav>
        <Link to="/inputairport">
          <button>add Airport</button>
        </Link>
        <div className="row" style={{ margin: "50px 0 230px 0" }}>
          <Table striped>
            <thead>
              <tr>
                <th>Airport</th>
                <th>Province</th>
                <th>City</th>
                <th>Country</th>
                <th>Code</th>
                <th>Status</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {/* listAirport */}
              {listAirport.length > 0 ? (
                listAirport.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.province}</td>
                    <td>{item.city}</td>
                    <td>{item.country}</td>
                    <td>{item.code}</td>
                    <td>{item.status}</td>
                    <td>
                    <Link
                    className="d-grid gap-2 text-decoration-none"
                    state={item}
                    to="/updateairport"
                  >
                    <button>Edit</button>
                  </Link>
                      <button onClick={() => handleDelete(item.id)}>
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="text-center">
                  <h1>Penerbangan Kosong</h1>
                </div>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ListAirport;
