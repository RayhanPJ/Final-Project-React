import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import NavbarHeader from "../Header/Navbars";
import { Navigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

async function doRegister({ username, email, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch(
    "https://final-project-be-production.up.railway.app/api/v1/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }
  );
  const data = await response.json();
  return data.token;
}

async function doLoginGoogle(res, email) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch(
    "https://challenge-8-be-fsw-production.up.railway.app/api/v1/google",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password: "",
        token: res,
      }),
    }
  );
  const data = await response.json();
  return data.token;
}

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterIn, setIsRegisterIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const GOOGLECLIENTID = "1075166577960-qiqbp7khn8e0e50mrgf01hcci3kognqf.apps.googleusercontent.com";

  useEffect(() => {
    setIsRegisterIn(false);
  }, []);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doRegister({ username, email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => err.message)
      .finally(() => setIsLoading(false));
  }

  const haldleSuccessGoogle = (response) => {
    const userData = jwtDecode(response.credential);
    // const response = await fetch("https://challenge-8-be-fsw-production.up.railway.app/api/v1/google"
    if (response.credential) {
      doLoginGoogle(response.credential, userData.email)
        .then((token) => {
          localStorage.setItem("token", token);
          setIsRegisterIn(token);
        })
        .catch((err) => err.message)
        .finally(() => setIsLoading(false));
    }
  };

  // function handleLogout(e) {
  //   setIsLoading(true);
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  //   setIsLoading(false);
  // }

  return (
    <div className="bgLogin">
      <NavbarHeader />
      <br />
      <br />
      <Container>
        <div className="row">
          <div className="col-7"></div>
          {!isRegisterIn ? (
            <div className="col-5">
              <h2>Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 h6">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="username"
                    className="form-control bg-transparent formInput"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="your username"
                  />
                </div>
                <div className="mb-3 h6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control bg-transparent formInput"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="your email"
                  />
                </div>
                <div className="mb-3 h6">
                  <label htmlFor="passwd" className="col-sm-2 col-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-transparent formInput"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="your password"
                  />
                </div>
                <a href="/" className="forgot">
                  Back to the site
                </a>
                <br />
                <br />
                <div className="d-grid gap-2">
                  <input
                    type="submit"
                    value={isLoading ? "Loading" : "Login"}
                  />
                </div>
                <p>Atau masuk dengan</p>
                <div className="d-grid gap-2">
                  <GoogleOAuthProvider clientId={GOOGLECLIENTID}>
                    <GoogleLogin
                      buttonText="Login with Google"
                      onSuccess={(res) => {
                        haldleSuccessGoogle(res);
                      }}
                      onError={() => {
                        haldleSuccessGoogle("Error");
                      }}
                      cookiePolicy={"single_host_origin"}
                    />
                  </GoogleOAuthProvider>
                </div>
              </form>
            </div>
          ) : (
            <Navigate to="/"/>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Register;
