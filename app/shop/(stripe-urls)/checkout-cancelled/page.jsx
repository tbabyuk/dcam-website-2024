import Link from "next/link";



const ShopCancelPage = () => {
  return (
    <div className="h-[300px] flex flex-col justify-center items-center">
      <p className="text-red-500 text-[1.3rem] mb-5">Ooops! Your checkout was not completed. Please try again later!</p>
      <Link href="/shop" className="btn">Back to Shop</Link>
    </div>  
  )
}

export default ShopCancelPage;