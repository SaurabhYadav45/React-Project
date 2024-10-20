
import Card from './Card';
import React, {useState} from 'react';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testimonial = (props) =>{

    const reviews = props.reviews;
    const[index, setIndex] = useState(0);

    function leftShiftHandler (){
        if(index-1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
           let randomIndex = Math.floor(Math.random() * reviews.length);
           setIndex(randomIndex);
    }
    return(
        <div className='w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md  '>
           <Card review ={reviews[index]}></Card>
           <div className='text-violet-400 font-bold text-center  text-3xl mt-5 gap-3 '>
            <button className="cursor-pointer hover:text-violet-500" onClick={leftShiftHandler}>
                <FiChevronLeft/>
            </button>

            <button className="cursor-pointer hover:text-violet-500" onClick={rightShiftHandler}>
                <FiChevronRight/>
            </button>
           </div>

           <div className='mt-6'>
            <button className='px-10 py-2 font-bold bg-violet-400 hover:bg-violet-500 text-white text-lg rounded-md transition-all duration-200 cursor-pointer' onClick={surpriseHandler}>Surprise Me</button>
           </div>
        </div>
    );
}



export default Testimonial;