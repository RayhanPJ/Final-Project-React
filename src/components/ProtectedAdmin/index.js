import { Navigate } from "react-router-dom";
import React from "react";

function ProtectedAdmin({ children }) {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState([]);

  useEffect(() => {
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
  }, []);
  if (!token && user.role == "admin") return <Navigate to="/" />;
  return children;
}

export default ProtectedAdmin;
