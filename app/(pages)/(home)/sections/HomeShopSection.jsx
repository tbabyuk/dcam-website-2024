import { shopProductCategoriesArray } from "@/app/data/shopData"
import { ShopProductCategoryCard } from "@/app/components/ShopProductCategoryCard"
import { VisitPageBtn } from "../../components/VisitPageBtn"
import { HomeSectionHeading } from "../components/HomeSectionHeading"



export const HomeShopSection = () => {

    return (
        <section className="shop px-5 lg:px-36 xl:px-52 py-20 bg-dcam-light-blue relative">
            <img src="images/pages/home/notes_light.svg" className="absolute left-2 top-4 w-[110px]" />
            <img src="images/pages/home/notes_light.svg" className="absolute right-2 bottom-4 w-[110px]" />
            <HomeSectionHeading title="SHOP" textColor="text-dcam-white"  />
            <p className="mb-16 text-gray-100">Shop local! Visit our online shop for your music book needs! Pick up your order either in person at our school or have it shipped to your address! We currently ship to Canadian residents only.</p>
            <div className="teachers-container flex flex-wrap gap-10 justify-center mb-20">
                {shopProductCategoriesArray.map((product, index) => (
                    <ShopProductCategoryCard key={index} product={product} />
                ))}
            </div>
            <VisitPageBtn text="Visit Shop" link="/shop" />
        </section>
    )
}