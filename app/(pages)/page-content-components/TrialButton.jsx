"use client";

import { FaFileSignature } from "react-icons/fa";
import { FreeTrialModal } from "../../components/FreeTrialModal";
import { useRef } from "react";

export const TrialButton = () => {
    
  const freeTrialModalRef = useRef();

  return (
    <>
      <button className="btn bg-dcam-reg-green hover:bg-dcam-dark-green text-dcam-white font-medium text-[1rem]" onClick={() => freeTrialModalRef.current.showModal()} ><FaFileSignature size="1.1rem" />Register for Lessons</button>
      <FreeTrialModal freeTrialModalRef={freeTrialModalRef} />
    </>
  )
}