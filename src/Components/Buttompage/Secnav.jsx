import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter } from 'react-router-dom';
import "../Home/Firstnav/First.css"
export default function Secnav() {
  return (
    <div className=''>
<Navbar id="nav" className=''>
      
        <Navbar.Brand id="Firstnav">envato<span>market</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className=" cols justify-content-end col-sm-6 ">
          <Navbar.Text className='frs '>
            
           <a href="#login" onClick={()=>window.close} ><h6 className=''>Create your account </h6></a>
          
          </Navbar.Text>
 <Navbar.Text className='secn  '>
            
           <a href="#login" onClick={()=>window.open("/create","_blank","scrollbars=No,top=200,left=300,width=500,height=520" )}><h6 className=''  >sign In</h6></a>
          
          </Navbar.Text>
        </Navbar.Collapse>
    
    </Navbar>

</div>
  )
}
