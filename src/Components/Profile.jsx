import React from 'react';
import  { AuthContext } from './contextProvider';
import { useContext } from 'react';

const Profile = () => {
    const {users}=useContext(AuthContext)
    // const {displayName,photoURL}=users
    console.log(users);
    return (
        <div className='w-[80%] mx-auto mt-16 mb-10'>
           <div className='border-2 w-max px-3 py-3'>
           <img className='rounded-full mx-auto' src={users?.photoURL} alt="" />
            <h1 className='text-2xl font-semibold'>{users?.displayName}</h1>
            <h1 className=''>{users?.email}</h1>
           </div>
        </div>
    );
};

export default Profile;