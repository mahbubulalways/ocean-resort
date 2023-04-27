import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Carousel from "./Carousel";
import Room from "./Room";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Login from "./Login";
import SignUp from "./SignUp";
import Booking from "./Booking";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Carousel></Carousel>,
            
       
        },
        {
            path:'/rooms',
            element:<Room></Room>,
            loader:()=>fetch('rooms.json')

        },
        {
            path:'/booking',
            element:<PrivateRoute><Booking></Booking></PrivateRoute>
        },
        {
            path:'/contact',
            element:<Contact></Contact>,
        },
        {
            path:'/profile',
            element:<Profile></Profile>,
        },
        {
            path:'/sign-in',
            element:<Login></Login>
        },
        {
            path:'/sign-up',
            element:<SignUp></SignUp>,
        },
      ]
    },
  ]);

  export default router