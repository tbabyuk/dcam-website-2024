import Link from "next/link"
import { ArticleTitle } from "../../components/ArticleTitle"
import { ArticleSectionHeading } from "../../components/ArticleSectionHeading"
import { ArticleHeading } from "../../components/ArticleHeading"
import { ArticleSubheading } from "../../components/ArticleSubheading"
import { ArticleSubheadingRed } from "../../components/ArticleSubheadingRed"
import { ArticleImage } from "../../components/ArticleImage"
import { PageBottomTrialButton } from "@/app/(pages)/page-content-components/PageBottomTrialButton"
import { ArticleDivider } from "../../components/ArticleDivider"
import { ArticleSectionDivider } from "../../components/ArticleSectionDivider"


export const metadata = {
    title: "How to Build a Natural Minor Scale | Da Capo Academy of Music",
    description: "Master building the natural minor scale in any key with this simple, step-by-step guide. Includes graphics and audio!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "How to Build a Natural Minor Scale | Da Capo Academy of Music",
        description: "Master building the natural minor scale in any key with this simple, step-by-step guide. Includes graphics and audio!",
        url: "https://dacapomusic.ca/blog/build-a-natural-minor-scale",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-04-27T18:30:49+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fbuild_a_natural_minor_scale_cover.jpg?alt=media&token=acfa8f78-d054-4b3e-a3e1-bee7a642750f",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const ArticleBuildANaturalMinorScale = () => {

  return (
        <main className="text-gray-600">
            <ArticleTitle title="How to Build a Natural Minor Scale" date="April 27, 2020" />
            <ArticleImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fbuild_a_natural_minor_scale_cover.jpg?alt=media&token=acfa8f78-d054-4b3e-a3e1-bee7a642750f" alt="build a natural minor scale cover"/>

            <ArticleSectionHeading heading="Introduction" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8">
                    <p className="mb-6">The <span className="font-bold">natural minor scale</span> is one of three main types of minor scales (the others being the <Link href="/build-a-harmonic-minor-scale" target="_blank" className="dcam-link">harmonic minor</Link> and <Link href="/build-a-melodic-minor-scale" target="_blank" className="dcam-link">melodic minor</Link>). Although not as common as the other two, it is extremely useful to know, at the very least because it provides the basis for deriving the other two minor scales. The natural minor scale follows a particular pattern of whole steps and half steps (formula) which gives it the quality that we refer to as &quot;natural minor&quot;.</p>
                    <p>By the end of this article, you should be comfortable building a natural minor scale from any note!</p>
                </div>            
            </section>

            <ArticleSectionDivider />

            <ArticleHeading heading="Building a Natural Minor Scale" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-16">We can build a natural minor scale in one of two ways: using a <span className="font-bold">formula</span> (pattern of whole steps and half steps) or using its <span className="font-bold">relative major scale</span>. Let&apos;s take a look at each of these methods in turn.</p>
                <ArticleSubheading subheading="Method #1: The Formula" bottom="mb-6" />
                <p className="mb-14">All scales follow a specific pattern of whole steps and/or half steps (a formula), and the natural minor scale is no exception. The &quot;formula&quot; for the natural minor scale looks like this:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fnatural_minor_formula.PNG?alt=media&token=67891dce-9296-44ed-ba4c-ceb5ec3b8ee0" alt="natural minor scale formula" className="rounded-md" />
                </figure>
                <ArticleSubheading subheading="Method #2: The Relative Major Scale" bottom="mb-6" />
                <p className="mb-6">As you might know from music theory, every minor scale has what we call a &quot;relative major&quot; scale associated with it. <span className="font-bold">These two scales will always share the same key signature</span>. This means that as long as we know the key signatures of our major scales well, it will be exactly the same for their relative minor scales!</p>
                <p>If this sounds unclear or complicated at the moment, don&apos;t worry! We will work through several examples together below.</p>
            </section>

            <ArticleDivider />

            <ArticleHeading heading="Putting It to Practice" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <ArticleSubheadingRed subheading='Example 1: Building "A Natural Minor Scale"' bottom="mb-12" />
                <ArticleSubheading subheading="1. Using the Formula" bottom="mb-6" />
                <p className="mb-14">For our first task, let&apos;s build the <span className="font-bold">A Natural Minor</span> scale. Starting from the note &quot;A&quot;, let&apos;s begin applying our formula:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fa_nat_min_by_formula.PNG?alt=media&token=6f7d036f-efe7-47ea-ae60-e01863b248ce" alt="A natural minor scale using formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-6">&quot;A&quot; to &quot;B&quot; gives us a whole step, &quot;B&quot; to &quot;C&quot; is a half step, &quot;C&quot; to &quot;D&quot; is a whole step, &quot;D&quot; to &quot;E&quot; is a whole step, &quot;E&quot; to &quot;F&quot; is a half step, &quot;F&quot; to &quot;G&quot; is a whole step, and &quot;G&quot; to &quot;A&quot; is a whole step. This means that the <span className="font-bold">A Natural Minor</span> scale is made up of the notes &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot;, &quot;F&quot;, &quot;G&quot;, and (repeated) &quot;A&quot;.</p>
                <p className="mb-20">As we can see, this scale only uses the white keys on the piano, which makes it very beginner-friendly to learn and play.</p>

                <ArticleSubheading subheading="2. Using the Relative Major Scale" bottom="mb-6" />
                <p className="mb-10">Now, let&apos;s build the same scale using the &quot;Relative Major Scale&quot; method. There are two steps to this process.</p>
                <p className="font-bold mb-6">Step 1: Find the relative major of A Minor</p>
                <p className="mb-14">The quickest way to find the relative major of any minor key is to simply count up 3 half steps.</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Frel_maj_of_a_min.PNG?alt=media&token=b2b2aa61-9e45-49fe-8e1c-a704127f1ddf" alt="finding relative major of A minor" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-20">Counting 3 half steps from &quot;A&quot; brings us to &quot;C&quot;, which means <span className="font-bold">C Major</span> is the relative major of <span className="font-bold">A Minor</span>.</p>
                <p className="font-bold mb-6">Step 2: Apply the key signature of the relative major scale to the natural minor scale</p>
                <p className="mb-14">Remember that natural minor scales use the same key signature as their relative majors. Because <span className="font-bold">C Major</span> has no sharps or flats, the <span className="font-bold">A Natural Minor</span> doesn&apos;t either. So, our result looks like this:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fa_nat_min_by_rel_maj.PNG?alt=media&token=1f8c39b3-26bd-4e38-9a5f-24561cf7317b" alt="A natural minor scale (keyboard)" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-14">Here is what the <span className="font-bold">A Natural Minor</span> scale looks like written down on the music staff:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fa_nat_min_staff.PNG?alt=media&token=d5375934-e1d0-4af8-9460-3376365b6bc3" alt="A natural minor scale on the staff" className="rounded-md" />
                    <figcaption className="text-gray-500"><small>A natural minor scale, ascending and descending</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fa_nat_min_audio.mp3?alt=media&token=a3084639-58ec-4c5e-b050-ecf80039aefc" />
                    <figcaption className="text-gray-500"><small>Listen to the A natural minor scale</small></figcaption>
                </figure>

                <ArticleSubheadingRed subheading='Example 2: "D Natural Minor Scale"' bottom="mb-12" />
                <ArticleSubheading subheading="1. Using the Formula" bottom="mb-6" />
                <p className="mb-14">Let&apos;s apply our formula pattern starting from D:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fd_nat_min_by_formula.PNG?alt=media&token=dcc13093-f047-4977-a480-7ac72db2d4f3" alt="D natural minor scale using the formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-20">&quot;D&quot; to &quot;E&quot; gives us a whole step, &quot;E&quot; to &quot;F&quot; gives us a half step, &quot;F&quot; to &quot;G&quot; is a whole step, &quot;G&quot; to &quot;A&quot; is a whole step, &quot;A&quot; to &quot;B♭&quot; is a half step, &quot;B♭&quot; to &quot;C&quot; is a whole step, and &quot;C&quot; to &quot;D&quot; is a whole step. Therefore, <span className="font-bold">D Natural Minor</span> is made up of &quot;D&quot;, &quot;E&quot;, &quot;F&quot;, &quot;G&quot;, &quot;A&quot;, &quot;B♭&quot;, &quot;C&quot;, and &quot;D&quot;.</p>

                <ArticleSubheading subheading="2. Using the Relative Major Scale" bottom="mb-6" />
                <p className="font-bold mb-14">Step 1: Find the relative major of D Minor</p>
                <figure className="flex-shrink-0 flex justify-center mb-20">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Frel_maj_of_d_min.PNG?alt=media&token=e69f04ba-7e1f-454c-af10-41652a5de42a" alt="finding relative major of D minor" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="font-bold mb-6">Step 2: Apply the key signature of the relative major scale to the natural minor scale</p>
                <p className="mb-14">The relative major of D Minor turns out to be <span className="font-bold">F Major</span>. F Major has one flat in its key signature, which is a B♭. Therefore, <span className="font-bold">D Natural Minor</span> will also have a B♭.</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fd_nat_min_by_rel_maj.PNG?alt=media&token=f6f6ed21-fc5c-4c52-899c-19145824620a" alt="D natural minor scale (keyboard)" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-14">Here is what the <span className="font-bold">D Natural Minor</span> scale looks like written down on the music staff:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fd_nat_min_staff.PNG?alt=media&token=fffea4c1-5a1c-442f-b951-91cb8e0fec7b" alt="D natural minor scale on the staff" className="rounded-md" />
                    <figcaption className="text-gray-500"><small>D natural minor scale, ascending and descending</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fd_nat_min_audio.mp3?alt=media&token=d2a5a6c7-b510-4d84-91e7-1b3afce7df05" />
                    <figcaption className="text-gray-500"><small>Listen to the D natural minor scale</small></figcaption>
                </figure>

                <ArticleSubheadingRed subheading='Example 3: "C Sharp Natural Minor Scale"' bottom="mb-6" />
                <p className="mb-12">Let&apos;s end with a more complex example, just for practice.</p>
                <ArticleSubheading subheading="1. Using the Formula" bottom="mb-14" />
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fc_sharp_nat_min_by_formula.PNG?alt=media&token=8cf5d6f2-7185-460c-a5ed-fc6d36ad07a3" alt="C sharp natural minor scale using the formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-20"><span className="font-bold">C♯ Natural Minor</span> is made up of &quot;C♯&quot;, &quot;D♯&quot;, &quot;E&quot;, &quot;F♯&quot;, &quot;G♯&quot;, &quot;A&quot;, &quot;B&quot;, and &quot;C♯&quot;.</p>

                <ArticleSubheading subheading="2. Using the Relative Major Scale" bottom="mb-6" />
                <p className="font-bold mb-14">Step 1: Find the relative major of C# Minor</p>
                <figure className="flex-shrink-0 flex justify-center mb-20">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Frel_maj_of_c_sharp_min.PNG?alt=media&token=d907a8c9-541b-440a-aea3-120411b29206" alt="finding relative major of C sharp minor" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="font-bold mb-6">Step 2: Apply the key signature of the relative major scale to the natural minor scale</p>
                <p className="mb-14"><span className="font-bold">E Major</span> has 4 sharps in its key signature: &quot;F♯&quot;, &quot;C♯&quot;, &quot;G♯&quot;, and &quot;D♯&quot;. Applying these to the natural minor gives us:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fc_sharp_min_by_rel_maj.PNG?alt=media&token=496fc927-fc36-425c-bc23-108248a43054" alt="D natural minor scale (keyboard)" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-14">Here is what the <span className="font-bold">C♯ Natural Minor</span> scale looks like written down on the music staff:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fc_sharp_nat_min_staff.PNG?alt=media&token=553ac651-23de-471f-ac42-2ebc280d4f83" alt="C sharp natural minor scale on the staff" className="rounded-md" />
                    <figcaption className="text-gray-500"><small>C sharp harmonic minor scale, ascending and descending</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-natural-minor-scale%2Fd_nat_min_audio.mp3?alt=media&token=d2a5a6c7-b510-4d84-91e7-1b3afce7df05" />
                    <figcaption className="text-gray-500"><small>Listen to the C sharp natural minor scale</small></figcaption>
                </figure>
            </section>

            <ArticleSectionDivider />
            
            <ArticleSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8">Hopefully you now have a solid understanding of how to build the Natural Minor Scale. As mentioned earlier, this scale forms the basis for building the harmonic and melodic minor scales, so knowing it well will serve you well in your musical journey. Best of luck!</p>
            </section>
            <PageBottomTrialButton />
        </main>
    )
}

export default ArticleBuildANaturalMinorScale;