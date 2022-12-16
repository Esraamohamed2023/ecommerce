import React from 'react'
import "./Header.css"
import col from"../../../Site-images/col.png"
export default function Section() {
  return (
<div>
    <section className='Number'>
<div className='container'>
<div className='row'>
<div className='col-md-3'>
<h2>1287+</h2>
<h4>SAVINGS</h4>
</div>
<div className='col-md-3'>
<h2>5786+</h2>
<h4>PHOTOS
</h4>
</div>
<div className='col-md-3'>
<h2>1440+</h2>
<h4>ROCKETS</h4>
</div>
<div className='col-md-3'>
<h2>7110+</h2>
<h4>GLOBES</h4>
</div>

</div>
</div>
</section>
<section className='prid'>
<div className='container'>
<div className='row'>

</div>
<div className='row'>
<div className='col-md-6'>
<img  src={col}/>
</div>
<div className='col-md-6 '>

<h2>We pride ourselves on making real food from the best ingredients.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
<button  onClick={()=>window.prompt("For Learning More Call Us ")}><a href='#'>Learn More</a></button>

</div>
</div>
</div>

</section>
</div>

  )
}
