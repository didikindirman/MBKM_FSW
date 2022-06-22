// import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import MainHero from '../../components/Main';
// import CardCars from '../../components/CardCars';
import FooterApp from '../../components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import '../../styles/style.css';
import { BsPeopleFill, BsGearFill, BsCalendar3 } from 'react-icons/bs';

function Cars() {
  const [cars, setCars] = useState([]);
  const capacity = useRef();

  const onFilter = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');

      //get response data
      const data = await response.data; //.data.Cars;
      console.log(data);
      console.log(response);

      //assign response data to state "posts"
      const filterCars = await data.filter((car) => car.capacity <= capacity.current.value);
      console.log(filterCars);
      setCars(filterCars);
    } catch (err) {
      console.log(err);
      const response = err.response.data;
      console.log(response);
    }
  };
  return (
    <div className="cars-page">
      <NavigationBar />

      {/* Main */}
      <div className="main">
        <div className="container-fluid main-sect">
          <div className="box-desc">
            <h1 className="title-usaha">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="desc-usaha">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          </div>
          <div className="box-car">
            <img src={require('../../assets/Main/img_car.png')} alt="" className="car-image" />
            <div className="background-blue"></div>
          </div>
        </div>
      </div>

      {/* Form Search */}
      <div className="container" id="cari-mobil">
        <div className="container card" id="cm-search">
          <form action="" id="cm-form" onSubmit={onFilter}>
            <div className="form-search p-3">
              <div className="driver">
                <p>Tipe Driver</p>
                <div className="input-group pt-0">
                  <select className="form-select" name="" id="">
                    <option hidden>Pilih Tipe Driver</option>
                    <option vlaue="true">Dengan Sopir</option>
                    <option value="false">Tanpa Sopir</option>
                  </select>
                </div>
              </div>

              <div className="tanggal">
                <p>Tanggal</p>
                <div className="input-group">
                  <input type="date" class="form-control" placeholder="Pilih Tanggal" arial-label="Pilih Tanggal" id="list2date"></input>
                </div>
              </div>

              <div className="waktu">
                <p>Waktu Jemput/Ambil</p>
                <div className="input-group mb-3">
                  <select className="form-select" name="" id="list3">
                    <option hidden>Pilih Waktu</option>
                    <option value="8">08:00 WIB</option>
                    <option value="9">09:00 WIB</option>
                    <option value="10">10:00 WIB</option>
                    <option value="11">11:00 WIB</option>
                    <option value="12">12:00 WIB</option>
                  </select>
                </div>
              </div>

              <div className="penumpang">
                <p>Jumlah Penumpang (optional)</p>
                <div className="input-group mb-3">
                  <select ref={capacity} className="form-select" name="" id="list4">
                    <option hidden>Jumlah Penumpang</option>
                    <option value="1">1 orang</option>
                    <option value="2">2 orang</option>
                    <option value="4">3 orang</option>
                    <option value="5">4 orang</option>
                    <option value="6">6 orang</option>
                  </select>
                </div>
              </div>

              <div className="tombol-search">
                <button type="submit" className="btn btn-success text-white btn-sm">
                  Cari Mobil
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="container" id="cm-result">
          <Row></Row>
        </div> */}
      </div>

      <Container>
        <Row className="all-cars">
          {cars.map((car) => (
            <Col md={4}>
              <Card className="card-cars" key={car.id}>
                <img className="img-cars" src={car.image} alt="" />
                <div className="card-body">
                  <p>
                    {car.model} / {car.manufacture}
                  </p>
                  <h5 className="card-title bold">Rp {car.rentPerDay} / hari</h5>
                  <p className="card-text">{car.description}</p>
                  <div className="">
                    <BsPeopleFill className="me-2" />
                    {car.capacity} Orang
                  </div>
                  <div className="pt-2">
                    <BsGearFill className="me-2" />
                    {car.transmission}
                  </div>
                  <div className="pt-2">
                    <BsCalendar3 className="me-2" />
                    Tahun {car.year}
                  </div>
                  <Button variant="secondary" className=" w-100 mt-3">
                    Pilih Mobil
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <FooterApp />
    </div>
  );
}

export default Cars;
