import React from 'react'
import s1 from"../../../Site-images/s1.jpg"
import"./Slide.css"
export default function Sliderfun({img,pr,name}) {
  return (
    <div className='ccc'>
<img src={img}/>
<p>{pr}</p>
<h5>{name}</h5>
</div>
  )
}
