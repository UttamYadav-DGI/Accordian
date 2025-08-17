import React from "react";
import Accordian from "./Accordian";
import accordionData from "./AccordianData";

const Test=()=>{
  return(
    <>
    <h2 className="bg-amber-400 text-5xl text-center m-5" >radhe shyam</h2>
    <Accordian data={accordionData} />
    </>
  )
}
export default Test;