import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";

const ListBooking = () => {
  const token = localStorage.getItem("token");
  const [listBooking, setListBooking] = useState([]);
  const [ukuran, setUkuran] = useState({ width: "100px", height: "100px" });
  const [oneWay, setOneWay] = useState(false);
  const [roundTrip, setRoundTrip] = useState(false);
  const [TripType, setTripType] = useState({
    oneWay: "One Way",
    roundTrip: "Round Trip",
  });
  const [noFilter, setNoFilter] = useState(true);

  useEffect(() => {
    var method = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/booking", method)
      .then((response) => response.json())
      .then((data) => {
        setListBooking(data.data.bookings);
        console.log(data.data.bookings);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  console.log(listBooking);

  // fungsi konfirmasi pembayaran
  const handleConfirmPayment = (paymentId) => {
    setListBooking(
      listBooking.map((item) => {
        if (item.id === paymentId) {
          var method = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              approved: true,
            }),
          };

          fetch(
            `https://gotravel-ilms4lrona-as.a.run.app/api/v1/booking/${paymentId}`,
            method
          ).then((data) => {
            console.log(data);
          });
          return { ...item, approved: true };
        }
        return item;
      })
    );
  };
  const handleConfirmNotif = (id_user) => {
    var method = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id_user: id_user,
        message: "Booking anda sukses, silahkan cek tiket anda di profile",
      }),
    };

    fetch(
      `https://gotravel-ilms4lrona-as.a.run.app/api/v1/notification`,
      method
    )
      .then((data) => {
        console.log(data.json());
      })
      .then(() => window.location.reload());
  };

  const handleRejectNotif = (id_user) => {
    var method = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id_user: id_user,
        message: "Booking anda gagal, silahkan booking ulang!",
      }),
    };

    fetch(
      `https://gotravel-ilms4lrona-as.a.run.app/api/v1/notification`,
      method
    )
      .then((data) => {
        console.log(data.json());
      })
      .then(() => window.location.reload());
  };

  // fungsi tolak pembayaran
  const handleRejectPayment = (paymentId) => {
    setListBooking(
      listBooking.map((item) => {
        if (item.id === paymentId) {
          var method = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              approved: false,
            }),
          };

          fetch(
            `https://gotravel-ilms4lrona-as.a.run.app/api/v1/booking/${paymentId}`,
            method
          ).then((data) => {
            console.log(data);
          });
          return { ...item, approved: false };
        }
        return item;
      })
    );
  };

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
                List User Booking
              </a>
            </div>
          </div>
        </nav>
        <Dropdown className="mt-3">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setNoFilter(false);
                setRoundTrip(false);
                setOneWay(true);
                setTripType(TripType.oneWay);
              }}
            >
              One Way
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setNoFilter(false);
                setRoundTrip(true);
                setOneWay(false);
                setTripType(TripType.roundTrip);
              }}
            >
              Round Trip
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setNoFilter(true);
                setRoundTrip(false);
                setOneWay(false);
              }}
            >
              No Filter
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="row" style={{ margin: "50px 0 230px 0" }}>
          <Table responsive="sm" striped>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Mobile Phone</th>
                <th>Flight Destination</th>
                <th>Bukti Pembayaran</th>
                <th>confirmation</th>
              </tr>
            </thead>
            {noFilter && (
              <tbody>
                {/* listbooking */}
                {listBooking.length > 0 ? (
                  listBooking.map((bookings) => (
                    <tr key={bookings.id}>
                      <td>
                        <img
                          src={bookings.User.image}
                          style={{ width: "100px", height: "100px" }}
                          alt="profile"
                        />
                      </td>
                      <td>{bookings.name}</td>
                      <td>{bookings.mobilephone}</td>
                      {bookings.trip_type == "Round Trip" && (
                        <td>
                          {bookings.Flight.FromAirport.city} -{" "}
                          {bookings.Flight.ToAirport.city}{" "}
                          {bookings.Flight.ToAirport.city} -{" "}
                          {bookings.Flight.FromAirport.city}{" "}
                        </td>
                      )}
                      {bookings.trip_type == "One Way" && (
                        <td>
                          {bookings.Flight.FromAirport.city} -{" "}
                          {bookings.Flight.ToAirport.city}{" "}
                        </td>
                      )}
                      {bookings.trip_type == "" && (
                        <td>
                          {bookings.Flight.FromAirport.city} -{" "}
                          {bookings.Flight.ToAirport.city}{" "}
                        </td>
                      )}
                      <td>
                        <img
                          src={bookings.confirmation}
                          alt="bukti pembayaran"
                          style={ukuran}
                          onClick={ubahUkuran}
                        />
                      </td>
                      <td>
                        {bookings.approved === null && (
                          <div>
                            <button
                              onClick={() => {
                                handleConfirmPayment(bookings.id);
                                handleConfirmNotif(bookings.id_user);
                              }}
                            >
                              Konfirmasi Pembayaran
                            </button>
                            <button
                              onClick={() => {
                                handleRejectPayment(bookings.id);
                                handleRejectNotif(bookings.id_user);
                              }}
                            >
                              Tolak Pembayaran
                            </button>
                          </div>
                        )}
                        {bookings.approved === true && (
                          <div>Pembayaran telah dikonfirmasi</div>
                        )}
                        {bookings.approved === false && (
                          <div>Pembayaran telah ditolak</div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="text-center">
                    <h1>Penerbangan Kosong</h1>
                  </div>
                )}
              </tbody>
            )}
            {roundTrip && (
              <tbody>
                {/* listbooking */}
                {listBooking.length > 0 ? (
                  listBooking
                    .filter((item) => item.trip_type == "Round Trip")
                    .map((bookings) => (
                      <tr key={bookings.id}>
                        <td>
                          <img
                            src={bookings.User.image}
                            style={{ width: "100px", height: "100px" }}
                            alt="profile"
                          />
                        </td>
                        <td>{bookings.name}</td>
                        <td>{bookings.mobilephone}</td>
                        <td>
                          {bookings.Flight.FromAirport.city} -{" "}
                          {bookings.Flight.ToAirport.city}{" "}
                        </td>
                        <td>
                          <img
                            src={bookings.confirmation}
                            alt="bukti pembayaran"
                            style={ukuran}
                            onClick={ubahUkuran}
                          />
                        </td>
                        <td>
                          {bookings.approved === null && (
                            <div>
                              <button
                                onClick={() => {
                                  handleConfirmPayment(bookings.id);
                                  handleConfirmNotif(bookings.id);
                                }}
                              >
                                Konfirmasi Pembayaran
                              </button>
                              <button
                                onClick={() => {
                                  handleRejectPayment(bookings.id);
                                  handleRejectNotif(bookings.id);
                                }}
                              >
                                Tolak Pembayaran
                              </button>
                            </div>
                          )}
                          {bookings.approved === true && (
                            <div>Pembayaran telah dikonfirmasi</div>
                          )}
                          {bookings.approved === false && (
                            <div>Pembayaran telah ditolak</div>
                          )}
                        </td>
                      </tr>
                    ))
                ) : (
                  <div className="text-center">
                    <h1>Penerbangan Kosong</h1>
                  </div>
                )}
              </tbody>
            )}
            {oneWay && (
              <tbody>
                {/* listbooking */}
                {listBooking.length > 0 ? (
                  listBooking
                    .filter((item) => item.trip_type == "One Way")
                    .map((bookings) => (
                      <tr key={bookings.id}>
                        <td>
                          <img
                            src={bookings.User.image}
                            style={{ width: "100px", height: "100px" }}
                            alt="profile"
                          />
                        </td>
                        <td>{bookings.name}</td>
                        <td>{bookings.mobilephone}</td>
                        <td>
                          {bookings.Flight.FromAirport.city} -{" "}
                          {bookings.Flight.ToAirport.city}{" "}
                        </td>
                        <td>
                          <img
                            src={bookings.confirmation}
                            alt="bukti pembayaran"
                            style={ukuran}
                            onClick={ubahUkuran}
                          />
                        </td>
                        <td>
                          {bookings.approved === null && (
                            <div>
                              <button
                                onClick={() => {
                                  handleConfirmPayment(bookings.id);
                                  handleConfirmNotif(
                                    bookings.id,
                                    bookings.id_user
                                  );
                                }}
                              >
                                Konfirmasi Pembayaran
                              </button>
                              <button
                                onClick={() => {
                                  handleRejectPayment(bookings.id);
                                  handleRejectNotif(
                                    bookings.id,
                                    bookings.id_user
                                  );
                                }}
                              >
                                Tolak Pembayaran
                              </button>
                            </div>
                          )}
                          {bookings.approved === true && (
                            <div>Pembayaran telah dikonfirmasi</div>
                          )}
                          {bookings.approved === false && (
                            <div>Pembayaran telah ditolak</div>
                          )}
                        </td>
                      </tr>
                    ))
                ) : (
                  <div className="text-center">
                    <h1>Penerbangan Kosong</h1>
                  </div>
                )}
              </tbody>
            )}
          </Table>
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ListBooking;
