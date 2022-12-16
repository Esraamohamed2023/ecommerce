import React, { Fragment } from 'react'
import Foodfun from './Foodfun'
import { Ourdata } from './Ourdata'
import "./Food.css"
import"./Ourfoods.css"

export default function Ourfoods() {
  return (
<Fragment>
    <section id="ord" className='frt'>
      <div className='container'>
<div className='row'>
<div className='col-lg-12 col-md-12'>
<h2>explor our foods</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit <br/>
amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia<br/> and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
</div>
</div>
</div>
    </section>
<section  for id="#ord"className='sct'>
<div className='container'>
<div className='row'>

{Ourdata.map((ele)=>{
return(<div className='col-md-4 ggg' key={ele.id}>
<Foodfun img={ele.img}  num3={ele.num3}
num={ele.num} num2={ele.num2} title={ele.title}/></div>)}
  )


}



</div>

</div>

</section>
</Fragment>
  )
}
