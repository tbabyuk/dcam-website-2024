import { ArticleTitle } from "../../components/ArticleTitle"
import { ArticleSectionHeading } from "../../components/ArticleSectionHeading"
import { ArticleHeading } from "../../components/ArticleHeading"
import { PageBottomTrialButton } from "@/app/(pages)/page-content-components/PageBottomTrialButton"
import { ArticleDivider } from "../../components/ArticleDivider"
import { ArticleImage } from "../../components/ArticleImage"
import { ArticleSectionDivider } from "../../components/ArticleSectionDivider"


export const metadata = {
    title: "The 3 Easiest Mozart Sonatas (piano) | Da Capo Academy of Music",
    description: "Looking to learn a Mozart sonata that doesn't require a super advanced mastery of the piano? These three are a great place to start!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "The 3 Easiest Mozart Sonatas (piano) | Da Capo Academy of Music",
        description: "Looking to learn a Mozart sonata that doesn't require a super advanced mastery of the piano? These three are a great place to start!",
        url: "https://dacapomusic.ca/blog/easy-mozart-sonatas",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-09-09T04:24:43+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-mozart-sonatas%2Feasy_mozart_sonatas_featured_image.jpg?alt=media&token=08e9fc73-330c-4fbe-8911-1270cbf2be76",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const ArticleEasyMozartSonatas = () => {

    return (
        <main className="text-gray-600">
            <ArticleTitle title="The 3 Easiest Mozart Sonatas (piano)" date="September 9, 2020" />
            <ArticleImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-mozart-sonatas%2Feasy_mozart_sonatas_featured_image.jpg?alt=media&token=08e9fc73-330c-4fbe-8911-1270cbf2be76" alt="Easy Mozart Sonatas cover"/>

            <ArticleSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64">
                <div>
                    <p className="leading-8">Let's begin with a disclaimer - there is no such thing as an easy Mozart sonata, or even an easy sonata for that matter, which are by their nature complex, multi-movement works. That being said, it doesn't mean that we can't talk about relative easiness, as in easier compared to rest (the other 15) of his sonatas, of which he wrote a total of 18.</p><br />

                    <p className="leading-8">So if you are not yet a super advanced pianist but can't wait to impress your family or friends with a real Mozart piano sonata - I strongly suggest you begin with one of these three. Let's take a look at what they are.</p>
                </div>
            </section>

            <ArticleSectionDivider />

            <ArticleHeading heading="#1. Sonata in C Major, K 545 ('Sonata Facile')" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8 mb-12">
                    <p>Mozart himself described this sonata as “for beginners”, which is why it was nicknamed “sonata facile” or “sonata semplice” (Italian for “easy/simple sonata”). For this reason, I chose it as the first one on the list. This sonata consists of three movements, the first of which, “Allegro”, is the most popular of the three. In fact, many piano students only ever learn the first movement of this sonata. However, the information below will touch on all three movements.</p>
                </div>
                <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-dcam-reg-orange text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                    <h3 className="text-2xl text-center mb-3 bg-dcam-dark-orange rounded">Quick Facts</h3>
                    <ul className="list-disc list-inside leading-6">
                        <li className="font-light"><span className="font-medium">Composed</span>: 1788</li>
                        <li className="font-light"><span className="font-medium">Key</span>: C Major / G Major / C Major</li>
                        <li className="font-light"><span className="font-medium">Movements</span>: 3 (Allegro, Andante, Rondo: Allegretto)</li>
                        <li className="font-light"><span className="font-medium">Duration</span>: ~ 10-14 minutes</li>
                        <li className="font-light"><span className="font-medium">Ability Level</span>: RCM Level 8 - high intermediate</li>
                        <li className="font-light"><span className="font-medium">My personal rating</span>: 5/5 (love it!)</li>
                    </ul>
                </div>
                <div className="mb-14">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/1vDxlnJVvW8"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="leading-8 mb-10 ">
                    <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-4"><span className="font-bold">The key(s)</span>. The 1st and 3rd movements are in C major, while the 2nd is in G major, which are both easy keys (which is a big part of why we included it on this list!)</li>
                        <li><span className="font-bold">2nd Movement</span>. The 2nd movement is the easiest of the three. It is played “Andante” (at a walking pace) and does not contain any technically-challenging passages. So don't expect much difficulty here.</li>
                    </ul>
                </div>
                <div className="leading-8">
                    <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                    <ul className="list-disc list-inside">
                        <li><span className="font-bold">1st Movement</span>. The 1st Movement is definitely the most challenging of the three, with high speed (Allegro), multiple RH trills, and many sixteenth-note scale runs. </li>
                    </ul>
                </div>
            </section>

            <ArticleDivider />

            <ArticleHeading heading="#2. Sonata in G Major, K 283" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8 mb-12">
                    <p>Our second sonata is slightly more technically-difficult than the first one and is best suited for early advanced piano students, though ambitious high intermediate students might also be able to handle it. It is made up of three movements where the first one is again the most popular among music students.</p>
                </div>
                <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-dcam-reg-orange text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                    <h3 className="text-2xl text-center mb-3 bg-dcam-dark-orange rounded">Quick Facts</h3>
                    <ul className="list-disc list-inside leading-6">
                        <li className="font-light"><span className="font-medium">Composed</span>: 1774</li>
                        <li className="font-light"><span className="font-medium">Key</span>: G Major / C Major / G Major</li>
                        <li className="font-light"><span className="font-medium">Movements</span>: 3 (Allegro, Andante, Presto)</li>
                        <li className="font-light"><span className="font-medium">Duration</span>: ~ 12-18 minutes</li>
                        <li className="font-light"><span className="font-medium">Ability Level</span>: RCM Level 9 - low advanced</li>
                        <li className="font-light"><span className="font-medium">My personal rating</span>: 5/5 (love it!)</li>
                    </ul>
                </div>
                <div className="mb-14">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/0rnJu1rlm90"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="leading-8 mb-10 ">
                    <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-4"><span className="font-bold">The key(s)</span>. The 1st and 3rd movements are in G major, while the 2nd is in C major, which are both easy keys. Expect to use mostly white keys here.</li>
                        <li><span className="font-bold">2nd Movement</span>. The 2nd movement is the easiest of the three. It is in C major, played at “Andante” (at a walking pace) and does not contain any technically-challenging passages. So don't expect much difficulty here.</li>
                    </ul>
                </div>
                <div className="leading-8">
                    <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-4"><span className="font-bold">Speed</span>. As if the 1st movement wasn't fast enough (Allegro), the 3rd movement here is to played even faster (Presto), so be prepared for some quick finger action here!</li>
                        <li><span className="font-bold">Octave runs</span>. Although it's relatively short, part of the 1st movement  requires you to play a series harmonic octaves in LH in quick succession.</li>
                    </ul>
                </div>
            </section>

            <ArticleDivider />

            <ArticleHeading heading="#3. Sonata in C Major, K 309" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="leading-8 mb-12">
                    <p>Our final sonata is very comparable in difficulty level to the second one. It is probably the least popular of the three featured here, but popular nevertheless. I give it a confident 4/5 rating.</p>
                </div>
                <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-dcam-reg-orange text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                    <h3 className="text-2xl text-center mb-3 bg-dcam-dark-orange rounded">Quick Facts</h3>
                    <ul className="list-disc list-inside leading-6">
                        <li className="font-light"><span className="font-medium">Composed</span>: 1777</li>
                        <li className="font-light"><span className="font-medium">Key</span>: C Major / F Major / C Major</li>
                        <li className="font-light"><span className="font-medium">Movements</span>: 3 (Allegro con spirito, Andante un poco Adagio, Rondo: Allegretto grazioso)</li>
                        <li className="font-light"><span className="font-medium">Duration</span>: ~ 16 minutes</li>
                        <li className="font-light"><span className="font-medium">Ability Level</span>: RCM Level 9 - low advanced</li>
                        <li className="font-light"><span className="font-medium">My personal rating</span>: 4/5 (it's very nice)</li>
                    </ul>
                </div>
                <div className="mb-14">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/wUPYIcAu1QI"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="leading-8 mb-10 ">
                    <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-4"><span className="font-bold">The key(s)</span>. The 1st and 3rd movements are in C major, while the 2nd is in F major, which are both easy keys. Expect to use mostly white keys here.</li>
                        <li><span className="font-bold">2nd Movement</span>. As was the case with the previous two sonatas, the 2nd movement is the easiest of the three. It is in F major, played at “Andante” (at a walking pace) and does not contain any technically-challenging passages.</li>
                    </ul>
                </div>
                <div className="leading-8">
                    <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-4"><span className="font-bold">Speed</span>. As was the case with the first sonata on our list, in this one too the 1st movement is the fastest of the three, marked “Allegro con spirito”. Playing sixteeth notes at this speed in an additional challenge, but nothing that can't be done with proper practice!</li>
                        <li><span className="font-bold">32nd notes</span>. The 3rd movement contains many passages with 32nd notes in RH, so be ready to move those fingers!</li>
                    </ul>
                </div>
            </section>
            <PageBottomTrialButton />
        </main>
    )
}

export default ArticleEasyMozartSonatas;