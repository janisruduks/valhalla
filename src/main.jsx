import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './components/header.component'
import Welcome from './components/welcome.component'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='lg:w-2/3 lg:mx-auto lg:max-w-screen p-2'>
      <Header />
      <Welcome />
    </div>
  </React.StrictMode>,
)
