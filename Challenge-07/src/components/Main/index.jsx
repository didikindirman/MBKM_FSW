import React from 'react'
import '../../styles/style.css'

function Main() {
  return (
    <div className='main'>
        <div className='container-fluid main-sect'>
            <div className='box-desc'>
                <h1 className='title-usaha'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p className='desc-usaha'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <a className='btn btn-sm fw-bold text-white button-sewa' href="/cars" type="button">Mulai Sewa Mobil</a>
            </div>
            <div className='box-car'>
                <img src={require('../../assets/Main/img_car.png')} alt="" className='car-image' />
                <div className='background-blue'></div>
            </div>
        </div>
    </div>
  )
}

export default Main 