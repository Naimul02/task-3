import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({product}) {
    const {name,image , id, buying_price} = product
  return (
   <Link to={`/detailsProduct/${id}`} ><div className="rounded  bg-white hover:shadow-lg border-none relative transition-all duration-500 transform hover:scale-105 overflow-hidden  shadow-gray-600 ">


    
    
    <div className="w-full rounded h-[200px] object-cover mx-auto">
    <figure><img  src={`https://admin.refabry.com/storage/product/${image}`} alt="product" className="w-full h-[200px] rounded object-cover" /></figure>
    </div>
    
    <div className="px-3 space-y-1 py-3 flex justify-between items-center">
    <div className=''>
    <h1 className='text-sm font-medium text-gray-600'>{name}</h1>
    
    <div className='flex items-center justify-between gap-6 mt-2'>
    <h1 className='text-lg font-semibold text-gray-800'>Price : {buying_price}</h1>
    {/* <Link to={`/detailsProduct/${id}`}><button className='btn btn-sm'>view Details</button></Link> */}
    </div>
    </div>
      
      
    
    </div>
  </div>
    </Link>
  )
}
