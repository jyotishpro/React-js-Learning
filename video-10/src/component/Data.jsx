import React from 'react'


const Data = ({name,add,image,vill}) => {
  return (
    <div className='grid grid-cols-4'>
        <div className="">

        <img src={image[0]} className='w-20 hover:scale-110 transition ease-in-out' alt="" />
        <h1>{name}</h1>
        <h1>{add}</h1>
        <h1>{vill}</h1>

        </div>
   
    </div>
  )
}

export default Data
