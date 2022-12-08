import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

const PesanTiket = () => {
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
              <a className="navbar-brand" href="#/" style={{ color: "#FFFFFF" }}>
                Booking
              </a>
            </div>
            <div className="col-lg-2">
              <a href="#/" className="nav-link" style={{ color: "#FFFFFF" }}>Pilih Tiket</a>
            </div>
            <div className="col-lg-2">
              <a href="#/" className="nav-link" style={{ color: "#FFFFFF" }}>Pesanan Tiket</a>
            </div>
            <div className="col-lg-2">
              <a href="#/" className="nav-link active" style={{ color: "#FFFFFF" }}>Bayar</a>
            </div>
          </div>
        </nav>
        {/* data diri */}
        <div className="row" style={{margin: "50px 0 230px 0"}}>
          <div className="col-lg-8">
            <h3 style={{ borderStyle: "solid", backgroundColor: "#ffffff", borderRadius: "6px", width: "240px" }}>
              <img src="assets/img/icon _User.png" alt="icon user" />Pemesan
            </h3>
            <form style={{ borderStyle: "solid", backgroundColor: "#ffffff", borderRadius: "6px",padding: "50px" }}>
              <h3>Data Diri</h3>
              <div className="col-lg-12 nama_lengkap">
                <label>Nama Lengkap</label>
                <br />
                <input type="text" id="nama_lengkap" placeholder="Nama lengkap" className="form-control " style={{width: "300px"}}/>
              </div>
              <div className="row" style={{marginTop: "10px"}}>
                <div className="col-lg-4">
                  <label>Kursi</label>
                  <br />
                  <select className="form-select" id="pilih-driver">
                    <option value="">Pilih Nomer Kursi</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  <label>Makanan</label>
                  <br />
                  <select className="form-select" id="pilih-makanan">
                    <option value="">Pilih Tipe Makanan</option>
                    <option value="anak">Anak</option>
                    <option value="dewasa_anak">Dewasa + Anak</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  <label>Bagasi</label>
                  <br />
                  {/* <input
                    type={"text"}
                    style={{ width: "140px", backgroundColor: "#ffff" }}
                  ></input> */}
                  <select className="form-select" id="kapasitas-bagasi">
                    <option value="">Kapasitas bagasi</option>
                    <option value="5kg">5 KG</option>
                    <option value="10kg">10 KG</option>
                  </select>
                </div>
              </div>
              <h3 style={{ marginTop: "30px" }}>Informasi Kontak</h3>
              <div className="row">
                <div className="col-lg-6">
                  <label>Email</label>
                  <br />
                  {/* <input
                    type={"email"}
                    style={{ backgroundColor: "#ffff" }}
                  ></input> */}
                  <input type={"email"} id="email" className="form-control "/>
                  <br />
                  <div className="form-group">
                    <label>Re-Email</label>
                    <br />
                    {/* <input
                      type={"email"}
                      style={{ backgroundColor: "#ffff" }}
                    ></input> */}
                    <div className="input-group">
                      <input type={"email"} id="email" className="form-control "/>
                    </div>
                  </div>
                  
                </div>
                <div className="col-lg-6">
                  <label>Home Phone</label>
                  <br />
                  {/* <input
                    type={"tel"}
                    style={{ backgroundColor: "#ffffff" }}
                  ></input> */}
                  <input type={"tel"} id="homeph" className="form-control "/>
                  <br />
                  <label>Mobile Phone</label>
                  <br />
                  {/* <input
                    type={"tel"}
                    style={{ backgroundColor: "#ffffff" }}
                  ></input> */}
                  <input type={"tel"} id="mobileph" className="form-control "/>
                </div>
              </div>
            </form>
          </div>
          {/* detail pesanan & total */}
          <div className="col-lg-4">
            <div style={{ borderStyle: "solid", backgroundColor: "#ffffff", borderRadius: "6px",marginTop: "50px",padding: "17px" }}>
              <p style={{textAlign: "center",fontSize: "20px"}}>Detail Penerbangan</p>
              <p>Garuda Airlines</p>
              <p>dd/mm/yy</p>
              <p style={{margin: "6px 0 15px 0"}}>Jakarta (JKT) - Bali (DPS)</p>
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
              <div className="btn_lanjutByr">
                <button style={{backgroundColor: "#ffffff",color: "#000000", marginLeft: "80px"}}>Lanjut Pembayaran</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default PesanTiket;
