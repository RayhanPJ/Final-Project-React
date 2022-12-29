import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [riwayat, setRiwayat] = useState(false);
  const [tiket, setTiket] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [listBooking, setListBooking] = useState({});
  const [gender, setGender] = useState({
    men: "L",
    women: "P",
  });
  const [datebirth, setDatebirth] = useState("");
  const [noktp, setKtp] = useState("");

  // const [upImg, setUpImg] = useState("");

  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  const [payImg, setPayImg] = useState("");

  // const num = dataBooking.itemBooking.data.id;
  // console.log(num);

  // const upload = () => {
  //     const formData = new FormData();
  //     formData.append("file", payImg);

  //     var config = {
  //         method: 'put',
  //         url: `https://gotravel-ilms4lrona-as.a.run.app/api/v1/updateProfileUser`,
  //         headers: {
  //             'Authorization': `Bearer ${token}`,
  //         },
  //         data: formData
  //     };

  //     axios(config).then((response) => {
  //         console.log(response);
  //     })
  // };
  // console.log(payImg);

  async function editProfile() {
    // Gunakan endpoint-mu sendiri
    var method = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        no_ktp: `${noktp}`,
        gender: `${gender}`,
        date_of_birth: `${datebirth}`,
        address: `${address}`,
        email: `${user.email}`,
        password: `${user.password}`,
        name: `${name}`,
        username: `${user.username}`,
        image: "",
        role: `${user.role}`,
      }),
    };

    const response = await fetch(
      "https://gotravel-ilms4lrona-as.a.run.app/api/v1/updateUser",
      method
    ).then((data) => {
      window.location.reload();
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  console.log(user);

  const upload = () => {
    const formData = new FormData();
    formData.append("file", payImg);

    var config = {
      method: "put",
      url: `https://gotravel-ilms4lrona-as.a.run.app/api/v1/updateProfileUser`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    };

    axios(config).then((response) => {
      console.log(response);
    });
  };
  console.log(payImg);

  useEffect(() => {
    var method = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/profile", method)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });

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
  console.log(user);
  console.log(listBooking);

  return (
    <div>
      <Header />
      <section className="container-fluid px-0 py-5 my-5">
        <div className="container mt-10">
          <div className="row justify-content-center">
            <div className="col-auto">
              {user.address && (
                <img
                  src={user.image}
                  alt="Profile"
                  className="rounded-circle"
                  height="125"
                />
              )}
              {user.address === null && (
                <img
                  src="assets/img/profile1.png"
                  alt="Profile"
                  className="rounded-circle"
                  height="125"
                />
              )}
            </div>

            <div className="w-100 my-2"></div>

            <div className="col-12 text-center">
              <div>
                {user.name && <h3 className="fw-bolder">{user.name}</h3>}
                {user.name == null && (
                  <h3 className="fw-bolder">{user.username}</h3>
                )}
                {user.address && <h5 className="text-muted">{user.address}</h5>}
                {user.address == null && (
                  <h5 className="text-muted">Unknown</h5>
                )}
                <p>
                  Saya senang sekali Traveling keliling Indonesia.
                  <br />
                  Traveling ke tempat wisata seperti Candi.
                </p>
              </div>

              <Button
                variant="btn btn-lg btn-outline-dark"
                onClick={handleShow}
              >
                Edit Profile
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Foto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control bg-transparent border-dark"
                      placeholder="Masukan nama anda"
                      id="filterCapacity"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control bg-transparent border-dark"
                      placeholder="Jakarta"
                      id="filterCapacity"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date Of Birth</label>
                    <input
                      type="date"
                      className="form-control bg-transparent border-dark"
                      id="filterCapacity"
                      value={datebirth}
                      onChange={(e) => {
                        setDatebirth(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      className="form-select bg-transparent border-dark"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option value="">Pilih Gender</option>
                      <option value={gender.men}>Laki-Laki</option>
                      <option value={gender.women}>Perempuan</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">No KTP</label>
                    <input
                      type="text"
                      className="form-control bg-transparent border-dark"
                      placeholder="Saya..."
                      id="filterCapacity"
                      value={noktp}
                      onChange={(e) => {
                        setKtp(e.target.value);
                      }}
                    />
                  </div>
                  <label
                    htmlFor="formFileLg"
                    className="col-sm-2 col-form-label"
                  >
                    Foto
                  </label>
                  <div className="col-sm-12">
                    <input
                      onChange={(e) => {
                        setPayImg(e.target.files[0]);
                      }}
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                    <small id="text" className="text-muted">
                      File size max.2MB
                    </small>
                  </div>
                  <div className="col-sm-5">
                    <Button variant="btn-lg btn-outline-dark" onClick={upload}>
                      Upload Profile Image
                    </Button>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="btn-lg btn-outline-dark"
                    type="submit"
                    id="btn-search"
                    onClick={editProfile}
                  >
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>

            <div className="col-12 mt-5 text-center">
              <a
                href="#/RiwayatPerjalanan"
                className="fs-5 p-2 fw-bolder mx-2 link-dark-nav text-decoration-none text-dark border-bottom border-dark"
                onClick={() => {
                  setRiwayat(true);
                  setTiket(false);
                }}
              >
                Riwayat Perjalanan
              </a>
              <a
                href="#/Tiket"
                className="fs-5 p-2 fw-bolder mx-2 link-dark-nav text-dark text-decoration-none border-bottom border-dark"
                onClick={() => {
                  setTiket(true);
                  setRiwayat(false);
                }}
              >
                Tiket
              </a>
              <a
                href="#/Favorite"
                className="fs-5 p-2 fw-bolder mx-2 link-dark-nav text-dark text-decoration-none border-bottom border-dark"
              >
                Favorite
              </a>
            </div>
            {riwayat && (
              <div className="row">
                {listBooking.length > 0 ? (
                  listBooking
                    .filter((item) => item.id_user == user.id)
                    .map((item) => {
                      return (
                        <div className="col-md-6 col-lg-4 my-3" key={item.id}>
                          {console.log(item)}
                          <div className="card shadow-sm">
                            <div className="card-header p-0">
                              <img
                                src="assets/img/pesawat-garuda.jpg"
                                alt="Gambar Garuda"
                                className="img-fluid image-zoom-on-hover rounded-top-5"
                              />
                            </div>
                            <div className="card-body">
                              <div className="card-title">
                                <h4 className="fw-bolder mb-0">
                                  {item.Flight.Plane.name}
                                </h4>
                                <small>{item.Flight.flight_date}</small>
                              </div>
                              <div className="card-body p-0 mt-4">
                                <ul className="list-unstyled">
                                  <li className="mb-3">
                                    {item.Flight.FromAirport.name} -{" "}
                                    {item.Flight.ToAirport.name}
                                  </li>
                                  <li className="mb-3">
                                    {item.Flight.arrival_time} -{" "}
                                    {item.Flight.departure_time}
                                  </li>
                                  <li>Kelas : {item.Flight.kelas} </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div className="text-center">
                    <h1>Penerbangan Kosong</h1>
                  </div>
                )}
              </div>
            )}
            {tiket && (
              <div className="row">
                {listBooking.length > 0 ? (
                  listBooking
                    .filter((item) => item.id_user == user.id)
                    .map((item) => {
                      return (
                        <div className="col-md-6 col-lg-4 my-3" key={item.id}>
                          {console.log(item)}
                          <div className="card shadow-sm">
                            <div className="card-header p-0">
                              <img
                                src="assets/img/pesawat-garuda.jpg"
                                alt="Gambar Garuda"
                                className="img-fluid image-zoom-on-hover rounded-top-5"
                              />
                            </div>
                            <div className="card-body">
                              <div className="card-title">
                                <h4 className="fw-bolder mb-0">
                                  asd
                                  {item.Flight.Plane.name}
                                </h4>
                                <small>{item.Flight.flight_date}</small>
                              </div>
                              <div className="card-body p-0 mt-4">
                                <ul className="list-unstyled">
                                  <li className="mb-3">
                                    {item.Flight.FromAirport.name} -{" "}
                                    {item.Flight.ToAirport.name}
                                  </li>
                                  <li className="mb-3">
                                    {item.Flight.arrival_time} -{" "}
                                    {item.Flight.departure_time}
                                  </li>
                                  <li>Kelas : {item.Flight.kelas} </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div className="text-center">
                    <h1>Penerbangan Kosong</h1>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Profile;
