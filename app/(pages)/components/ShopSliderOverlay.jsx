import Link from "next/link"


export const ShopSliderOverlay = () => {

  return (
        <Link href="/shop" className="absolute hidden md:block top-0 left-0 -rotate-12 w-[300px] z-[2] cursor-pointer">
            <img src="/images/shop/visit_shop_slider_overlay.png" />
        </Link>
    )
}