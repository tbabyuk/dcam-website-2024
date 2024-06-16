import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Slider } from "./components/Slider"




export default function PagesLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            <Slider />
        </>
    )
  }