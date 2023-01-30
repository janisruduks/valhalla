import React from 'react'
import MapContent from '../map.component'

const MapAndContent = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 p-2 bg-black/30 rounded-xl">
      <div>
        <p className='text-white text-4xl font-bold text-center'>Darba laiks</p>
        <div className='grid grid-cols-2 my-10 lg:mx-32'>
          <div className='col-span-1 text-white text-center'>
            <p className='py-1'>Pirmdiena</p>
            <p className='py-1'>Otrdiena</p>
            <p className='py-1'>Trešdiena</p>
            <p className='py-1'>Ceturtdiena</p>
            <p className='py-1'>Piektdiena</p>
            <p className='py-1'>Sestdiena</p>
            <p className='py-1'>Svētdienaa</p>
          </div>
          <div className='col-span-1 text-white text-center'>
            <p className='py-1'>Slēgts</p>
            <p className='py-1'>17:00-23:00</p>
            <p className='py-1'>17:00-22:00</p>
            <p className='py-1'>16:00-00:00</p>
            <p className='py-1'>16:00-01:00</p>
            <p className='py-1'>14:00-01:00</p>
            <p className='py-1'>15:00-22:00</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-xl border border-white overflow-hidden">
        <MapContent />
      </div>
    </div>

  )
}

export default MapAndContent;
