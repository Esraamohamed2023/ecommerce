import React from 'react'
import Navs from '../Navs/Navs'
import First from './Firstnav/Firstnav'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Section from './Header/Section'
import Foodfun from './Ourfoods/Foodfun'
import Ourfoods from './Ourfoods/Ourfoods'
import Question from './Question/Question'
import Slide from './Slide/Slide'
import Small from './Small/Small'
import Subscribe from './Subscribe/Subscribe'
import Withimage from './Withimage/Withimage'

export default function Home() {
  return (




  <div>
     <First/>
      <Navs />
<Header/>
<Section/>
<Withimage/>
<Ourfoods/>
<Slide/>
<Question/>
<Small/>
<Subscribe/>
<Footer/>

  </div>
  )
}
