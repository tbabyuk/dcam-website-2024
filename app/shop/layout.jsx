"use client";

import { ShopPageTitle } from "./components/ShopPageTitle";
import { BreadCrumbs } from "./components/BreadCrumbs"
import { usePathname } from "next/navigation";

// export const metadata = {
//     title: "Shop | Da Capo Academy of Music",
//     description: "Shop at our online store for music books, gift certificates, and other amazing music merchandise! New products are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
//     robots: { index: true, follow: true},
//     authors: [{name: "Taras (Terry) Babyuk"}],
//     openGraph: {
//         title: "Shop | Da Capo Academy of Music",
//         description: "Shop at our online store for music books, gift certificates, and other amazing music merchandise! New products are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
//         url: "https://dacapomusic.ca/shop",
//         siteName: "Da Capo Academy of Music",
//         locale: "en_US",
//         type: "article"
//     },
//   }

const ShopLayout = ({children}) => {


    const path = usePathname();

    const pathArray = path.split("/").filter(Boolean);
    const lastSegment = pathArray.length > 1 && pathArray.pop();


    console.log("Logging pathAarray from ShopLayout", pathArray);

    return (
        <main className="bg-white">
            <ShopPageTitle title={lastSegment} heatherImage="/images/shop/shop_page_illustration.png" alt="shop page illustration" />
            <BreadCrumbs />
            {children}
        </main>
    )
}

export default ShopLayout;