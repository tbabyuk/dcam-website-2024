import { ArticleTitle } from "../../components/ArticleTitle"
import { ArticleSectionHeading } from "../../components/ArticleSectionHeading"
import { ArticleHeading } from "../../components/ArticleHeading"
import { ArticleSubheading } from "../../components/ArticleSubheading"
import { ArticleImage } from "../../components/ArticleImage"
import { PageBottomTrialButton } from "@/app/(pages)/page-content-components/PageBottomTrialButton"
import { ArticleDivider } from "../../components/ArticleDivider"
import { ArticleSectionDivider } from "../../components/ArticleSectionDivider"


export const metadata = {
    title: "How to Build a Major Scale | Da Capo Academy of Music",
    description: "Master building the major scale in any key with this simple, step-by-step guide. Includes graphics and audio!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "How to Build a Major Scale | Da Capo Academy of Music",
        description: "Master building the major scale in any key with this simple, step-by-step guide. Includes graphics and audio!",
        url: "https://dacapomusic.ca/blog/build-a-major-scale",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-04-22T17:06:57+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fmajor_scale_cover.jpg?alt=media&token=e8194246-47de-461b-bef2-8bcf93e58e9c",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const ArticleBuildAMajorScale = () => {

    return (
        <main className="text-gray-700">
            <ArticleTitle title="How to Build a Major Scale" date="April 22, 2020" />
            <ArticleImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fmajor_scale_cover.jpg?alt=media&token=e8194246-47de-461b-bef2-8bcf93e58e9c" alt="build a major scale cover"/>

            <ArticleSectionHeading heading="Introduction" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8">
                    <p className="mb-6">The major scale is one the most widely-used scales in music and certainly one that every musician should know. Like other scales, it follows a particular pattern (i.e. formula) of whole steps and half steps, which is what gives it the quality that we call &quot;major&quot;.</p>
                    <p>By the end of this article, you will be able to comfortably build a major scale starting on any key. So let&apos;s dive in!</p>
                </div>            
            </section>

            <ArticleSectionDivider />

            <ArticleHeading heading="Building a Major Scale" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-16">To build a major scale, there are two things we need to know: <span className="font-bold">the formula</span> and <span className="font-bold">the naming convention</span>. Let&apos;s look at each of these in turn.</p>
                <ArticleSubheading subheading="1. The Formula" bottom="mb-6" />
                <p className="mb-14">All major scales follow a set pattern of whole steps and half steps. As long as we stick to this pattern, we will get a major scale every single time. Here is what that pattern looks like:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fformula.png?alt=media&token=a257ef3f-e379-479c-abee-84ee27e2ff84" alt="major scale formula" className="rounded-md" />
                </figure>
                <ArticleSubheading subheading="2. The Naming Convention" bottom="mb-6" />
                <p className="mb-14">The naming convention tells us the correct way to name the notes in a scale. The rule that we need to remember here is this:</p>
                <p className="font-bold text-xl text-center mb-14">DO NOT REPEAT THE SAME LETTER NAME TWICE IN A ROW</p>
                <p>For example, if our first note is an &quot;F&quot; and we need to move up a half step, we cannot name the next note &quot;F♯&quot;, as that would be repeating the same letter name. Instead, we have to name it &quot;G♭&quot;. &quot;F♯&quot; and &quot;G♭&quot; are what we call enharmonic equivalents (two notes that share the same pitch), but when naming scale notes, only one version is correct!</p>
            </section>

            <ArticleDivider />

            <ArticleHeading heading="Putting It to Practice" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <p className="mb-20">Now that we are familiar with the formula and the naming convention when it comes to major scales, let's do a few examples.</p>
                <ArticleSubheading subheading='Example 1: "C Major Scale"' bottom="mb-6" />
                <p className="mb-14">One of the easiest scales to play and one that music students usually learn first is the <span className="font-bold">C Major</span> scale. The reason it&apos;s considered easy is because it only uses the white keys on the piano and has no sharps or flats. If we play every single white key from one &quot;C&quot; to the next &quot;C&quot;, we will discover that it fits perfectly into our major scale formula. Let&apos;s take a look:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fc_major_keyboard.PNG?alt=media&token=57fc7179-5eea-4e15-91c3-97ea9aa63dc5" alt="C major scale example" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-6">&quot;C&quot; to &quot;D&quot; gives us a whole step, &quot;D&quot; to &quot;E&quot; is another whole step, &quot;E&quot; to &quot;F&quot; is a half step, &quot;F&quot; to &quot;G&quot; is a whole step, &quot;G&quot; to &quot;A&quot; is a whole step, &quot;A&quot; to &quot;B&quot; is a whole step, and &quot;B&quot; to &quot;C&quot; is a half step. Voila - we have built the <span className="font-bold">C Major</span> scale!</p>
                <p className="mb-14">Here is what the <span className="font-bold">C Major</span> scale would look like written down on the music staff.</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fc_maj_scale.PNG?alt=media&token=17f10ce3-24ea-4c84-a4e5-77435e5d2b6b" alt="C major scale, ascending and descending" className="rounded-md" />
                    <figcaption className="text-gray-500"><small>C major scale, ascending and descending</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fc_maj_scale.mp3?alt=media&token=0deca684-6d1d-4bb5-ae2c-03a40ce07179" />
                    <figcaption className="text-gray-500"><small>Listen to the C major scale</small></figcaption>
                </figure>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <ArticleSubheading subheading='Example 2: "D Major Scale"' bottom="mb-6" />
                <p className="mb-14">Now, let&apos;s try building another major scale - <span className="font-bold">D Major</span>. This one is slightly harder as it will include some black keys. But don&apos;t let that scare you - just focus on applying our formula! Here is what <span className="font-bold">D Major</span> will look like on the piano:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fd_major_keyboard.PNG?alt=media&token=0007ee9b-2355-44ea-83b4-cc1c5675fc9e" alt="D major scale example" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-6">&quot;D&quot; to &quot;E&quot; gives us a whole step, &quot;E&quot; to &quot;F♯&quot; (not &quot;F&quot;!) gives us another whole step, &quot;F♯&quot; to &quot;G&quot; is a half step, &quot;G&quot; to &quot;A&quot; is a whole step, &quot;A&quot; to &quot;B&quot; is a whole step, &quot;B&quot; to &quot;C♯&quot; (not &quot;C&quot;!) is a whole step, &quot;C♯&quot; to &quot;D&quot; is a half step, and we&apos;re done!</p>
                <p className="mb-14">Here is what the <span className="font-bold">D Major</span> scale would look like written down on the music staff.</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fd_maj_scale.PNG?alt=media&token=057db146-7db3-4fca-8656-b7d782126bec" alt="music interval example" className="rounded-md" />
                    <figcaption className="text-gray-500"><small>D major scale, ascending and descending</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fd_maj_scale.mp3?alt=media&token=7da5a20b-cee7-4caf-a59d-919ebb0cc260" />
                    <figcaption className="text-gray-500"><small>Listen to the D major scale</small></figcaption>
                </figure>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <ArticleSubheading subheading='Example 3: "A♭ Major Scale"' bottom="mb-6" />
                <p className="mb-14">In the interest of variety and to take our knowledge one step further, let&apos;s build a scale that has some flats in it. <span className="font-bold">A♭ Major</span> is going to have four flats (including A♭) - can you figure out what they are?</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fa_flat_major_keyboard.PNG?alt=media&token=29775c2a-8ecc-4b99-85e6-1d05fa6c3a4b" alt="A flat major scale example" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-6">As we can see, the notes that make up the <span className="font-bold">A♭ Major</span> scale are &quot;A♭&quot;, &quot;B♭&quot;, &quot;C&quot;, &quot;D♭&quot;, &quot;E♭&quot;, &quot;F&quot;, &quot;G&quot;, and &quot;A♭&quot; again. Hopefully you were able to figure this out by yourself at this point!</p>
                <p className="mb-14">Written in the treble clef, the <span className="font-bold">A♭ Major</span> scale would look like this:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fa_flat_maj_scale.PNG?alt=media&token=976acf10-8693-407e-affc-056c179855b1" alt="music interval example" className="rounded-md" />
                    <figcaption className="text-gray-500"><small>A flat major scale, ascending and descending</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-major-scale%2Fa_flat_maj_scale.mp3?alt=media&token=669bae4d-e7aa-4914-9c13-708a27dec277" />
                    <figcaption className="text-gray-500"><small>Listen to the A flat major scale</small></figcaption>
                </figure>
            </section>

            <ArticleSectionDivider />
            
            <ArticleSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-6">Building a major scale isn&apos;t all that difficult as long as you remember the formula and stick to it. Although the naming convention makes no difference if you are just trying to play, it does become important when you want to write it down or be able to communicate correctly with fellow musicians. For example, if you say to someone that the scale of “D Major” has a G♭ in it, this would not be correct (as you know by now, it has an F♯). For this reason - it&apos;s well worth it to learn to name scale notes correctly from the very beginning.</p>
                <p className="leading-8">Tip: if you want to get really good and fast at playing major scales, choose any key at random and try to play a major scale starting on it. With practice, you will remember all the notes in any major scale without even having to think about the formula!</p>
            </section>
            <PageBottomTrialButton />
        </main>
    )
}

export default ArticleBuildAMajorScale;