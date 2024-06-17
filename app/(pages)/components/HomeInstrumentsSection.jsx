import { InstrumentsSlider } from "../sub-components/InstrumentsSlider"
import { HomeSectionHeading } from "../sub-components/HomeSectionHeading"



export const HomeInstrumentsSection = () => {
  
  return (
    <section className="xl:px-28 py-20 bg-white">
        <HomeSectionHeading title="INSTRUMENTS" textColor="text-dcam-orange" />
        <InstrumentsSlider />
    </section>
  )
}