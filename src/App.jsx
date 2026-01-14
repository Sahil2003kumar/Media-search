import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {

 
  return (
    <div className='h-screen w-full bg-zinc-900 text-white'>
      <button onClick={async ()=>{
       const data = await fetchPhotos('cat')

       console.log(data.results)
      }} className='bg-red-600 border rounded px-6'>Get Photos</button>
    </div>
  )
}

export default App