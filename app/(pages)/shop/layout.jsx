import { PageTitle } from "../page-content-components/PageTitle"
import { BreadCrumbs } from "./components/BreadCrumbs"

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

    return (
        <div className="shop-page">
            <PageTitle title="Shop" heatherImage="/images/pages/shop/shop_page_illustration.png" alt="shop page illustration" />
            <BreadCrumbs />
            <main className="bg-white">
                {children}
            </main>
        </div>
    )
}

export default ShopLayout;