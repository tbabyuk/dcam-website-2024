import Image from "next/image";
import { Slider } from "../components/Slider";
import { HomeHeadingSection } from "../components/HomeHeadingSection";
import { HomeAboutSection } from "../components/HomeAboutSection";
import { HomeInstrumentsSection } from "../components/HomeInstrumentsSection";



export default function HomePage() {
  return (
    <>
      <Slider />
      <main>
        <HomeHeadingSection />
        <HomeAboutSection />
        <HomeInstrumentsSection />
      </main>
    </>
  );
}
