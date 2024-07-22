"use client"

import { useState } from "react"
import { guitarBooksArray } from "./guitarBooksData"
import { ShopProductCard } from "../../components/ShopProductCard"
import { GuitarBooksFilter } from "./GuitarBooksFilter"


const GuitarBooksClientPage = () => {

  const [filterValue, setFilterValue] = useState("guitar-all")

    
  return (
      <>
          <GuitarBooksFilter filterValue={filterValue} setFilterValue={setFilterValue} />
          <div className="grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 pt-20 pb-32">
            {filterValue === "guitar-all" && (
                guitarBooksArray
                    .map((product) => (
                    <ShopProductCard key={product.id} product={product} productType="book" />
                    ))
                )
            }
            {/* {filterValue === "piano-rcm" && (
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
            } */}
          </div>
      </>  
    )
}

export default GuitarBooksClientPage;
