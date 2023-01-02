import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import NavbarHeader from "../Header/Navbars";
import { Navigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

async function doLogin({ username, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch(
    "https://gotravel-ilms4lrona-as.a.run.app/api/v1/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
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
    "https://gotravel-ilms4lrona-as.a.run.app/api/v1/google",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        token: res,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data.accessToken;
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const GOOGLECLIENTID = "1075166577960-t9j4kguud7mo2dkaij6k3o5qu9rfna1b.apps.googleusercontent.com";

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ username, password })
      .then((user) => {
        if (!user) {
        setError(user.message);
        // if(username === 'admin'){
        //   Navigate('/listbooking');
        // }
      } else {
        localStorage.setItem("token", user);
      }
})
      .catch((err) => err.message)
      .finally(() => setIsLoading(false));
  }

  const haldleSuccessGoogle = (response) => {
    const userData = jwtDecode(response.credential);
    if (response.credential) {
      doLoginGoogle(response.credential, userData.email)
        .then((token) => {
          if (!token) {
            setError("TOKEN TIDAK ADA");
          } else {
            localStorage.setItem("token", token);
            setIsLoggedIn(token);
          }
        })
        .catch((err) => err.message)
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div className="bgLogin">
      <NavbarHeader />
      <br />
      <br />
      <Container>
        <div className="row">
          <div className="col-7"></div>
          {!isLoggedIn ? (
            <div className="col-5">
              <h2>Masuk</h2>
              <p>
                Belum punya akun? <a href="/register">Daftar disini</a>
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 h6">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  {/* {console.log(username)} */}
                  <input
                    type="text"
                    className="form-control bg-transparent formInput"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="your username"
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
                  <GoogleOAuthProvider clientId= {GOOGLECLIENTID}>
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
            <Navigate to="/" />
          )}
        </div>
      </Container>
    </div>
  );
}

export default Login;
