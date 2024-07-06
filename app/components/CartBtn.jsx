"use client";

import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";
import { useShopContext } from "../hooks/useShopContext";

export const CartBtn = () => {

  const {cartItemsTotal} = useShopContext();

  return (
      <Link href="/shop/cart">
          <button className="header-btn"><GiShoppingCart size="1.2rem" />Cart ({cartItemsTotal})</button>
      </Link>
  )
}