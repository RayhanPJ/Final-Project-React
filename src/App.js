import React, { useState } from "react";
import axios from "axios";

const PersonList = () => {
  const [payImg, setPayImg] = useState("");

  const upload = () => {
    const formData = new FormData();
    formData.append("file", payImg);

    axios.post(
      "https://gotravel-ilms4lrona-as.a.run.app/confirmation", formData
    ).then((response) => {
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
