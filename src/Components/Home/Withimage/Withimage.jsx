import React, { Fragment } from 'react'
import collect from"../../../Site-images/collect.png"
import"./With.css"

export default function Withimage() {
  return (
<Fragment>
    <section>
<div className='container'>
<div className='row'>
<div className='col-md-6'>
<h2>We make everything by hand with the best possible ingredients.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
 Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
there live the blind texts.</p>
<ul>
<li>Etiam sed dolor ac diam volutpat.</li>
<li> Erat volutpat aliquet imperdiet.</li>
<li>purus a odio finibus bibendum.</li>
</ul>
<button  onClick={()=>window.prompt("For Learning More Call Us ")}><a href="#">Learn More</a></button>
</div>
<div className='col-md-6'>
<img src={collect}/>
</div>
</div>

</div>
      
    </section>
<section className='plx'>
<div className='container'>
<div className='row'>
<div className='col-lg-12'>
<h2>When a man's stomach is full it makes no
difference whether he is rich or poor.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Etiam et purus a odio<br/>
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
<h5><a href='#'>Watch Our Stroy</a></h5>


</div>
</div>
</div>

</section>
</Fragment>

  )
}
