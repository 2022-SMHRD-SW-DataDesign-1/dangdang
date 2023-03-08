import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../font/font.css'
import './Main.css'


const Main = () => {
  return (
    <div className='body'>
      <Header />
      <div className='welcome'> 
        댕냥이 쇼핑몰에 오신 것을 환영합니다. 
      </div>

      <span className='icon'>
      <a href='/ProductDog'>
        <div className='icon1'>
          <h1>
            댕댕 용품
          </h1>
          <img className='dangImg' 
            src={require("../Img/강아지_c.png")} alt="dog2" />  
        </div>
        </a>
        <a href='/ProductCat'>
        <div className='icon2'>
          
          <h1>
            냥냥 용품
          </h1>
          <img className='catImg'
            src={require("../Img/고양이_c.png")} alt="cat2" />
        
        </div></a>
      </span>
      <Footer />
    </div>
  )
}

export default Main