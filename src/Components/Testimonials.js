import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight} from "react-icons/fi"

function Testimonials({reviews}) {

    const[index, setIndex] = useState(0);

    function leftShiftHandler() {
      if(index - 1 <0){
        setIndex(reviews.length - 1)
      }
      else{
        setIndex(index - 1)
      }
    }

    function rightShiftHandler() {
    if( index + 1 >= reviews.length){
        setIndex(0)
    }
    else{
        setIndex(index + 1)
    }
    }

    function surpriseHandler() {
      let randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
      <Card review={reviews[index]}></Card>

      <div className='flex mt-9 gap-3 text-3xl font-bold text-violet-400 mx-auto'>
      <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'><FiChevronLeft /></button>
      <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'><FiChevronRight /></button>
    </div>

    <div className='mt-6'>
    <button onClick={surpriseHandler} className='font-bold bg-violet-400 hover:bg-violet-500 rounded-md cursor-pointer transition-all duration-200 px-10 py-2 text-lg text-white'>Surprise Me</button>
    </div>
    
    </div>
  )
}

export default Testimonials
