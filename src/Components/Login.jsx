import React, { useContext } from 'react';
import { AuthContext } from './contextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from './Social';

const Login = () => {
    const {user,SignInUser}=useContext(AuthContext)
    const navigate =useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    navigate(from ,{replace:true})
    const handleSignIn=(event)=>{
    event.preventDefault()
   
    const form=event.target
    const email=form.email.value
    const password=form.password.value
      SignInUser(email,password)
      .then(result=>{
        // console.log(result.user);
      })
      .catch(error=>{
        // console.log(error.message);
      })
    }
    return (
<div className=' bg-blue-300'>
           <div className=" hero ">
<div className="hero-content flex-col ">
<div>
  <h1 className="text-4xl font-semibold">Please Sign in your account</h1>
</div>
<div className="card  w-full  shadow-2xl bg-black mt-2 px-5">
  <form onSubmit={handleSignIn}   className="card-body ">
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white text-lg">Email</span>
      </label>
      <input
   
      type="email" name='email' placeholder="email" className="input input-bordered " required/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white text-lg">Password</span>
      </label>
      <input
 
      type="password" name='password' placeholder="password" className="input input-bordered" required/>
    </div>
   
    <div className="form-control mt-6">
      <button className="bg-blue-600 px-5 py-2 rounded-md text-white hover:bg-blue-700">Sign in</button>
      <Social></Social>
      <p className='text-white mt-2'><small>Already have an account please <Link to='/sign-up'><span className='text-blue-600 cursor-pointer'>Sign in</span></Link> </small></p>
    </div>
    
  </form>

</div>
</div>
</div>  
        </div>
    );
};

export default Login;