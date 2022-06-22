import React from 'react'
import '../../styles/style.css'

function FooterApp() {
  return (
    <div className="footer">
        <div className="foot">
          <div className="adress">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="fitur">
            <p>Our Services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="social-media">
            <p>Connect with us</p>
            <a href=""><img src={require('../../assets/FooterIcon/icon_facebook.png')} alt="" className='car-image' /></a>
            <a href=""><img src={require('../../assets/FooterIcon/icon_instagram.png')} alt="" className='car-image' /></a>
            <a href=""><img src={require('../../assets/FooterIcon/icon_twitter.png')} alt="" className='car-image' /></a>
            <a href=""><img src={require('../../assets/FooterIcon/icon_mail.png')} alt="" className='car-image' /></a>
            <a href=""><img src={require('../../assets/FooterIcon/icon_twitch.png')} alt="" className='car-image' /></a>
          </div>
          <div className="copyright">
            <p>Copyright Binar 2022</p>
            <img src={require('../../assets/NavigationBar/logo.png')} alt="" className='car-image' />
          </div>
        </div>
      </div>
  )
}

export default FooterApp