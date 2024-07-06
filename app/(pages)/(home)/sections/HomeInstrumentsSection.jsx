import { HomeSectionHeading } from "../components/HomeSectionHeading"
import { InstrumentsSlider } from "../components/InstrumentsSlider"


export const HomeInstrumentsSection = () => {
  
  return (
    <section className="xl:px-28 py-20">
        <HomeSectionHeading title="INSTRUMENTS" textColor="text-dcam-reg-orange" />
        <InstrumentsSlider />
    </section>
  )
}