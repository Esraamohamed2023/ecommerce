import React from 'react'
import Firstnav from"../Home/Firstnav/Firstnav"
import"./Buttom.css"
import Secnav from './Secnav'
import google from"../../Site-images/google.png"
export default function SignIn() {
  return (
    
<div className='container'>
<div className='sgn' >
<div className='nv'>
<h3>envato</h3>
</div>
<div className='have'>
<h3>Have we met before?</h3>
<h6>Great to see you here! Just one step before<br/>
we take you to checkout.</h6>
</div>
<div className='ctn'>
<div className='Google col-md-8 col-sm-12 '>
<img src={google}  />
<h5>Continue With Google</h5>
</div>
</div>
<hr className='col-md-6 col-sm-12'></hr><span className="col-md-6 col-sm-12 ">OR</span><hr className='col-md-6 col-sm-12'></hr>

<div className='eventcomp'>

<form>
<input type={'text'} placeholder="User Name"/>
<input type={'text'} placeholder="Password "/>
<button><input type={'submit'} value="Sign In"/></button>
<p>New here?<u> Create an Envato account</u></p>
</form>
<div className='fni'>
<hr/>
<p>Envato collects and uses personal data in accordance with our<u> Privacy Policy</u>.<br/> By creating an account, you
agree to our <u>Terms & Conditions</u>.</p>
</div>
</div>
</div>
</div>
  )
}
