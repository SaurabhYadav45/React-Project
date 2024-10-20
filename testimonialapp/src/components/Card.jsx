import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) =>{
    
    const review = props.review;

    return(
        <div className="bg-white flex flex-col item-center justify-center md:relative mt-7">
           <div className=" absolute top-[-7rem] z-10">
             <img src={review.image} className="w-[140px] h-[140px] aspect-square rounded-full "/>
             <div className="w-[140px] h-[140px] rounded-full top-[-6px] z-[-10] left-[10px] absolute bg-violet-500"></div>
           </div>

           <div className="text-center mt-7 capitalize text-2xl font-bold leading-3 tracking-wider">
            {review.name}
           </div>

           <div className="text-violet-300 text-sm text-center uppercase mt-4">
            {review.job}
           </div>

           <div className="text-center mt-4 text-violet-400 mx-auto">
             <FaQuoteLeft />
           </div>

           <div className="text-center mt-4 text-slate-500">
            {review.text}
           </div>
             
           <div className="text-center mt-4 text-violet-400 mx-auto">
             <FaQuoteRight />
           </div>
        </div>
    );
}


export default Card ;