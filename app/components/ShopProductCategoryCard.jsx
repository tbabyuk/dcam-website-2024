import Link from "next/link"



export const ShopProductCategoryCard = ({product}) => {
  
  return (
    
    <Link className="w-[250px] h-auto rounded-lg border-2 border-gray-200 overflow-hidden cursor-pointer hover:border-dcam-dark-blue" href={product.productPage}>
        <div className="text-gray-100 text-center font-semibold bg-dcam-dark-blue py-2">{product.category}</div>
        <div className="w-full h-auto bg-gray-100">
            <img
                src={product.source}
                alt={product.alt}
                className="h-full w-full object-cover"
            />
        </div>
    </Link>
  )
}
