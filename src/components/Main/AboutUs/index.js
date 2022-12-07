import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bgAboutUs">
      <div className="col">
        <div
          className="card text-center bg-transparent"
          style={{
            position: "relative",
            top: "180px",
            width: "100%",
            border: "none",
          }}
        >
          <div className="card-body">
            <h2 className="text-light d-flex justify-content-center" id="aboutUs">
              About Us
            </h2>
            <hr
              style={{
                border: "solid 2px white",
                width: "200px",
                margin: "0 auto",
              }}
            />
            <br />
            <Button
              onClick={() => setOpen(!open)}
              className="bg-transparent btn btn-outline-light text-light"
              aria-controls="AboutUsText"
              aria-expanded={open}
            >
              About Us
            </Button>
            <Collapse in={open}>
              <div id="AboutUsText">
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  officia odio commodi praesentium perferendis, exercitationem
                  nemo quisquam cumque tenetur soluta ratione sint, enim eaque
                  dolor aut itaque ipsum excepturi tempore doloribus architecto
                  error doloremque voluptates? Voluptates praesentium commodi
                  porro non deleniti, molestiae, unde neque eaque laudantium
                  tempora blanditiis enim. Ab possimus, maxime neque ratione
                  reprehenderit accusantium eos quam dolore aliquid fuga est
                  nihil a officia quaerat quibusdam, pariatur at illo aut?
                  Tenetur officiis aliquam porro quas a, nam ea nisi in quaerat
                  rerum ipsam similique sint aliquid consequatur est ipsum
                  voluptatibus commodi temporibus corrupti consectetur esse
                  expedita pariatur accusantium illum.
                </p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
