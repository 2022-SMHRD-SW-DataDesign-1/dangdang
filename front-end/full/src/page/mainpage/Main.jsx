import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../font/font.css'



const Main = () => {
  return (
    <div style={{ 
      backgroundColor: "#F7F3E7", 
      height: "15vh", 
      display: "flex", 
      flexDirection: "column", 
      fontFamily: "BMJUA_ttf", 
      color: "#3B6EAE"}}>
      <Header />
      <div style={{
        fontFamily: "BMJUA_ttf",
        display: "inline-block",
        float: "right",
        fontSize: "2rem",
        marginTop: "5vh",
        marginBottom:"5vh",
        textAlign: "center"
      }}> 댕냥이 쇼핑몰에 오신 것을 환영합니다. 
      </div>


      <span style={{
        marginTop:"2.2rem",
        textAlign: "center",
        color: "#3B6EAE"
      }} >
        <div style={{
            height: "40vh", 
            width:"40vw",
            display:"inline-block"
          }}>
          <h1>
            댕댕 용품
          </h1>
          <img style={{height:"40vh"}}
            src={require("../Img/강아지_c.png")} alt="dog2" />
        </div>
        <div style={{
            height: "40vh",
            float:"right",
            marginRight:"25rem"
          }}>
          <h1>
            냥냥 용품
          </h1>
          <img style={{
            height: "40vh"
          }}
            src={require("../Img/고양이_c.png")} alt="cat2" />
        </div>
      </span>
      <Footer />
    </div>
  )
}

export default Main