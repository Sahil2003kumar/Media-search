import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/collectionCard'
import {  clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

  const dispatch = useDispatch()
  const collection = useSelector(state => state.collection.items)
  const clearAllcollection = ()=>{
dispatch(clearCollection())
  }
  return (
   <div className='overflow-auto px-10 p-20'>
    <div className='flex justify-between'>
      <h2 className='text-3xl font-medium '>Your Collection</h2>
      <button
      onClick={()=>{
        
      clearAllcollection()
      }}
      className='bg-red-600 px-6  text-base font-medium rounded  active:scale-90'>Clear All Collection</button>

    </div>
     <div className='flex h-[85%] w-full justify-center flex-wrap gap-5  mt-5 '>
        {collection.map((item, idx)=>{
          return <div key={idx}>
            <CollectionCard item={item} />
             </div>
        })}
    </div>
   </div>
  )
}

export default CollectionPage