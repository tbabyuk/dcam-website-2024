"use client"

import { useShopContext } from "@/app/hooks/useShopContext"


export const AddToCartButton = ({item, id, origin}) => {
  
  const {addToCart} = useShopContext()


  return (
    <>
        <button className="w-full mx-auto bg-green-500 hover:bg-green-600 rounded text-gray-50 text-sm py-3" onClick={() => addToCart(item, id, origin)}>Add to Cart</button>
    </>
  )
}