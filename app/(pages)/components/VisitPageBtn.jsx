import Link from "next/link"



export const VisitPageBtn = ({text, link}) => {

  return (
    <Link href={link}><button className="visit-page-btn">{text}</button></Link>
  )
}