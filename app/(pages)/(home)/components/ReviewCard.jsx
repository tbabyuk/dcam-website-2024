import {AiFillStar} from "react-icons/ai"



export const ReviewCard = ({review}) => {

    const numStars = Array.from({length: review.rating})

    return ( 
        <div className="flex p-5 mb-5 rounded-md bg-gradient-to-r from-dcam-light-blue to-white shadow-md">
            <div><img src={review.profile_photo_url} className="max-w-[40px]" alt="customer profile image" /></div>
            <div className="px-5">
                <p className="font-bold pb-1">{review.author_name}</p>
                <p className="text-xs pb-1">{review.relative_time_description}</p>
                <p className="flex pb-2">{numStars.map((star) => <AiFillStar color="#FB8E28" size="1.2em" />)}</p>
                <p>{review.text}</p>
            </div>
        </div>
     );
}