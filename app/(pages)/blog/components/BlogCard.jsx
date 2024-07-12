
import Link from "next/link";


export const BlogCard = ({title, date, imageUrl, description, blogLink, category}) => {
    return ( 
        <div className="blog-card">
            <h2 className="text-2xl">{title}</h2>
            <small className="text-gray-500">{date}</small>
            <img className="py-6" src={imageUrl} />
            <p className="mb-4">{description}</p>
            <Link href={blogLink}><button className="dcam-blog-card-btn">Read More</button></Link>
            <small className=" text-gray-500">Category: {category}</small>
        </div>
     );
}
