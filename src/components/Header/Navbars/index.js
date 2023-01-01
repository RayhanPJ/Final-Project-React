import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MenuItem from "@mui/material/MenuItem";
import Modal from "react-bootstrap/Modal";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const settings = ["Profile", "Wishlist", "Logout"];

// const endpoint = "https://gotravel-production.up.railway.app/api/v1/profile"
// fetch("https://gotravel-production.up.railway.app/api/v1/profile/")
// .then((response)=>response.text())
// .then((json)=>console.log(json))

// fetch('https://gotravel-production.up.railway.app/api/v1/profile', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
// .then(response => response.json())
// .then(response => console.log(JSON.stringify(response)))

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function NavbarHeader() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [shownotif, setShownotif] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [notif, setNotif] = React.useState([]);
  const [anchorElNotif, setAnchorElNotif] = React.useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = localStorage.getItem("token");

  const handleClickList = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    var method = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://gotravel-ilms4lrona-as.a.run.app//api/v1/profile", method)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
    fetch(
      "https://gotravel-ilms4lrona-as.a.run.app/api/v1/notification",
      method
    )
      .then((response) => response.json())
      .then((data) => {
        setNotif(data.data.notifications);
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });

    user.role === "admin" ? setShownotif(false) : setShownotif(true);
  }, [user.role]);
  console.log(user);
  const idUser = user.id;
  let countNotif = 0;
  for (let i = 0; i < notif.length; i++) {
    if (notif[i].id_user == idUser) countNotif++;
  }
  console.log(countNotif);
  console.log(idUser);
  console.log(notif);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar_main">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="assets/img/GoTravel.png"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              {/* {console.log(Login)} */}
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  GoTravel
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 nav_side_bar">
                  <Nav.Link href="http://localhost:3000/" className="text-dark">
                    Beranda
                  </Nav.Link>
                  <Nav.Link
                    href="http://localhost:3000/#Booking"
                    className="text-dark list_nav_main"
                  >
                    Books
                  </Nav.Link>
                  <Nav.Link
                    href="http://localhost:3000/#aboutUs"
                    className="text-dark list_nav_main"
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href="http://localhost:3000/#Testimonial"
                    className="text-dark list_nav_main"
                  >
                    Testimonial
                  </Nav.Link>
                  <Button
                    className="btn btn-transparent"
                    variant="btn btn-lg btn-outline-dark"
                    onClick={handleShow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-bell-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>{" "}
                    <span className="badge text-bg-secondary" >
                      {countNotif}
                    </span>
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Notification</Modal.Title>
                    </Modal.Header>
                    {notif.length > 0 ? (
                      notif
                        .filter((item) => item.id_user == idUser)
                        .map((item) => {
                          return (
                            <Modal.Body key={item.id}>
                              {item.message} <hr />
                            </Modal.Body>
                          );
                        })
                    ) : (
                      <div className="text-center">
                        <h1>Notifikasi Kosong</h1>
                      </div>
                    )}

                    <Modal.Footer>
                      <Button
                        variant="btn-lg btn-outline-dark"
                        type="submit"
                        id="btn-search"
                        onClick={handleClose}
                      >
                        close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {!shownotif ? (
                    <div>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="CRUD"
                        variant="transparent"
                      >
                        <Dropdown.Item
                          href="http://localhost:3000/listflight"
                          className="text-dark list_nav_main"
                        >
                          List Fight
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="http://localhost:3000/listairport"
                          className="text-dark list_nav_main"
                        >
                          List Airport
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="http://localhost:3000/listplane"
                          className="text-dark list_nav_main"
                        >
                          List Plane
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="http://localhost:3000/notif"
                          className="text-dark list_nav_main"
                        >
                          List Booking
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  ) : (
                    ""
                  )}

                  {!isLoggedIn ? (
                    <Nav.Link href="/login" className="text-dark">
                      <Button
                        size="md"
                        variant="secondary"
                        disabled={isLoading}
                        onClick={!isLoading ? handleClick : null}
                      >
                        {isLoading ? "Loading…" : "Login"}
                      </Button>
                    </Nav.Link>
                  ) : (
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          {user.address && (
                            <div className="d-flex">
                              <Avatar
                                className="me-2 ms-4"
                                src={user.image}
                                alt="Profile"
                              />
                              <p className="fs-6 mt-2">Hi {user.name}</p>
                            </div>
                          )}
                          {user.address === null && (
                            <Avatar
                              alt="Profile"
                              src="assets/img/profile1.png"
                            />
                          )}
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {settings.map((setting) => (
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                                to={`/${setting}`}
                              >
                                {setting}
                              </Link>
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarHeader;
