import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import"./Buttom.css"
import google from"../../Site-images/google.png"
import { faArrowAltCircleDown, faArrowAltCircleLeft, faArrowLeftRotate, faRobot, faRotate } from '@fortawesome/free-solid-svg-icons'


export default function Buttom() {

return(
<div className='allpart'>
<div className='container'>
<div className='row '>
    <div className='buttompage col-md-6 col-sm-12 col-lg-6'>
<div className='frtp'>
<h4 className='ml-2'>Create Account</h4>
<div className='tt'>
<h6>Already have an account?</h6>
<button onClick={()=>window.prompt("Sure  you have an  account?!")} ><a href='#'>Sign In</a></button>
</div>

</div>
<hr/>
<div className='ctn'>
<div className='Google col-md-8 col-sm-12 '>
<img src={google}  />
<h5>Continue With Google</h5>
</div>
</div>
<hr className='col-md-6 col-sm-12'></hr><span className="col-md-6 col-sm-12 ">OR</span> <hr className='col-md-6 col-sm-12'></hr>
<form>
<div className='twoin '>

<div className='col-md-6'>
<label>First Name</label>
<br/>
<input type={"text"} required/>
<br/>
</div>
<div className='col-md-6'>
<label>Last Name</label>
<br/>
<input type={"text"} required/>
</div>
</div>

<label>Email</label>
<div className='em'>
<input type={"text"} required/>
</div>
<label>User Name</label>
<div className='em'>

<input type={"text"} required/>
</div>
<label>password</label>
<div className='em'>

<input type={"text"} required/>
</div>
<p>Use 8 or more characters with a mix of letters, numbers and symbols. Must not contain your name or username.</p>
<div className='check'>
<input type={"checkbox"} required/>
<label>Iam not robot</label>
<FontAwesomeIcon icon={faRotate} className=""/>

</div>
<div className='ttt'>
<input type={"checkbox"} required/>
<p>Send me tips,freebies,update&offer</p>
</div>
</form>
<hr/>
<p>Envato collects and uses personal data in accordance with our<u> Privacy Policy</u>. By creating an account, you<br/> 
agree to our <u>Terms & Conditions</u>.</p>
<hr/>
<div className='col-md-12 btnn'>
<input type={"submit"} value="create account & continue" className=''/>

</div>

</div>
<div className='inbox '>
<div className=''>
<h4>Order summary</h4>
<hr/>
<div className='flx'>
<h6>Foodera — Responsive F...  </h6>
<h6>$14.00</h6>
</div>
<hr/>
<div className='flx'>
<h6>Handling Fee:</h6>
<h6>$0.00</h6>
</div>
<hr/>
<div className='flx'>
<h5>Total:</h5>
<h5>US$ 14.00</h5>
</div>
</div>
</div>
</div>
    </div>
</div>

)
}
