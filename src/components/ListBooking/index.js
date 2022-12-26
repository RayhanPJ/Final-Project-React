import React,{useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';



const ListBooking = () => {

  const [listBooking, setListBooking] = useState([]);
  const [ukuran, setUkuran] = useState({ width: '100px', height: '100px' });
  

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

  // fungsi konfirmasi pembayaran
  const handleConfirmPayment = (paymentId) => {
    setListBooking(listBooking.map((bookings) => {
      if (bookings.id === paymentId) {
        return { ...bookings, approved: true };
      }
      return bookings;
    }));
  };
  // fungsi tolak pembayaran
  const handleRejectPayment = (paymentId) => {
    setListBooking(listBooking.map((bookings) => {
      if (bookings.id === paymentId) {
        return { ...bookings, approved: false };
      }
      return bookings;
    }));
  };

  // fungsi untuk mengubah ukuran gambar menjadi besar dan kecil
  const ubahUkuran = () => {
    if (ukuran.width === '100px') {
      setUkuran({ width: '600px', height: '300px' });
    } else {
      setUkuran({ width: '100px', height: '100px' });
    }
  };
  
 

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
        <div className="row" style={{margin: "50px 0 230px 0"}}>
          <Table responsive="sm" striped>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Mobile Phone</th>
                <th>Flight Destination</th>
                <th>Bukti Pembayaran</th>
                <th>confirmation</th>
              </tr>
            </thead>
            <tbody>
              {/* listbooking */}
              {listBooking.length > 0 ? (
                listBooking.map ((bookings) =>(
                  <tr key={bookings.id}>
                    <td><img src={bookings.User.image} alt="profile"/></td>
                    <td>{bookings.name}</td>
                    <td>{bookings.mobilephone}</td>
                    <td>{bookings.Flight.FromAirport.city} - {bookings.Flight.ToAirport.city}</td>
                    <td><img src={bookings.confirmation} alt="bukti pembayaran" style={ukuran} onClick={ubahUkuran} /></td>
                    <td>
                      {bookings.approved === null && (
                        <div>
                          <button onClick={() => handleConfirmPayment(bookings.id)}>Konfirmasi Pembayaran</button>
                          <button onClick={() => handleRejectPayment(bookings.id)}>Tolak Pembayaran</button>
                        </div>
                      )}
                      {bookings.approved === true && <div>Pembayaran telah dikonfirmasi</div>}
                      {bookings.approved === false && <div>Pembayaran telah ditolak</div>}
                    </td>
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
