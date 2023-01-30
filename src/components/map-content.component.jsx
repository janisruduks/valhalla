import React from 'react'
import MapContent from '../map.component'

const MapAndContent = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 p-2 bg-black/30 rounded-xl">
      <div className='m-10'>
        <div className='font-bold text-xl text-white text-center'>Darba laiks:</div>
        <div className="flex w-full text-white">
          <div className="grid h-10 flex-grow place-items-center">Pirmdiena:</div>
          <div className="grid h-10 flex-grow place-items-center">Slēgts</div>
        </div>
        <div className="flex w-full text-white">
          <div className="grid h-10 flex-grow place-items-center">Otrdiena:</div>
          <div className="grid h-10 flex-grow place-items-center">17:00-23:00</div>
        </div>
        <div className="flex w-full text-white">
          <div className="grid h-10 flex-grow place-items-center">Trešdiena:</div>
          <div className="grid h-10 flex-grow place-items-center">17:00-23:00</div>
        </div>
        <div className="flex w-full text-white">
          <div className="grid h-10 flex-grow place-items-center">Ceturtdiena:</div>
          <div className="grid h-10 flex-grow place-items-center">16:00-00:00</div>
        </div>
        <div className="flex w-full text-white">
          <div className="grid h-10 flex-grow place-items-center">Piektdiena:</div>
          <div className="grid h-10 flex-grow place-items-center">16:00-01:00</div>
        </div>
        <div className="flex w-full text-white">
          <div className="grid h-10 flex-grow place-items-center">Sestdiena:</div>
          <div className="grid h-10 flex-grow place-items-center">14:00-01:00</div>
        </div>
        <div className="flex w-full text-white">
          <div className="grid h-10 flex-grow place-items-center">Svētdiena</div>
          <div className="grid h-10 flex-grow place-items-center">15:00-22:00</div>
        </div>
      </div>
      <div className="col-span-1 rounded-xl border border-white overflow-hidden">
        <MapContent />
      </div>
    </div>

  )
}

export default MapAndContent;
