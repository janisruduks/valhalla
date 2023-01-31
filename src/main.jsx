import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './components/header.component'
import Welcome from './components/welcome.component'
import MapAndContent from './components/map-content.component'
import ImageGrid from './components/image-grid'
import Contact from './components/contact.component'
import Footer from './components/footer.component'
import Weather from './components/weather-component'

import { images } from './data/images'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='lg:w-2/3 lg:mx-auto lg:max-w-screen gap-3 lg:p-5 m-2 rounded-xl text-white'>
      <Header />
      <Weather />
      <Welcome />
      <div className="container mx-auto p-4">
        <ImageGrid images={images} />
      </div>
      <MapAndContent />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>,
)
