import { ArticleTitle } from "../components/ArticleTitle"
import { ArticleSectionHeading } from "../components/ArticleSectionHeading"
import { ArticleHeading } from "../components/ArticleHeading"
import { PageBottomTrialButton } from "../../page-content-components/PageBottomTrialButton"
import { ArticleDivider } from "../components/ArticleDivider"
import { ArticleSectionDivider } from "../components/ArticleSectionDivider"
import { ArticleImage } from "../components/ArticleImage"


export const metadata = {
    title: "The 3 Easiest Clementi Sonatinas (piano) | Da Capo Academy of Music",
    description: "These three Clementi sonatinas are perfect for low-intermediate to intermediate piano students looking to start playing more serious pieces!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "The 3 Easiest Clementi Sonatinas (piano) | Da Capo Academy of Music",
        description: "These three Clementi sonatinas are perfect for low-intermediate to intermediate piano students looking to start playing more serious pieces!",
        url: "https://dacapomusic.ca/blog/easy-clementi-sonatinas",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2022-10-31T01:47:14+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-clementi-sonatinas%2Feasy_clementi_sonatinas_cover.jpg?alt=media&token=ef9c5aaa-360c-474d-bc25-c12a0a0790cd",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const ArticleEasyClementiSonatinas = () => {
  return (
            <main className="text-gray-700">
            <ArticleTitle title="The 3 Easiest Clementi Sonatinas (piano)" date="October 30, 2022" />
            <ArticleImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-clementi-sonatinas%2Feasy_clementi_sonatinas_cover.jpg?alt=media&token=ef9c5aaa-360c-474d-bc25-c12a0a0790cd" alt="Easy Clementi Sonatinas cover"/>

            <ArticleSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64">
                <div>
                    <p className="leading-8">Muzio Clementi (1752-1832) was an influential Italian pianist, composer, teacher, editor, and music publisher. His musical output had an important influence on many future generations of musicians and composers, including Beethoven and Chopin.</p><br />
                    <p className="leading-8">The sonatinas presented here are a great choice for students who are at a low-intermediate to intermediate level at the piano and are looking to begin playing pieces from the classical repertoire. They also serve as a perfect introduction to the sonata, as the word sonatina literally means “little sonata”.</p><br />
                    <p className="leading-8">The three sonatinas presented here are all taken from Opus 26 of Clementi works, which contains six sonatinas in total. I have chosen these three as I find them to be the most beautiful and most liked amongst my own students. I have also arranged them in order of difficult from easier to harder. Enjoy!</p>
                </div>
            </section>

            <ArticleSectionDivider />

            <ArticleHeading heading="#1. Sonatina in C Major, Op. 36, No. 1" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-dcam-reg-orange text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-dcam-dark-orange rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-medium">Composed</span>: 1797</li>
                            <li className="font-light"><span className="font-medium">Pages</span>: 3</li>
                            <li className="font-light"><span className="font-medium">Key</span>: C Major</li>
                            <li className="font-light"><span className="font-medium">Movements</span>: 3 (Spiritoso, Andante, Vivace)</li>
                            <li className="font-light"><span className="font-medium">Ability Level</span>: Low intermediate - intermediate</li>
                            <li className="font-light"><span className="font-medium">My personal rating</span>: 4.5/5 (very nice!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/0_Ksi2qmW0A?si=TAQS4epbJXWsUR_e"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT&apos;S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li>The key of C major means we are dealing mostly with white keys, aside from occasional black-key accidentals. The middle movement in its tempo of <span className="italic">Andante</span> should be especially comfortable for beginners.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li>The two faster movements, especially the third one - <span className="italic">Vivace</span>. The sixteenth notes especially will require quick and balanced fingering at this tempo.</li>
                        </ul>
                    </div>
            </section>

            <ArticleDivider />

            <ArticleHeading heading="#2. Sonatina in G Major, Op. 36, No. 2" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-dcam-reg-orange text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-dcam-dark-orange rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className=" font-medium">Composed</span>: 1797</li>
                            <li className="font-light"><span className="font-medium">Pages</span>: 4</li>
                            <li className="font-light"><span className="font-medium">Key</span>: G Major</li>
                            <li className="font-light"><span className="font-medium">Movements</span>: 3 (Allegretto, Allegretto, Allegro)</li>
                            <li className="font-light"><span className="font-medium">Ability Level</span>: Intermediate</li>
                            <li className="font-light"><span className="font-medium">My personal rating</span>: 4/5 (very nice!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/S2Sejv2_uLU?si=_hz3GLnb2uXHP8HE"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT&apos;S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li>The second movement, although in <span className="italic">Allegretto</span> like the first, feels much slower because of very few sixteenth notes. It is also in C Major, which means very few black keys.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li>The third movement in <span className="italic">Allegro</span> will require quick fingering, especially for the sixteenth notes.</li>
                        </ul>
                    </div>
            </section>

            <ArticleDivider />

            <ArticleHeading heading="#3. Sonatina in C Major, Op. 36, No. 3" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-dcam-reg-orange text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-dcam-dark-orange rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-medium">Composed</span>: 1797</li>
                            <li className="font-light"><span className="font-medium">Pages</span>: 4</li>
                            <li className="font-light"><span className="font-medium">Key</span>: C Major</li>
                            <li className="font-light"><span className="font-medium">Movements</span>: 3 (Spiritoso, Un poco adagio, Allegro)</li>
                            <li className="font-light"><span className="font-medium">Ability Level</span>: Intermediate</li>
                            <li className="font-light"><span className="font-medium">My personal rating</span>: 4/5 (very nice!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/oR-15_4BmaQ?si=oYNz5R5gt3y901Vw"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT&apos;S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li>As usual, the second movement, in <span className="italic">Un poco adagio</span>, should me very comfortable to play even with the F# in the key signature. It is made up of mostly quarter and eighth notes.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li>The first movement is likely the most difficult one here, not only due to its tempo of <span className="italic">Spiritoso</span> but also its many two-note chords and sixteenth-note runs. A degree of technical mastery will be required here.</li>
                        </ul>
                    </div>
            </section>
            <PageBottomTrialButton />
        </main>

  )
}

export default ArticleEasyClementiSonatinas;