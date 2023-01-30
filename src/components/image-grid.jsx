import React from 'react'
import FullScaleImage from './full-scale-image'


const ImageGrid = ({images}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(image => (
        <FullScaleImage key={image} image={image} />
      ))}
    </div>
  )
}

export default ImageGrid