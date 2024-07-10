

export const ShopPageTitle = ({title, heatherImage, image, alt}) => {


    return (
        <div className="h-[150px] bg-[url('/images/lesson-offerings/page-header-bg.jpg')] bg-cover bg-center flex items-center justify-between px-5 lg:px-36 xl:px-52 relative border-b-2 border-gray-300">
            <h1 className="flex items-center flex-wrap gap-x-3">
                <div className="font-ovo text-gray-500 font-bold text-4xl z-10 py-2 px-5 bg-gray-100 bg-opacity-90 border-2 shadow-md border-gray-200 -skew-x-6 rounded">Shop</div>
                {title && (
                    <div className={`font-ovo text-gray-500 font-bold text-2xl md:text-4xl z-10 py-2 px-5 bg-gray-100 bg-opacity-90 border-2 shadow-md border-gray-200 -skew-x-6 rounded`}>{title}</div>
                )}
            </h1>
            {heatherImage && (<img src={heatherImage} alt={alt} title="original artwork by the one and only - Heather Alison Rose" className="h-[100%] sm:h-[115%] absolute top-3 right-5 lg:right-36 xl:right-52" />)}
            {image && (<img src={image} alt={alt} className="h-[100%] sm:h-[120%] absolute top-1 right-5 lg:right-36 xl:right-52" />)}
        </div>
    )
}