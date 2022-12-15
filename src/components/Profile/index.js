import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";

const Profile = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getApiDataProfile = async () => {
        const response = await fetch(
          "https://gotravel-production.up.railway.app/api/v1/profile"
        ).then((response) => response.json());
        
        console.log(response.data);
        
      };
      useEffect(() => {
        getApiDataProfile();
      }, []);
    return (
        <div>
        <Header />
        <section className="container-fluid px-0 py-5 my-5">
        <div className="container mt-10">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <img src="assets/img/profile1.png" alt="Profile 1" className="rounded-circle" height="125"/>
                </div>

                <div className="w-100 my-2"></div>

                <div className="col-12 text-center">
                    <h3 className="fw-bolder">Rayhan</h3>
                    <h5 className="text-muted">Jakarta</h5>
                    <p>Saya senang sekali Traveling keliling Indonesia.<br />Traveling ke tempat wisata seperti Candi.</p>
                    
                    <Button variant="btn btn-lg btn-outline-dark" onClick={handleShow}>
                    Edit Foto Profile
                    </Button>
                    <a href="#" className="btn btn-lg btn-outline-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16"><path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/></svg></a>
                    
                    <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Foto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Foto</label>
                        <div className="col-sm-5">
                          <input className="form-control" name="gambar" type="file" id="foto" placeholder="small"/>
                          <small id="text" className="text-muted">
                            File size max.2MB
                          </small>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                        Save
                        </Button>
                    </Modal.Footer>
                    </Modal>
                </div>

                <div className="col-12 mt-5 text-center">
                    <a href="#/RiwayatPerjalanan" className="fs-5 p-2 fw-bolder mx-2 link-dark-nav text-decoration-none border-bottom border-dark">Riwayat Perjalanan</a>
                    <a href="#/Favorite" className="fs-5 p-2 fw-bolder mx-2 link-dark-nav text-decoration-none">Favorite</a>
                </div>

                <div className="w-100 my-3"></div>

                <div className="col-md-6 col-lg-4 my-3">
                    <div className="card shadow-sm">
                        <div className="card-header p-0">
                            <img src="assets/img/pesawat-garuda.jpg" alt="Gambar Garuda" className="img-fluid image-zoom-on-hover rounded-top-5"/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <a href="#/" title="Garuda Airlines" className="link-dark-card"><h4 className="fw-bolder mb-0">Garuda Airlines</h4></a>
                                <small>10/10/2019</small>
                            </div>
                            <div className="card-body p-0 mt-4">
                                <ul className="list-unstyled">
                                    <li>Jakarta (JKT) - Bali (DPS)</li>
                                    <li>15.30 - 18.00 WIB</li>
                                    <li>2 jam 30 menit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-3">
                    <div className="card shadow-sm">
                        <div className="card-header p-0">
                            <img src="assets/img/pesawat-garuda.jpg" alt="Gambar Garuda" className="img-fluid image-zoom-on-hover rounded-top-5"/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <a href="#/" title="Garuda Airlines" className="link-dark-card"><h4 className="fw-bolder mb-0">Garuda Airlines</h4></a>
                                <small>01/12/2020</small>
                            </div>
                            <div className="card-body p-0 mt-4">
                                <ul className="list-unstyled">
                                    <li>Bali (DPS) - Jakarta (JKT)</li>
                                    <li>16.30 - 19.00 WIB</li>
                                    <li>2 jam 30 menit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-3">
                    <div className="card shadow-sm">
                        <div className="card-header p-0">
                            <img src="assets/img/pesawat-garuda.jpg" alt="Gambar Garuda" className="img-fluid image-zoom-on-hover rounded-top-5"/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <a href="#/" title="Garuda Airlines" className="link-dark-card"><h4 className="fw-bolder mb-0">Garuda Airlines</h4></a>
                                <small>15/04/2022</small>
                            </div>
                            <div className="card-body p-0 mt-4">
                                <ul className="list-unstyled">
                                    <li>Jakarta (JKT) - Yogyakarta (JOG)</li>
                                    <li>15.21 - 16.00 WIB</li>
                                    <li>1 jam 21 menit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </div>
    )
}
export default Profile;