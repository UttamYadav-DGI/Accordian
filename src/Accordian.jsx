import React, { useState } from "react";
const Accordion = ({data}) => {

    const [openidx,setOpenIdx]=useState(null)

    const handleToggle=(index)=>{
        if(index==openidx) setOpenIdx(null);
        else setOpenIdx(index);
    };
  return (
    <div className="w-[400px] mx-auto my-6 border border-gray-300 rounded-lg overflow-hidden font-sans">
      {/* Item 1 */}
      { data.map((items,index)=>(
     <div key={index} className="border-b border-gray-300">

        <button onClick={()=>handleToggle(index)}  className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition" >
         {/* header */}
          {items.title}
        </button>
        { openidx==index && 
        <div className={`w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition`}>
         
            {/* content */}
            {items.content}
         
     </div>
}
     </div>
      )) }
      
      

       {/* Item 2 */}
       {/* <div className="border-b border-gray-300">
         <button onClick={()=>handleToggle(1)} className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition" >
           Services
         </button>
         <div className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out px-4 ${openidx==1 ? "max-h-40 py-3":"max-h-0 py-0"}`}>
         <ul className="py-3 list-disc list-inside">
             <li>Web Development</li>
             <li>Mobile App Development</li>
             <li>Cloud & DevOps</li>
           </ul>
         </div>
       </div>
     </div> */}
    </div>
  );
};

export default Accordion;



//2nd metod of build according using conditional rendering
// import React, { useState } from "react";

// const Accordion = () => {
//   const [openidx, setOpenIdx] = useState(null);

//   const handleToggle = (idx) => {
//     if (idx === openidx) setOpenIdx(null);
//     else setOpenIdx(idx);
//   };

//   return (
//     <div className="w-[400px] mx-auto my-6 border border-gray-300 rounded-lg overflow-hidden font-sans">
      
//       {/* Item 1 */}
//       <div className="border-b border-gray-300">
//         <button
//           onClick={() => handleToggle(0)}
//           className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition"
//         >
//           About Us
//         </button>
//         {openidx === 0 && (
//           <div className="px-4 py-3">
//             <p>We are a passionate team building innovative solutions.</p>
//           </div>
//         )}
//       </div>

//       {/* Item 2 */}
//       <div className="border-b border-gray-300">
//         <button
//           onClick={() => handleToggle(1)}
//           className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition"
//         >
//           Services
//         </button>
//         {openidx === 1 && (
//           <div className="px-4 py-3">
//             <ul className="list-disc list-inside">
//               <li>Web Development</li>
//               <li>Mobile App Development</li>
//               <li>Cloud & DevOps</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Accordion;
