import React from 'react'

const ResultCard = (props) => {
  return (
    <div className='w-60 h-80 bg-white rounded'>
        <h1 className='text-black'>{props.item.title}</h1>
    </div>
  )
}

export default ResultCard