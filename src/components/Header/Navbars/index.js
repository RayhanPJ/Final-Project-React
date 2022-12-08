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
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";

const settings = ["Profile","Wishlist", "Logout"];


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

// function handleLogout(e) {
//   e.preventDefault();
//   localStorage.removeItem("token");
//   Navigate('http://localhost:3000/#Booking')
// }

function NavbarHeader() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
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
                  <Nav.Link href="http://localhost:3000/#Booking" className="text-dark list_nav_main">
                    Books
                  </Nav.Link>
                  <Nav.Link href="http://localhost:3000/#aboutUs" className="text-dark list_nav_main">
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href="http://localhost:3000/#Testimonial"
                    className="text-dark list_nav_main"
                  >
                    Testimonial
                  </Nav.Link>
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
                          <Avatar
                            alt="Remy Sharp"
                            src="assets/img/profile1.png"
                          />
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
                              <Link style={{textDecoration: "none",color: "black"}} to={`/${setting}`}>{setting}</Link>
                              
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
