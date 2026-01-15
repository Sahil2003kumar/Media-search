import React, { useState } from 'react'

const SearchBar = () => {
    const [text, setText] = useState('')
  return (
    <div>
        <form className='flex gap-5 p-10'> 
            <input
             className='border-2 px-4 py-2 text-xl rounded outline-none'
             type="text"  
             placeholder='Search Anything....'/>

            <button className='border-2 px-4 py-2 text-xl rounded outline-none'> Search</button>
        </form>
    </div>
  )
}

export default SearchBar