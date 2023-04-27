import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomDetails from './RoomDetails';
import { useState } from 'react';
import Marquee from "react-fast-marquee";

const Room = () => {
    const allRooms = useLoaderData()
    const sliceRoom=allRooms.slice(0,6)
    const [rooms,setRooms]=useState(sliceRoom)
    const [show,setShow]=useState(true)
    const handleShowAll=()=>{
        setRooms(allRooms)
        setShow(false)
    }
    return (
        <div className='bg-gray-800 py-14'>
            <div className=' w-[90%] mx-auto'>
           <div className='flex items-center'>
            <p className='bg-red-600 px-8 py-3 text-white  rounded-tl-md rounded-bl-md w-max'>Offer</p>
           <Marquee className='text-white bg-gray-600 py-3 rounded-tr-md rounded-br-md' speed={100}>
           Minimum night deals can be applied best when there is a concert or any event at or around your property. And, if you have upcoming gatherings, you can apply the maximum night deals when your guests book a few days prior to those gatherings. 
          </Marquee>
           </div>
                <div className='mt-10'>
                    <div>
                        <div className=' border-x-2 px-8 py-5 border-white w-max mx-auto'>
                            <h1 className='text-white text-xl font-thin'>ACCOMODATION</h1>
                        </div>
                        <h1 className='text-5xl font-semibold mt-5 font-serif text-white'>Room / Suits</h1>
                    </div>
                    <div>
                        <p className='text-lg text-white font-semibold mt-5'>Our hotel offers 30 double, and 5 single rooms
                            as well as 36 suites and junior suites.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                    {rooms.map(room => <RoomDetails
                        room={room}
                        key={room.id}
                    ></RoomDetails>
                    )}
                </div>
                  <div className='text-center mt-5'>
                   {
                    show &&
                    <button onClick={handleShowAll} className='bg-blue-600 px-10 py-3 text-white rounded-full w-max'>See More Rooms</button>
                   }
                </div>
            </div>
        </div>
    );
};

export default Room;