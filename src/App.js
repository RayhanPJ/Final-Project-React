import React, { useState } from "react";
import axios from "axios";

const PersonList = () => {
  const [payImg, setPayImg] = useState("");
  const token = localStorage.getItem("token");
  const num = "50";

  const upload = () => {
    const formData = new FormData();
    formData.append("file", payImg);

    var config = {
      method: 'put',
      url: `https://gotravel-ilms4lrona-as.a.run.app/api/v1/confirmation/${num}`,
      headers: { 
        'Authorization': `Bearer ${token}`, 
      },
      data : formData
    };

    axios(config).then((response) => {
      console.log(response);
    })
  };
  console.log(payImg);

  return (
    <div>
      <label htmlFor="formFileLg" className="form-label">
        Silahkan upload bukti pembayaran kamu dibawah sini
      </label>
      <input
        onChange={(e) => {
          setPayImg(e.target.files[0]);
        }}
        className="form-control form-control-lg"
        id="formFileLg"
        type="file"
      />
      <button onClick={upload}>upload gambar</button>
    </div>
  );
};

export default PersonList;
