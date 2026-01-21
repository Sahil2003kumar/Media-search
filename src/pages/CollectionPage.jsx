import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/collectionCard'

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)
  return (
    <div className='flex h-[85%] w-full justify-center flex-wrap gap-5 overflow-auto px-10 p-20 '>
        {collection.map((item, idx)=>{
          return <div key={idx}>
            <CollectionCard item={item} />
             </div>
        })}
    </div>
  )
}

export default CollectionPage