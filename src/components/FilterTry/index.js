import React, { useState, useEffect } from "react";

const Filter = () => {
  const [airports, setAirports] = useState([]);
  const [flight, setflight] = useState([]);
  const [displayFlight, setdisplayFlight] = useState([]);
  const [bandara, setbandara] = useState("");
  const [bandara2, setbandara2] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState("");

  useEffect(() => {
    fetch(
      "https://gotravel-production.up.railway.app/api/v1/airport"
    )
      .then((response) => response.json())
      .then((data) => {
        setAirports(data.data.airports);
        console.log(data.data.airports);
      })
      .catch((err) => {
        console.log("err", err);
      });

      fetch(
        "https://gotravel-production.up.railway.app/api/v1/flight"
      )
        .then((response) => response.json())
        .then((data) => {
          setflight(data.data.flights);
          console.log(data.data.flights);
        })
        .catch((err) => {
          console.log("err", err);
        });
        


  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // const populateCars = (cars) => {
  //   return cars.map((car) => {
  //     const isPositive = getRandomInt(0, 1) === 1;
  //     const timeAt = new Date();
  //     const mutator = getRandomInt(1000000, 100000000);
  //     const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))

  //     return {
  //       ...car,
  //       availableAt,
  //     };
  //   })
  // }

  const handleSearchCar = () => {
    // const carsPopulate = populateCars(cars);
    // console.log(carsPopulate);
    const today = new Date();
    const newDateTime = new Date(`${date} ${time}`);

    // if (bandara === "") {
    //   alert("Please select driver type");
    //   return;
    // } else if (!date) {
    //   alert("Please select date");
    //   return;
    // } else if (newDateTime < today) {
    //   alert("Dont select past time");
    //   return;
    // }
    console.log(bandara);
    console.log(bandara2);
    const filterCars = flight.filter((item) => item.FromAirport.name == bandara && item.ToAirport.name == bandara2);
    console.log(filterCars);
    setdisplayFlight(filterCars);
  };

  const handleReset = () => {
    setdisplayFlight([]);
    setbandara("");
    setDate("");
    setTime("");
    setCapacity("");
  };

  return (
    <section id="cariMobil">
      <div className="container px-lg-5">
        <div className="d-lg-flex py-4 px-3 rounded-3 shadow bg-white">
          <div className="flex-fill">
            <div className="row me-2">
              <div className="col-sm-12 col-lg-3 mt-2">
                <p>Tipe Driver</p>
                <select className="form-select" id="driver" onChange={(e) => setbandara(e.target.value)} >
                {airports &&
                    airports.map((airport) => (
                      <option key={airport.id} value={airport.name}>{airport.city}</option>
                    ))}
                </select>
              </div>
              <div className="col-sm-12 col-lg-3 mt-2">
                <p>Tipe Driver</p>
                <select className="form-select" id="driver2" onChange={(e) => setbandara2(e.target.value)} >
                {airports &&
                    airports.map((airport) => (
                      <option key={airport.id} value={airport.name}>{airport.city}</option>
                    ))}
                </select>
              </div>
              {/* <div className="col-sm-12 col-lg-3 mt-2">
                <p>Tanggal</p>
                <input
                  type="date"
                  value={date}
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="filterDate"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div> */}
              {/* <div className="col-sm-12 col-lg-3 mt-2">
                <p>Waktu Jemput/Ambil</p>
                <input
                  type="time"
                  value={time}
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="filterTime"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div> */}
              <div className="col-sm-12 col-lg-3 mt-2">
                <p>Jumlah Penumpang (optional)</p>
                <input
                  type="number"
                  value={capacity}
                  className="form-control"
                  placeholder="Jumlah Penumpang"
                  id="filterCapacity"
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 align-self-end">
            <div className="d-flex justify-content-center">
              <button
                className="text-nowrap me-2"
                id="btn-search"
                onClick={handleSearchCar}
              >
                Cari Mobil
              </button>
              <button
                className="btn btn-danger rounded-0"
                id="btn-clear"
                onClick={handleReset}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5" id="carContainerList">
          {displayFlight.length > 0 ? (
            displayFlight.map((item) => (
              <div className="col-lg-4 mt-2 d-flex align-items-stretch" key={item.id}>
                <div className="card p-4">
                  {/* <img src={item.image} alt="car" className="m-3 rounded" /> */}
                  <p className="mt-auto">{item.FromAirport.name}</p>
                  <p className="fw-bold fs-6">Rp{item.ToAirport.name}</p>
                  <p>{item.kelas}</p>
                  <p><i className="bi bi-people"></i>{item.price} Harga</p>
                  {/* <p><i className="bi bi-people"></i>{item.transmission}</p>
                  <p><i className="bi bi-people"></i>{item.year}</p> */}
                  <button>Pilih Mobil</button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h1>Data Mobil Kosong</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Filter;