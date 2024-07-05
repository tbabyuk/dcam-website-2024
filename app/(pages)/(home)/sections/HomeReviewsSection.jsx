import { ReviewCard } from "../../components/ReviewCard"
import { HomeSectionHeading } from "../components/HomeSectionHeading"
import { VisitPageBtn } from "../../components/VisitPageBtn"



const fetchReviews = async () => {
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJxzCGYLs3K4gR0hG4dhYU8mk&key=${process.env.GOOGLE_API_KEY}&fields=reviews&maxheight=10`, {
      next: {
          revalidate: 604800
      }
    })
    const data = await res.json()
    return data.result.reviews
}


export const HomeReviewsSection = async () => {

  const reviews = await fetchReviews();  

  return (
    <section className="reviews bg-dcam-white px-5 lg:px-36 xl:px-52 py-20">
        <HomeSectionHeading title="WHAT OUR CUSTOMERS SAY" textColor="text-dcam-reg-orange" />
        {reviews && 
            reviews.map((review) => (
                <ReviewCard review={review} />
            ))
        }
        {/* <a href="https://search.google.com/local/reviews?placeid=ChIJxzCGYLs3K4gR0hG4dhYU8mk" target="_blank"> */}
        <VisitPageBtn text="See All Reviews" link="/reviews"  />
        {/* </a> */}
    </section>
  )
}