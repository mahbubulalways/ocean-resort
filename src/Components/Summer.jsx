import React from 'react';
import Lottie from "lottie-react"
import logo  from '../assets/87179-50-discount.json'
const Summer = () => {
    return (
        <div className=''>
            <div className="bg-[url('https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.hLLejHeUro/v1/-1x-1.jpg')] bg-cover h-[100vh] bg-no-repeat">
            <div className='p-12  '>
            
                <div className=' px-2 py-2 flex justify-end '>
               
                    <div className='text-white lg:text-black space-y-5'>
                    <div className=' border-x-2 px-8 py-5 border-white lg:border-black w-max mx-auto'>
                            <h1 className=' text-xl'>OUR OFFER</h1>
                        </div>
                    <h1 className='text-5xl md:text-7xl font-serif'>Summer Offer</h1>
                    <p className='text-lg font-semibold'>Benefit from a 10% discount, making your reservations with a  minimum of 3 days in advance</p>
                    <button className='bg-red-600 px-10 py-3 text-white rounded-full w-max  cursor-pointer'>Book Now</button>
                    
         </div>
  </div>
  <Lottie className='w-40 mt-10 ' animationData={logo} loop={true} />
                </div>
        
             </div>
        </div>
    );
};

export default Summer;