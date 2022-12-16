import React, { Fragment } from 'react'
import Qdata from './Qdata'
import Questiondata from './QuestionData'
import "./Quest.css"
export default function Question () {
  return (
    <Fragment>
<div>
<div className='container'>
<div className='row'>
<div className='col-md12 col-lg-12'>
<h2>Frequently Asked Questions</h2>

</div>
</div>
</div>
</div>

<div>
<div className='container'>
<div className='row'>
{Questiondata.map((ele)=>{return(<div key={ele.id} className='col-md-6 ml-0'>
<Qdata Ques={ele.Ques} Des={ele.Des}/>

</div>)})}


</div>

</div>
</div>
</Fragment>
  )
}
