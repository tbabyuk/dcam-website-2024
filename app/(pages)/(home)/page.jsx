import { Slider } from "./components/Slider";
import { HomeHeadingSection } from "./sections/HomeHeadingSection";
import { HomeAboutSection } from "./sections/HomeAboutSection";
import { HomeInstrumentsSection } from "./sections/HomeInstrumentsSection";
import { HomeOffersSection } from "./sections/HomeOffersSection";
import { HomeTeachersSection } from "./sections/HomeTeachersSection";
import { HomeShopSection } from "./sections/HomeShopSection";
import { HomeReviewsSection } from "./sections/HomeReviewsSection";



export default function HomePage() {
  return (
    <>
      <Slider />
      <main>
        <HomeHeadingSection />
        <HomeAboutSection />
        <HomeInstrumentsSection />
        <HomeOffersSection />
        <HomeTeachersSection />
        <HomeShopSection />
        <HomeReviewsSection />
      </main>
    </>
  );
}
