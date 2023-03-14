import React from 'react'
import '../page/font/font.css'

const Footer = () => {
  return (
        <div style={{
            backgroundColor:"#F5F16F", 
            fontFamily: "웰컴체 Bold.ttf", 
            textAlign:"center", 
            position:"fixed",
            bottom: "0",
            width:"100vw",
            fontWeight:"lighter",
            color:"#3B6EAE",
            alignItems: "center"
            }}>
            <h3>댕냥이 쇼핑몰에 오신 것을 환영합니다. </h3>
        </div>
  )
}

export default Footer