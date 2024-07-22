"use client"

import { useState } from "react"
import { theoryBooksArray } from "./theoryBooksData"
import { ShopProductCard } from "../../components/ShopProductCard"
import { TheoryBooksFilter } from "./TheoryBooksFilter"


const TheoryBooksClientPage = () => {

  const [filterValue, setFilterValue] = useState("theory-all")

    
  return (
      <>
          <TheoryBooksFilter filterValue={filterValue} setFilterValue={setFilterValue} />
          <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 pt-20 pb-32">
            {filterValue === "theory-all" && (
                theoryBooksArray
                    .map((product) => (
                    <ShopProductCard key={product.id} product={product} productType="book" />
                    ))
                )
            }
            {filterValue === "theory-rcm" && (
                theoryBooksArray
                    .filter((book) => book.category.includes("rcm"))
                    .map((product) => (
                    <ShopProductCard key={product.id} product={product} productType="book" />
                    ))
                )
            }
            {/* {filterValue === "theory-non-rcm" && (
                theoryBooksArray
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

export default TheoryBooksClientPage
