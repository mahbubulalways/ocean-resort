import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Home from "./Home";
import Benefit from "./Benefit";
import Summer from "./Summer";

const Carousel = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >  <SwiperSlide>
     
     <div className="bg-[url('https://www.teahub.io/photos/full/90-905961_maldives-island-at-night-hd.jpg')] bg-cover h-[100vh] bg-no-repeat ">
        <div className="px-10 pt-28 font-semibold">
        <h1 className=" text-5xl md:text-7xl  font-serif ">World Best Resort <br /> In Wild Nature</h1>
        <p className="text-lg  text-gray-50  w-full lg:w-2/4 mt-4">Enjoying the beach and jungle greenry has  never been so easy. In our resort,you'll get our great service, friendly staff and great seaside.</p>
        {/* <button className="bg-gradient-to-r from-sky-100 to-indigo-300 mt-10 px-5 py-2 rounded-md ">Adventure</button> */}
        </div>

     </div>
      </SwiperSlide>
           <SwiperSlide>
           <div className="bg-[url('https://media.radissonhotels.net/image/radisson-blu-resort-maldives/exterior/16256-122445-f72051378_3xl.jpg?impolicy=HomeHero')] bg-cover h-[100vh] bg-no-repeat ">
           <div className="px-10 pt-28 text-white">
        <h1 className=" text-5xl  md:text-7xl font-semibold font-serif ">The Bridges At <br />  Corbet Corssing</h1>
        <p className="text-lg font-semibold   w-full lg:w-2/4 mt-4">Enjoying the beach and jungle greenry has  never been so easy. In our resort,you'll get our great service, friendly staff and great seaside.</p>
        </div>
       </div>
    
       </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[url('https://i.pinimg.com/originals/f6/4b/a3/f64ba3ed274adee99ae41abe76652075.jpg')] bg-cover h-[100vh] bg-no-repeat ">
        <div className="px-10 pt-28 font-semibold ">
        <h1 className=" text-5xl text-white md:text-7xl font-serif ">The Creeks Of  <br />  Luxury In Nature</h1>
        <p className="text-lg  w-full lg:w-2/4 mt-4 text-white">Enjoying the beach and jungle greenry has  never been so easy. In our resort,you'll get our great service, friendly staff and great seaside.</p>
        </div>
       </div>
        </SwiperSlide>
     </Swiper>
     <Home></Home>
     <Benefit></Benefit>
     <Summer></Summer>
        </div>
    );
};

export default Carousel;