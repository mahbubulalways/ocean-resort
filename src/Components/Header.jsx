import React, { useContext, useState } from 'react';
import icon from '../../images/icon.png'
import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { AuthContext } from './contextProvider';
const Header = () => {
    const {users,handleSignOut}=useContext(AuthContext)
    const [bar, setBar] = useState(false)
    const handleOut=()=>{
        handleSignOut()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='bg-gray-50 sticky top-0 z-10'>
            <div className=' w-[80%] mx-auto py-5 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={icon} alt="" />
                    <h1 className='text-3xl font-semibold font-serif'>Ocean<span className='text-blue-600'>Hotel</span></h1>
                </div>
                <div className='hidden lg:block'>
                <div className='space-x-2  text-lg flex'>
                    <NavLink

                        to="/"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "blue" : "black",
                            };
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink

                        to="/rooms"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "blue" : "black",
                            };
                        }}
                    >
                        Rooms
                    </NavLink>
                    <NavLink

                        to="/booking"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "blue" : "black",
                            };
                        }}
                    >
                       Booking
                    </NavLink>
                    <NavLink

                        to="/contact"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "blue" : "black",
                            };
                        }}
                    >
                        Contact
                    </NavLink>
                    {
                        users ? <span className=' space-x-2'>
                            <Link to='/profile'>Profile</Link>
                            <Link onClick={handleOut}>Sign out</Link>
                        </span> :
                        <div className='flex gap-2'>
                            <NavLink

to="/sign-in"
style={({ isActive }) => {
    return {
        color: isActive ? "blue" : "black",
    };
}}
>
Sign in
</NavLink>
<NavLink

to="/sign-up"
style={({ isActive }) => {
    return {
        color: isActive ? "blue" : "black",
    };
}}
>
Sign up
</NavLink>
                        </div>
                    }
                </div>
                </div>
                <div className='block lg:hidden' >
                    <span onClick={() => setBar(!bar)}>
                        {bar ? <XMarkIcon className="h-8 w-8 text-blue-500" />: <Bars3Icon className="h-8 w-8 text-blue-500" />}
                    </span>
                </div>

            </div>
            <span onClick={() => setBar(!bar)}>
                {<div className={`grid grid-cols-1 w-2/3 text-lg pl-10 absolute  border-2 border-b-slate-300  duration-500 py-10 space-y-5 pr-4 bg-violet-100 lg:hidden sm:block  ${bar ? 'left-0' : '-left-full'}`} >
                    <Link className='hover:bg-orange-400 px-3 py-1 rounded-md' to='/'>Home</Link>
                    <Link className='hover:bg-orange-400 px-3 py-1 rounded-md' to='/rooms'>Rooms</Link>
                    <Link className='hover:bg-orange-400 px-3 py-1 rounded-md' to='/Booking'>Booking</Link>
                    <Link className='hover:bg-orange-400 px-3 py-1 rounded-md' to='/Contact'>Contact</Link>
                    {
                        users ? <span className='flex flex-col pl-3 gap-4'>
                        <Link to='/profile'>Profile</Link>
                        <Link onClick={handleOut}>Sign out</Link>
                    </span> : <span className='flex flex-col gap-4'>
                            <Link className='hover:bg-orange-400 px-3 py-1 rounded-md' to='/sign-in'>Sign in</Link>
                            <Link className='hover:bg-orange-400 px-3 py-1 rounded-md' to='/sign-up'>Sign up</Link>
                        </span>
                    }
                    
                </div>}
            </span>
        </div>
    );
};

export default Header;