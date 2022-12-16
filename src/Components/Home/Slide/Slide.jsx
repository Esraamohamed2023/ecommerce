import React, { useState } from 'react'
import"./Slide.css"
import { Sliderdata1,Sliderdata2,Sliderdata3 } from './Sliderdata'
import Sliderfun from './Sliderfun'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Spanpart from './Spanpart';


export default function Slide() {


  return (
<div>
    <div className='slide'>
<div className='container'>

<h2>Testimonials</h2>
<div className='row'>
<div className='slidetext col-md-12 col-lg-12 col-sm-12'>

 <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{Sliderdata1.map((ele)=>{return(<Sliderfun name={ele.name} img={ele.img} pr={ele.pr}/>)})}</SwiperSlide>
        <SwiperSlide>{Sliderdata2.map((ele)=>{return(<Sliderfun name={ele.name} img={ele.img} pr={ele.pr}/>)})}</SwiperSlide>
        <SwiperSlide>{Sliderdata1.map((ele)=>{return(<Sliderfun name={ele.name} img={ele.img} pr={ele.pr}/>)})}</SwiperSlide>
        
      </Swiper>
 
    
  

</div>

</div>

</div>
</div>

</div>
  )
}
