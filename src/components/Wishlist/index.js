import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";

const Wishlist = () => {
  return (
    <div>
      <Header />
      <section className="container-fluid px-0 py-5 my-5">
        <div className="container mt-10">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="assets/img/profile1.png"
                alt="Profile 1"
                className="rounded-circle"
                height="125"
              />
            </div>

            <div className="w-100 my-2"></div>

            <div className="col-md-8 mt-5 text-start">
              <div className="row justify-content-between">
                <div className="col-md-6 my-auto">
                  <h3 className="fw-bolder">Wishlist</h3>
                </div>
              </div>
            </div>

            <div className="w-100 my-3"></div>

            <div className="col-md-12">
              <div className="row ">
                <div className="col-12 ">
                  <div className="card d-grid gap-2">
                    <img
                      src="assets/img/list.png"
                      className="card-img-top"
                      alt="Gambar Garuda"
                    />
                    <div className="card-body">
                      <div className="card-body p-0 row justify-content-between">
                        <div className="col-auto my-auto">
                          <a
                            href="#/"
                            title="Jakarta (JKT) - Bali (DPS)"
                            className="link-dark-card"
                          >
                            <h4 className="fw-bolder">
                              Jakarta (JKT) - Bali (DPS)
                            </h4>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Wishlist;

{/* <div className="container">
  <div className="card">
    <div className="card-body">
      <h3 className="fw-bolder">Wishlist</h3>
      <div className="row">
        <div className="col-12">
          <div className="card d-grid gap-2">
            <img src="/public/img/list.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="card-body p-0 row justify-content-between">
                <div className="col-auto my-auto">
                  <a
                    href="#"
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
      </div>
    </div>
  </div>
</div>; */}
