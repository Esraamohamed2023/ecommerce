import React from 'react'
import { Container } from 'react-bootstrap'
import "./Header.css"
import Alertfun from '../../Buttompage/Alertfun'

export default function Header() {

 return(
    <header>
      <Container>
<div className='col-md-6'>
<h2>Good food choices are good investments.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
<button><a href="#ordnow" class="smooth-goto"/>Order now</button>
<button onClick={()=>window.prompt("For Learning More Call Us ")}>Learn more</button>
</div>
<div className='col-md-6 gg'>
</div>


</Container>
    </header>
  )
}
