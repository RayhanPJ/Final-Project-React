import { useNavigate } from "react-router-dom";
import {React} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "../Footer";


function LogOut() {
  const navigate = useNavigate();
  
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate('/')
  }

  return (
    <div>
        <Card style={{ width: '25rem', margin: "70px 0 274px 450px", textAlign: "center" }}>
            <Card.Body>
                <Card.Title>LogOut Akun</Card.Title>
                <Card.Text>
                Apakah anda yakin ingin keluar dari akun ini ?
                </Card.Text>
                <Button variant="primary" value="Logout" onClick={handleLogout} style={{width: "70px"}}>Ya</Button>
                <Button variant="primary" className="btn_logout_y" href="http://localhost:3000/">Tidak</Button>
            </Card.Body>
        </Card>
        <Footer/>
    </div>
    
  )
}

export default LogOut;