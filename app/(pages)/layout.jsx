import { Header } from "./components/Header"
import { Navigation } from "./components/Navigation"

export default function PagesLayout({ children }) {
    return (
        <>
            <Header />
            <Navigation />
        </>
    )
  }