import React from 'react'

const Welcome = () => {
  return (
    <div className='lg:p-14 my-2 p-3 bg-black/20 rounded-xl lg:my-2'>
        <h1 class=" text-white  text-center my-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"><b className='text-6xl lg:text-7xl text-black'>Valhalla Lounge</b><br/><br/>vieta, kur baudīt dzērienus un socializēties</h1>
        <p class="text-center mb-6 text-lg font-normal text-cw lg:text-xl sm:px-16 ">Valhalla Lounge ir moderns bārs, kas atrodas pašā Siguldas sirdī, kas piedāvā siltu un viesmīlīgu atmosfēru, lai apmeklētāji varētu baudīt plašu gardu dzērienu un gardu uzkodu klāstu.</p>
        <a href="#" class="float-right inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-black rounded-lg hover:bg-black/50 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Kur mēs atrodamies
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  )
}

export default Welcome;