"use client"

import { useState } from "react"
import { pianoBooksArray } from "./pianoBooksData"
import { ShopProductCard } from "../../components/ShopProductCard"
import { PianoBooksFilter } from "./PianoBooksFilter"


const PianoBooksClientPage = () => {

  const [filterValue, setFilterValue] = useState("piano-all")

    
  return (
      <>
          <PianoBooksFilter setFilterValue={setFilterValue} />
          <div className="grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 pt-20 pb-36">
            {filterValue === "piano-all" && (
                pianoBooksArray
                    .map((product) => (
                    <ShopProductCard key={product.id} product={product} productType="book" />
                    ))
                )
            }
            {filterValue === "piano-rcm" && (
                pianoBooksArray
                    .filter((book) => book.category.includes("rcm"))
                    .map((product) => (
                    <ShopProductCard key={product.id} product={product} productType="book" />
                    ))
                )
            }
            {filterValue === "piano-non-rcm" && (
                pianoBooksArray
                    .filter((book) => !book.category.includes("rcm"))
                    .map((product) => (
                    <ShopProductCard key={product.id} product={product} productType="book" />
                    ))
                )
            }
          </div>
      </>  
    )
}

export default PianoBooksClientPage;
