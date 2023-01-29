import React from 'react'

import Image from '../assets/bar.jpg'

const ImageContent = () => {
  return (
    <div class='lg:grid lg:grid-cols-2 p-2 bg-black/20 mt-5'>
        <div class='col-span-1'>
            <figure class="max-w-lg">
                <img class="h-auto max-w-full rounded-lg" src={Image} alt="image description"/>
                <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
            </figure>
        </div>
        <div class='col-span-1'>
            <p className='text-white'>Hello world heloo world</p>
        </div>
        
    </div>
  )
}

export default ImageContent;
