import React, { useContext } from 'react';
import { AuthContext } from './contextProvider';
import google from '../../images/google.png'
const Social = () => {
    const {handleGoogle}=useContext(AuthContext)
    const googleLogin=()=>{
        handleGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className=' border-2 mt-3 w-max mx-auto px-4 py-1 rounded-md'>
            <div onClick={googleLogin} className='flex items-center gap-2 cursor-pointer'>
            <img className='w-8' src={google} alt="" />
            <p className='text-white text-lg'>Continue with google</p>
            </div>
        </div>
    );
};

export default Social;