import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"



export default function PagesLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            {children}
        </>
    )
  }