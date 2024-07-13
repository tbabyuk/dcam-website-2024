import { ReviewCard } from "../components/ReviewCard";
import { PageTitle } from "../page-content-components/PageTitle";


const fetchReviews = async () => {
     const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJxzCGYLs3K4gR0hG4dhYU8mk&key=${process.env.GOOGLE_API_KEY}&fields=reviews&maxheight=10`, {
        next: {
            revalidate: 604800
        }
     })
    //  await new Promise((resolve) => setTimeout(resolve, 1000)) 
    const data = await res.json()
    return data.result.reviews
}

export const metadata = {
    title: "Reviews | Da Capo Academy of Music",
    description: "What our students and families say",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Reviews | Da Capo Academy of Music",
        description: "What our students and families say",
        url: "https://dacapomusic.ca/reviews",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article"
    },
}


const ReviewsPage = async () => {
    const reviews = await fetchReviews();

    return ( 
        <>
            <PageTitle title="Reviews" heatherImage="/images/pages/reviews/reviews_page_illustration.png" alt="reviews page illustration" />
            <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 pt-20 pb-32">
                {reviews && 
                    reviews.map((review) => <ReviewCard review={review} />
                )}
                
                <div className="text-center mt-10"><a href="https://search.google.com/local/reviews?placeid=ChIJxzCGYLs3K4gR0hG4dhYU8mk" target="_blank" className="hover:text-lightRed">See All Reviews...</a></div>
            </section>
        </>
     );
}
 
export default ReviewsPage;