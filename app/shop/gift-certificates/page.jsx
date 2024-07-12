import { ShopProductCard } from "../components/ShopProductCard"
import { giftCertificatesList } from "@/app/data/shopData"


const ShopGiftCertificatesPage = () => {
    
    return (
        <div className="certificates-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 px-5 lg:px-36 pt-20 pb-32">
            {giftCertificatesList.map((product) => (
                <ShopProductCard key={product.id} product={product} productType="giftCertificate" />
            ))}
        </div>
    )
}

export default ShopGiftCertificatesPage;