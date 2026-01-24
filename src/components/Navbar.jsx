import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
         <div className='flex justify-between items-center py-4 px-10 bg-slate-400'>

                <Link to='/' className='font-medium text-2xl'>Media Search</Link>
                <div className='flex gap-5 items-center'>
                    <Link className='text-base font-medium active:scale-90 bg-emerald-500 rounded-xl px-4 py-2' to='/'>Search</Link>
                    <Link className='text-base font-medium active:scale-90 bg-emerald-500 rounded-xl px-4 py-2' to='/collection'>Collection</Link>
                </div>
            </div>
    </div>
  )
}

export default Navbar
//done