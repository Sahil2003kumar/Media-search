//making tabs
import React from 'react'

const Tabs = () => {
    const tabs = ['photos','video', 'GIF']
  return (
    <div className='flex gap-5 p-10'>
        {tabs.map(function(elem,idx){
            return <button 
            className='bg-gray-600 cursor-pointer active:scale-95 px-5 py-2 rounded uppercase hover:bg-green-400'
            key={idx}>
                {elem}
                </button>
        })}
    </div>
  )
}

export default Tabs