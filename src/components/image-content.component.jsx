import React from 'react'

import Image from '../assets/bar.jpg'

const ImageContent = () => {
  return (
    <div class='grid grid-cols-2'>
        <div class='col-span-1'>
            <figure class="max-w-lg">
                <img class="h-auto max-w-full rounded-lg" src={Image} alt="image description"/>
                <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
            </figure>
        </div>
        <div class='col-span-1'>
            <p>Hello world heloo world</p>
        </div>
        
    </div>
  )
}

export default ImageContent;
