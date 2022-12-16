import React,{Fragment, useState} from 'react'
import"./Slide.css"
import { Sliderdata1, Sliderdata2 } from './Sliderdata'
import Sliderfun from './Sliderfun'
export default function Spanpart() {

const[tab,settab]=useState("Sliderdata1")

const Switchtab=(tab)=>{
settab(tab)

};
  return (
    <Fragment>

<div className='roww'>
<div className='sp'>
<span  style={{background:tab=="Sliderdata1"?"white":""}}
onClick={()=>Switchtab("Sliderdata1")} ></span>
<span style={{background:tab=="Sliderdata2"?"white":""}}
 onClick={()=>Switchtab("Sliderdata2")}></span>
<span style={{background:tab=="Sliderdata3"?"white":""}}
onClick={()=>Switchtab("Sliderdata3")}></span>
</div>
</div>
</Fragment>

  )
}
