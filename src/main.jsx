import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './components/header.component'
import Welcome from './components/welcome.component'
import ImageContent from './components/image-content.component'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='lg:w-2/3 lg:mx-auto lg:max-w-screen gap-3 lg:p-5 m-2 bg-c3/30 rounded-xl'>
      <Header />
      <Welcome />
      <ImageContent />
    </div>
  </React.StrictMode>,
)
