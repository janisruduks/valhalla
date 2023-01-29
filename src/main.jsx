import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './components/header.component'
import Welcome from './components/welcome.component'
import ImageContent from './components/image-content.component'
import Video from './components/video.component'
import MapAndContent from './components/map-content.component'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='lg:w-2/3 lg:mx-auto lg:max-w-screen gap-3 lg:p-5 m-2 rounded-xl'>
      <Header />
      <Welcome />
      <MapAndContent />
    </div>
  </React.StrictMode>,
)
