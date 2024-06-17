import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Slider } from "./components/Slider"
import { HomeHeadingSection } from "./components/HomeHeadingSection"



export default function PagesLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            {children}
        </>
    )
  }