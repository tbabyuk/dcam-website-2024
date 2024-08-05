import { FaFileSignature } from "react-icons/fa";
import Link from "next/link";

export const RegisterButton = () => {
    
  return (
        <Link href="/register">
            <button className="btn bg-dcam-reg-green hover:bg-dcam-dark-green text-dcam-white font-medium text-[1rem]"><FaFileSignature size="1.1rem" />Register Now!</button>
        </Link>
    )
}