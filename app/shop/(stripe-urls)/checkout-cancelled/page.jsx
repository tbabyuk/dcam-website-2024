import Link from "next/link";



const ShopCancelPage = () => {
  return (
    <div className="h-[300px] flex flex-col justify-center items-center">
      <p className="text-red-500 text-[1.3rem] mb-8 text-center">Ooops! Your checkout was not completed. Please try again later!</p>
      <Link href="/shop" className="btn">Back to Shop</Link>
    </div>  
  )
}

export default ShopCancelPage;