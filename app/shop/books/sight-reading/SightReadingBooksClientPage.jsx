"use client"

import { useState } from "react"
import { sightReadingBooksArray } from "./sightReadingBooksData"
import { ShopProductCard } from "../../components/ShopProductCard"
import { SightReadingBooksFilter } from "./SightReadingBooksFilter"



const SightReadingBooksClientPage = () => {

  const [filterValue, setFilterValue] = useState("sight-reading-all")

    
  return (
      <>
          <SightReadingBooksFilter filterValue={filterValue} setFilterValue={setFilterValue} />
          <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 pt-20 pb-32">
          {filterValue === "sight-reading-all" && (
              sightReadingBooksArray
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          {filterValue === "sight-reading-rcm" && (
              sightReadingBooksArray
                .filter((book) => book.category.includes("rcm"))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          {/* {filterValue === "sight-reading-non-rcm" && (
              sightReadingBooksArray
                .filter((book) => book.category.includes("non-rcm"))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          } */}
          </div>
      </>  
    )
}

export default SightReadingBooksClientPage;
