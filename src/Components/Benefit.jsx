import React from 'react';
import { WifiIcon,TvIcon} from '@heroicons/react/24/solid'
import { FaCar,FaSwimmingPool,FaCoffee,FaBath } from 'react-icons/fa';
const Benefit = () => {
    return (
        <div className='bg-gray-800 pb-14'>
            <div className='bg-white w-[90%] mx-auto rounded-bl-md rounded-br-md pt-32'>
                <div className=' border-x-2 px-12 py-5 border-red-600 w-max mx-auto'>
                <h1 className='text-red-600 text-xl font-thin'>AMENITIES</h1>
                </div>

                <div >
                    <h1 className='text-5xl font-serif  text-center mt-10 text-gray-900 font-semibold'>Make Your Stay Memorable</h1>
                   <div className='grid grid-cols-2 md:grid-cols-3 w-[90%] mx-auto gap-12 mt-12 py-10'>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                    <WifiIcon className="h-20 w-20 text-gray-900" />
                    <div>
                        <h1 className='text-xl text-gray-800'>High Speed Wifi</h1>
                        <p>With our service you may enjoy the finest life in our resort.</p>
                    </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                    <FaCar className="h-20 w-20 text-gray-900" />
                    <div>
                        <h1 className='text-xl font-semibold text-gray-800'>Pick & Drop Facility</h1>
                        <p>With our service you may enjoy the finest life in our resort.</p>
                    </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                    <TvIcon className="h-20 w-20 text-gray-900" />
                    <div>
                        <h1 className='text-xl font-semibold text-gray-800'>Smart TV</h1>
                        <p>With our service you may enjoy the finest life in our resort.</p>
                    </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                    <FaSwimmingPool className="h-20 w-20 text-gray-900" />
                    <div>
                        <h1 className='text-xl font-semibold text-gray-800'>Swimming Poo</h1>
                        <p>With our service you may enjoy the finest life in our resort.</p>
                    </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                    <FaCoffee className="h-20 w-20 text-gray-900" />
                    <div>
                        <h1 className='text-xl text-gray-800 font-semibold'>Breakfast Included</h1>
                        <p>With our service you may enjoy the finest life in our resort.</p>
                    </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                    <FaBath className="h-20 w-20 text-gray-900" />
                    <div>
                        <h1 className='text-xl text-gray-800 font-semibold'>Shower Bathtub</h1>
                        <p>With our service you may enjoy the finest life in our resort.</p>
                    </div>
                    </div>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default Benefit;