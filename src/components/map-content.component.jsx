import React from 'react'
import MapContent from '../map.component'

const MapAndContent = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 p-2'>
        <div>
            <p className='text-white'>Hellllloooo world</p>
        </div>
        <div className='col-span-1 rounded-xl border border-white overflow-hidden' >
            <MapContent/>
        </div>
    </div>
  )
}

export default MapAndContent;
