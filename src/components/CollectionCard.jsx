import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item)=>{
dispatch(removeCollection(item.id))
dispatch(removeToast())
    }
  return (
   <div className='w-[18vw] relative h-70  rounded'>
      <a target='_blank'className='h-full' href={item.url}>
         {item.type =='photo'?<img className='h-full w-full rounded-2xl object-cover object-center' src={item.src} alt="" />:''}
        {item.type =='video'?<video className='h-full w-full rounded-2xl object-cover object-center' autoPlay loop muted src={item.src}></video>:''}
       </a>
        <div id='bottom' className=' flex justify-between w-full px-1 py-10 items-center absolute bottom-0 text-white'>
            <h2 className='text-sm font-semibold capitalize'>{item.title}</h2>
            <button 
            onClick={()=>{
            removeFromCollection(item)
            }}
            className='bg-lime-500 cursor-pointer active:scale-95 text-white rounded px-3 py-1 font-medium'>Remove</button>
        </div>
    </div>
  )
}

export default CollectionCard