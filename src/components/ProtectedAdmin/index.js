import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function ProtectedAdmin({ children }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    var method = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/profile", method)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const token = localStorage.getItem("token");
  const role = user.role 
  if (!token) {
    if (role === "member") {
      return <Navigate to="/" />;
    }
  }
  return children;
}

export default ProtectedAdmin;
