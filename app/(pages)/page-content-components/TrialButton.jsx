"use client";

import { IoMusicalNotes } from "react-icons/io5";
import { FreeTrialModal } from "../../components/FreeTrialModal";
import { useRef } from "react";

export const TrialButton = () => {
    
  const freeTrialModalRef = useRef();

  return (
    <>
      <button className="btn bg-dcam-reg-green hover:bg-dcam-dark-green text-dcam-white font-medium text-[1rem]" onClick={() => freeTrialModalRef.current.showModal()} ><IoMusicalNotes size="1.1rem" />Book a Free Trial</button>
      <FreeTrialModal freeTrialModalRef={freeTrialModalRef} />
    </>
  )
}