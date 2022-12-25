import React,{useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';



const ListBooking = () => {
  const [listBooking, setListBooking] = useState([]);

  
  useEffect(() => {
    const token = localStorage.getItem("token");

    var method = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    };

    fetch("https://gotravel-ilms4lrona-as.a.run.app/api/v1/booking", method)
      .then((response) => response.json())
      .then((data) => {
        setListBooking(data.data.bookings);
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err);
      });

  }, []);

  console.log(listBooking)

  return (
    <div style={{ backgroundColor: "#F0F0F0" }} className="pesanTiket">
      <Header />
      <Container>
        <nav
          className="navbar navbar-expand-lg mt-3"
          style={{ backgroundColor: "#4E4E4E" }}
        >
          <div className="container-fluid row">
            <div className="col-lg-7">
              <a className="navbar-brand" href="#/" style={{ color: "#FFFFFF" }}>
                List User Booking
              </a>
            </div>
          </div>
        </nav>
        {/* data diri */}
        <div className="row" style={{margin: "50px 0 230px 0"}}>
          <Table striped>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Mobile Phone</th>
                <th>Flight Destination</th>
                <th>Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>

              {listBooking.length > 0 ? (
                listBooking.map ((bookings) =>(
                  <tr key={bookings.id}>
                    <td>{bookings.User.image}</td>
                    <td>{bookings.name}</td>
                    <td>{bookings.mobilephone}</td>
                    <td>{bookings.Flight.FromAirport.city} - {bookings.Flight.ToAirport.city}</td>
                    <td>{bookings.totalprice}</td>
                    <td>{bookings.confirmation}</td>

                  </tr>
                ))
              ) : (
                <div className="text-center">
                  <h1>Penerbangan Kosong</h1>
                </div>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ListBooking;
