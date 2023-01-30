import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './components/header.component'
import Welcome from './components/welcome.component'
import ImageContent from './components/image-content.component'
import Video from './components/video.component'
import MapAndContent from './components/map-content.component'
import ImageGrid from './components/image-grid'
import Contact from './components/contact.component'
import Footer from './components/footer.component'


  const images = [
    'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
    'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/316149/pexels-photo-316149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1801106/pexels-photo-1801106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='lg:w-2/3 lg:mx-auto lg:max-w-screen gap-3 lg:p-5 m-2 rounded-xl'>
      <Header />
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
