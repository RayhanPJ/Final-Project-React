import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const ListPlane = () => {
  const [listPlane, setListPlane] = useState({});
  const token = localStorage.getItem("token");
  // const [approve, setApprove] = useState({
  //   true : true,
  //   false : false
  //  });
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

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/plane", method)
      .then((response) => response.json())
      .then((data) => {
        setListPlane(data.data.planes);
        console.log(data.data.planes);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  console.log(listPlane);

  //fungsi delete
  const handleDelete = (id) => {
    setListPlane(
      listPlane.map((item) => {
        if (item.id === id) {
          var method = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };

          fetch(
            `https://gotravel-ilms4lrona-as.a.run.app/api/v1/plane/${id}`,
            method
          ).then((data) => {
            window.location.reload();
          });
        }
        return item;
      })
    );
  };

  // // fungsi konfirmasi pembayaran
  // const handleConfirmPayment = (paymentId) => {
  //   setListFlight(
  //     listFlight.map((item) => {
  //       if (item.id === paymentId) {
  //         var method = {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //           body: JSON.stringify({
  //             approved: true,
  //           }),
  //         };

  //         fetch(
  //           `https://gotravel-ilms4lrona-as.a.run.app/api/v1/Flight/${paymentId}`,
  //           method
  //         ).then((data) => {
  //           console.log(data);
  //         });
  //         return { ...item, approved: true };
  //       }
  //       return item;
  //     })
  //   );
  // };
  // // fungsi tolak pembayaran
  // const handleRejectPayment = (paymentId) => {
  //   setListFlight(
  //     listFlight.map((item) => {
  //       if (item.id === paymentId) {
  //         var method = {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //           body: JSON.stringify({
  //             approved: false,
  //           }),
  //         };

  //         fetch(
  //           `https://gotravel-ilms4lrona-as.a.run.app/api/v1/Flight/${paymentId}`,
  //           method
  //         ).then((data) => {
  //           console.log(data);
  //         });
  //         return { ...item, approved: false };
  //       }
  //       return item;
  //     })
  //   );
  // };

  // fungsi untuk mengubah ukuran gambar menjadi besar dan kecil
  const ubahUkuran = () => {
    if (ukuran.width === "100px") {
      setUkuran({ width: "600px", height: "300px" });
    } else {
      setUkuran({ width: "100px", height: "100px" });
    }
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
                List Plane
              </a>
            </div>
          </div>
        </nav>
        <Link to="/inputplane">
          <button>add Plane</button>
        </Link>
        <div className="row" style={{ margin: "50px 0 230px 0" }}>
          <Table striped>
            <thead>
              <tr>
                <th>Plane</th>
                <th>Code</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* listAirport */}
              {listPlane.length > 0 ? (
                listPlane.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link
                        className="d-grid gap-2 text-decoration-none"
                        state={item}
                        to="/updateplane"
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

export default ListPlane;
