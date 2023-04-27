import React from 'react';
import bedPic from '../../images/image1.webp'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='bg-gray-800 mt-10 pt-16'>
            <h1 className='text-5xl font-semibold font-serif text-white text-center'>A truly luxurious experience <br /> for the senses</h1>
            <div className='w-[90%] mx-auto bg-white flex gap-4 flex-col-reverse md:flex-row items-center rounded-t-md mt-12'>
                <div className='w-full py-5 md:py-0'>
                <div className='bg-slate-200 rounded-xl  space-y-5  p-12 mb-8'>
                <h1 className='text-4xl md:text-5xl  font-semibold'>  We Invite guests <br /> to  celebrate life</h1>
                <p>Imagine a utopia where all of your wishes are granted and all of your desires are satisfied. From our magnificent private beach to our sophisticated palatial house, Bluebell offers unrivalled  luxury. In this luxurious getaway, no expense has been spared. Our 8,000 square foot contemporary luxury estate can accommodate up to 20 guests. From the grandness of the Great Room to the customised tranquillity of each suite, there's something for everyone.</p>
                
                </div>
                <p className='bg-red-600 px-5 py-3 ml-5 text-white rounded-full w-max'> <Link>Learn More</Link></p>
                </div>
                <div>
                <img className='w-full rounded-tr-md' src={bedPic} alt="" />
            </div>
            </div>
           
           
        </div>
    );
};

export default Home;