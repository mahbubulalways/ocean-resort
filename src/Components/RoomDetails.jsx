import React from 'react';
import { Link } from 'react-router-dom';

const RoomDetails = ({room}) => {
    return (
        <div>
             <div className='border-2 rounded-md '>
                    <img className='h-80 mx-auto' src={room.image} alt="" />
                    <div className='text-white py-5 px-8 space-y-2'>
                    <h1 className='text-2xl font-serif'>{room.name}</h1>
                    <h1>{room.price}</h1>
                    <Link to='/booking'><button className='bg-red-600 px-10 py-3 text-white rounded-full w-max mt-3'>Booking</button></Link>
                    </div>


                </div>
        </div>
    );
};

export default RoomDetails;