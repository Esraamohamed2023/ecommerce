import React from 'react'
import "./Alertfun.css"
export default function Alertfun() {

    return(
<div className='text'>
<h3>Make Your Order Now!</h3>
<div className='form'>
<form>
<input type={"text"} placeholder="Name"/>
<input type={"text"} placeholder="Email Address"/>
<input type={"text"} placeholder="Adress"/>
<input type={"text"} placeholder="Zip Code"/>
<input type={"text"} placeholder="Mobile No"/>
<select id="food" name="food">
  <option value="volvo">Rainbow Vegetable Sandwich</option>
  <option value="saab">Vegetarian Burger</option>
  <option value="fiat">Raspberry Stuffed French Toast</option>
</select>

<button onClick={()=>window.prompt("To Confirm the Request,Type Yes Please!")}>Send Message</button>

</form>
</div>
</div>

    )




  
}
