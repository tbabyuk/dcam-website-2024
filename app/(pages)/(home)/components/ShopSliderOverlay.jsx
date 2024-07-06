import Link from "next/link"
import { memo } from "react"

export const ShopSliderOverlay = memo(() => {

  return (
        <Link href="/shop" className="absolute hidden md:block top-0 left-0 -rotate-12 w-[300px] z-[2] cursor-pointer">
            <img src="/images/pages/home/visit_shop_slider_overlay.png" alt="visit our shop" />
        </Link>
    )
});