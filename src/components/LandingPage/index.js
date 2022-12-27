import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import {FormTiket, Testimonial, FormInfoTiket, AboutUs} from "../Main"

const LandingPage = () => {
  return (
    <div>
      <Header />
      <AboutUs/>
      <FormTiket/>
      <FormInfoTiket/>
      <Testimonial/>
      <Footer />
    </div>
  );
};

export default LandingPage;
