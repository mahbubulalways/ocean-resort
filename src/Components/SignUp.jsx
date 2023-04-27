import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './contextProvider';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2'
import Social from './Social';
const SignUp = () => {
    const {createUser,handleUpdate}=useContext(AuthContext)

    const [email,setEmail]=useState('')
    const [file,setFile]=useState(null)
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [name,setName]=useState('')
    const [error,setError]=useState('')
    console.log(name);
    const handlePassword=(event)=>{
        const inputPassword=event.target.value

        if(inputPassword.length <8){
            setError('Password must be 8 characters')
            return
        }
        else{
            setError('')
        }

        setPassword(inputPassword)
     
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        event.target.reset()
        if(password !== confirmPassword){
            Swal.fire({
                icon: 'error',
                title: 'Sorry',
                text: "Password don't match...!",
               
              })
              return
        }
        
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            handleUpdate(result.user,name,file)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='bg-blue-300'>
           <div className="hero  ">
<div className="hero-content flex-col ">
<div>
  <h1 className="text-4xl font-semibold">Please create your account</h1>
</div>
<div className="card  w-full  shadow-2xl bg-black mt-2 px-5">
  <form onSubmit={handleSubmit}  className="card-body ">
    <div className="form-control">
      <label className="label">
        <span className="label-text  text-white text-lg">Name</span>
      </label>
      <input
      onChange={(event)=>setName(event.target.value)}
      type="text" placeholder="name" name='name' className="input input-bordered" required/>
    </div>
    {/* <div>
    <input
    onChange={(event)=>setFile(event.target.value)}
    type="file" name='file' className="file-input w-full max-w-xs" />
    </div> */}
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white text-lg">Email</span>
      </label>
      <input
         onChange={(event)=>setEmail(event.target.value)}
      type="email" name='email' placeholder="email" className="input input-bordered " required/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white text-lg">Password</span>
      </label>
      <input
         onChange={handlePassword}
      type="password" name='password' placeholder="password" className="input input-bordered" required/>
      <span>
        {error && <span className='flex gap-2 items-center mt-2'>
        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
        <p className='text-red-600 '>{error}</p>
        </span>
        }
      </span>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white text-lg">Confirm password</span>
      </label>
      <input
          onChange={(event)=>setConfirmPassword(event.target.value)}
      type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required/>

    </div>
   
    <div className="form-control mt-6">
      <button className="bg-blue-600 px-5 py-2 rounded-md text-white hover:bg-blue-700">Sign up</button>
      <Social></Social>
      <p className='text-white mt-2'><small>Already have an account please <Link to='/sign-in'><span className='text-blue-600 cursor-pointer'>Sign in</span></Link> </small></p>
    </div>
    
  </form>

</div>
</div>
</div>  
        </div>
    );
};

export default SignUp;