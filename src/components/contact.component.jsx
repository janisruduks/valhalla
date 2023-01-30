import React from 'react'

import Vd from '../assets/bar-video.mp4'

const Contact = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 bg-black/30 rounded-xl overflow-hidden p-3'>
        <div>
            <video className='rounded' src={Vd} autoPlay loop />
        </div>
        <div className='text-white p-3'>
            <div className='font-bold text-xl text-white text-center'>Kontakti</div>
            <div className="flex w-full text-white">
                <div className="grid h-10 flex-grow place-items-center">Adrese:</div>
                <div className="grid h-10 flex-grow place-items-center">Sigulda, pils iela 8</div>
            </div>
            <div className="flex w-full text-white">
                <div className="grid h-10 flex-grow place-items-center">Tālrunis:</div>
                <div className="grid h-10 flex-grow place-items-center">+371 123 456 78</div>
            </div>
            <div className="flex w-full text-white">
                <div className="grid h-10 flex-grow place-items-center">E-pasts:</div>
                <div className="grid h-10 flex-grow place-items-center">valhalla@lounge.com</div>
            </div>
        </div>
    </div>
  )
}

export default Contact;
