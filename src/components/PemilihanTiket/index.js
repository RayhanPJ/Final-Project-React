import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";

const PemilihanTiket = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <p className="fs-5 fw-semibold">
              Harap Pilih Penerbangan Keberangkatan
            </p>
            <div className="row">
              <div className="col-md text-start">
                <img src="assets/img/plane1.png" alt="" />
              </div>
              <div className="col-md">
                <h5>Jakarta</h5>
                <p>Bandara International Soekarno Hatta (CGK)</p>
              </div>
              <div className="col-md offset-1 text-center">
                <img
                  src="assets/img/Vector.png"
                  style={{position: "relative", top: "25px"}}
                  alt="Arrow"
                />
              </div>
              <div className="col-md">
                <h5>Jakarta</h5>
                <p>Bandara International Soekarno Hatta (CGK)</p>
              </div>
              <div className="col-md text-end">
                <img src="assets/img/date.png" alt="Tanggal" />
                <h6>RAB 30 NOV</h6>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-8">
                <div className="card d-grid gap-2 btn text-start">
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
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5>Detail Penerbangan</h5>
                    <p>Garuda Airlines</p>
                    <p>dd/mm/yy</p>
                    <p>Jakarta (JKT) - Bali (DPS)</p>
                    <p>15.30 WIB - 18.00 WIB</p>
                    <p>2 jam 30 menit</p>
                    <div className="row" style={{marginTop: "10px"}}>
                      <div className="col-6">
                        <p>Tiket</p>
                      </div>
                      <div className="col-6">
                        <p>Rp 850.000</p>
                      </div>
                      <div className="col-6">
                        <p>Layanan</p>
                      </div>
                      <div className="col-6">
                        <p>Rp 250.000</p>
                      </div>
                      <div className="col-6">
                        <p>Total</p>
                      </div>
                      <div className="col-6">
                        <p>Rp 1.150.000</p>
                      </div>
                    </div>
                    <div className="btn_lanjutByr d-flex justify-content-center">
                      <button className="btn btn-secondary">Lanjut Pembayaran</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PemilihanTiket;
