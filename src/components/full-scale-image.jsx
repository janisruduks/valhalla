import React, { useState } from 'react'

const FullScaleImage = ({ image }) => {
  const [showImage, setShowImage] = useState(false)

  return (
    <div className="relative">
      <img src={image} className="w-full h-64 object-cover cursor-pointer" onClick={() => setShowImage(true)} />
      {showImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
          <img src={image} className="w-64 m-auto" />
          <button className="bg-white text-black p-2 rounded-full absolute top-0 right-0 m-4" onClick={() => setShowImage(false)}>
            X
          </button>
        </div>
      )}
    </div>
  )
}

export default FullScaleImage




