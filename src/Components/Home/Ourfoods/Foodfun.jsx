import React from 'react'
import fr from"../../../Site-images/fr.jpg"
import "./Food.css"
export default function Foodfun({img,title,num,num2,num3}) {
  return (
    <div className='ffun '>
<div className=' cont '>     
 <img src={img} />
<h4>{title}</h4>
<h5>{num}</h5>
<h3>{num2}<del>{num3}</del></h3>
<hr/>
<button onClick={()=>window.open("/order","_blank","top=200,left=300,width=500,height=520" )}><a href='#ordnow'>Order Now</a></button></div>

    </div>
  )
}
