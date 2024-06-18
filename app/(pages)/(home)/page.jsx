import { Slider } from "./components/Slider";
import { HomeHeadingSection } from "./sections/HomeHeadingSection";
import { HomeAboutSection } from "./sections/HomeAboutSection";
import { HomeInstrumentsSection } from "./sections/HomeInstrumentsSection";
import { HomeOffersSection } from "./sections/HomeOffersSection";
import { HomeTeachersSection } from "./sections/HomeTeachersSection";



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
      </main>
    </>
  );
}
