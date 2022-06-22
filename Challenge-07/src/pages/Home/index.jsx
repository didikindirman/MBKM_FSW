import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NavigationBar from '../../components/NavigationBar';
import MainHero from '../../components/Main';
import FooterApp from '../../components/Footer';
import { Row, Col, Accordion } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import '../../styles/style.css';

function Home() {
  return (
    <div className="home-page">
      <NavigationBar />
      <MainHero />
      {/* Our Services */}
      <div className="our" id="first-section">
        <div className="services">
          <div className="box-girl">
            <img src={require('../../assets/ServiceImg/girl.png')} alt="" />
          </div>
          <div className="box-kualitas">
            <h2 className="title-services">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="desc-services">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <div className="layanan">
              <div className="list">
                <div>
                  <img className="image-list" src={require('../../assets/ServiceImg/check.png')} alt="" />
                </div>
                <div>
                  <img className="image-list" src={require('../../assets/ServiceImg/check.png')} alt="" />
                </div>
                <div>
                  <img className="image-list" src={require('../../assets/ServiceImg/check.png')} alt="" />
                </div>
                <div>
                  <img className="image-list" src={require('../../assets/ServiceImg/check.png')} alt="" />
                </div>
                <div>
                  <img className="image-list" src={require('../../assets/ServiceImg/check.png')} alt="" />
                </div>
              </div>
              <div className="keunggulan">
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
                <p>Layanan Airport Transfer / Drop In Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div className="why" id="second-section">
        <div className="title-why">
          <h2>Why Us?</h2>
          <p className="question">Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="why-us">
          <div className="card-why">
            <img className="image-list" src={require('../../assets/WhyUs/icon_complete.png')} alt="" />
            <h5 className="card-title">Mobil Lengkap</h5>
            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
          </div>
          <div className="card-why">
            <img className="image-list" src={require('../../assets/WhyUs/icon_price.png')} alt="" />
            <h5 className="card-title">Harga Murah</h5>
            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </div>
          <div className="card-why">
            <img className="image-list" src={require('../../assets/WhyUs/icon_24hrs.png')} alt="" />
            <h5 className="card-title">Layanan 24 Jam</h5>
            <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
          </div>
          <div className="card-why">
            <img className="image-list" src={require('../../assets/WhyUs/icon_professional.png')} alt="" />
            <h5 className="card-title">Sopir Profesional</h5>
            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <section className="testimonial" id="testimonial">
        <div className="Testimonial-title text-center" id="Testimonial">
          <h2 className="fw-700">Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <OwlCarousel items={2} className="owl-theme" loop nav center margin={10}>
          <Row>
            <Col>
              <div className="item">
                <div className="testi-body">
                  <div className="card-left img-card">
                    <img src={require('../../assets/Testimonial/img_photo.png')} className="rounded-circle" />
                  </div>
                  <div className="card-right">
                    <div className="faq-icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p class="fw-bold">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="item">
                <div className="testi-body">
                  <div className="card-left img-card">
                    <img src={require('../../assets/Testimonial/img_photo.png')} className="rounded-circle" />
                  </div>
                  <div className="card-right">
                    <div className="faq-icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p class="fw-bold">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="item">
                <div className="testi-body">
                  <div className="card-left img-card">
                    <img src={require('../../assets/Testimonial/img_photo2.png')} className="rounded-circle" />
                  </div>
                  <div className="card-right">
                    <div className="faq-icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p class="fw-bold">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </OwlCarousel>
      </section>

      {/* Getting Started */}
      <div className="getting">
        <div className="container get text-center">
          <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
          <div className="p-blue">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <a className="btn btn-sm fw-bold text-white button-sewa" href="/cars" type="button">
            Mulai Sewa Mobil
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="faqs" id="fourth-section">
        <div className="faq" id="fourth-section">
          <div className="box-faq">
            <h1>Frequently Asked Question)</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="box-acordion">
            <Accordion>
              <Accordion.Item className="card" eventKey="0">
                <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora ad quibusdam necessitatibus, quod blanditiis aliquam dolorum illo vel omnis quam? Nam exercitationem vitae odit sapiente, ab impedit
                  sintpraesentium?
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="card" eventKey="1">
                <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora ad quibusdam necessitatibus, quod blanditiis aliquam dolorum illo vel omnis quam? Nam exercitationem vitae odit sapiente, ab impedit
                  sintpraesentium?
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="card" eventKey="2">
                <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora ad quibusdam necessitatibus, quod blanditiis aliquam dolorum illo vel omnis quam? Nam exercitationem vitae odit sapiente, ab impedit
                  sintpraesentium?
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="card" eventKey="3">
                <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora ad quibusdam necessitatibus, quod blanditiis aliquam dolorum illo vel omnis quam? Nam exercitationem vitae odit sapiente, ab impedit
                  sintpraesentium?
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="card" eventKey="4">
                <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora ad quibusdam necessitatibus, quod blanditiis aliquam dolorum illo vel omnis quam? Nam exercitationem vitae odit sapiente, ab impedit
                  sintpraesentium?
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterApp />
    </div>
  );
}

export default Home;
