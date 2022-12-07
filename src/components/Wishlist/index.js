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
              <div class="row ">
                <div class="col-12 ">
                  <div class="card d-grid gap-2">
                    <img
                      src="assets/img/list.png"
                      class="card-img-top"
                      alt="Gambar Garuda"
                    />
                    <div class="card-body">
                      <div class="card-body p-0 row justify-content-between">
                        <div class="col-auto my-auto">
                          <a
                            href="#"
                            title="Jakarta (JKT) - Bali (DPS)"
                            class="link-dark-card"
                          >
                            <h4 class="fw-bolder">
                              Jakarta (JKT) - Bali (DPS)
                            </h4>
                          </a>
                          <ul class="list-unstyled mb-0">
                            <li>15.30 - 18.00 WIB</li>
                            <li>2 jam 30 menit</li>
                          </ul>
                        </div>
                        <div class="col-auto my-auto">
                          <span class="text-muted">Rabu, 26/11/2022</span>
                          <h3 class="fw-bolder mb-0">Rp850.000</h3>
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

<div class="container">
  <div class="card">
    <div class="card-body">
      <h3 className="fw-bolder">Wishlist</h3>
      <div class="row">
        <div class="col-12">
          <div class="card d-grid gap-2">
            <img src="/public/img/list.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <div class="card-body p-0 row justify-content-between">
                <div class="col-auto my-auto">
                  <a
                    href="#"
                    title="Jakarta (JKT) - Bali (DPS)"
                    class="link-dark-card"
                  >
                    <h4 class="fw-bolder">Jakarta (JKT) - Bali (DPS)</h4>
                  </a>
                  <ul class="list-unstyled mb-0">
                    <li>15.30 - 18.00 WIB</li>
                    <li>2 jam 30 menit</li>
                  </ul>
                </div>
                <div class="col-auto my-auto">
                  <span class="text-muted">Rabu, 26/11/2022</span>
                  <h3 class="fw-bolder mb-0">Rp850.000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
