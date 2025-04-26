import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useproductsData() {



    const {data : products =[] , refetch} = useQuery({
        queryKey : ['products'],
        queryFn : async() => {
            const res = await axios.get('https://admin.refabry.com/api/all/product/get')
        
            return res?.data?.data?.data
        }
    })
  return [products , refetch]
}
