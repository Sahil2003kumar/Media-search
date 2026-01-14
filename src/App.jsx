import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {

 
  return (
    <div className='h-screen w-full  bg-zinc-900 text-white'>
      <button onClick={async ()=>{
       const data = await fetchPhotos('cat')

       console.log(data.results)
      }} className='bg-red-600 border  mr-6 rounded px-6'>Get Photos</button>
      
      <button onClick={async ()=>{
       const data = await fetchVideos('dog')

       console.log(data.results)
      }} className='bg-yellow-300 border rounded px-6'>Get Video</button>
    </div>
  )
}

export default App