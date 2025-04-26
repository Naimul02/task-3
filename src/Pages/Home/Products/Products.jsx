import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Card from '../../../shared/card/card'
import { Link } from 'react-router-dom'
import useproductsData from '../../../hooks/useproductsData'

export default function Products() {

    const [products , refetch] = useproductsData()
  return (
    <div>
         <div className="bg-slate-100 pb-10">
      <div className="max-w-3xl mx-auto text-center space-y-2 pt-10 mb-10">
      <h1 className="text-xl font-bold">Products for Daily Shopping</h1>
      <p className="text-gray-600 px-4 lg:px-0">See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.</p>
      </div>


      <div className="pl-2 pr-2 lg:pl-6 lg:pr-6 grid grid-cols-2 lg:grid-cols-5 gap-[10px] lg:gap-4">
      

        {
          products &&
          products?.map(product => <Card
            key={product.unique_id}
            product={product}
          ></Card>)
        }
        

      </div>
      


    </div>
    </div>
  )
}
