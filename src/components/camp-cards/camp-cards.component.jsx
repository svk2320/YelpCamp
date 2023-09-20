import React from 'react'

const CampCards = ({title, description, imgUrl}) => {
  return (
    <div className='flex m-4 flex-col w-[300px] max-sm:w-full border-2 border-slate-200 rounded-md p-2'>
        <img src={imgUrl} alt={title} className="w-full h-[180px] rounded-md" />
        <div className='my-1 font-bold'>{title}</div>
        <div className='text-slate-500 font-normal'>{description}</div>
        <button className='my-2 w-full font-bold border-slate-200 border-2 p-2 rounded-md' type='button'>View Campground</button>
    </div>
  )
}

export default CampCards