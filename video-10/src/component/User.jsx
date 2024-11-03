import React, { useContext, useEffect, useState } from 'react'
import Data from './Data'
import { ShopContext } from '../Context/ShopConteaxt'

const User = () => {
    const {products} = useContext(ShopContext)
    const [bio, setbio] = useState([]);
    useEffect(()=>{
        setbio(products)
    })
  return (
    <div>
        <div className="grid grid-cols-4 p-4 mt-4 mb-4 gap-8">

        {
            bio.map((item,index)=>(

    <Data key={index} name={item.name} add={item.add} image={item.image} vill={item.vill}></Data>
            ))
        }
                </div>
      <h1>hi this is akash</h1>
    </div>
  )
}

export default User
