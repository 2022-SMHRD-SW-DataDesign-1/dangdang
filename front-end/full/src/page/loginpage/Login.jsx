import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../loginpage/Login.css'
import '../font/font.css'

const Login = () => {
  return (
    <div style={{ backgroundColor: "#FDFDF6", display: "flex", flexDirection: "column", fontFamily: "BMJUA_ttf" }}>
      <Header />
      <div >
        <form className="box1"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "28rem",
            width: "25rem",
            marginTop: "10rem",
            marginBottom: "10rem",
            backgroundColor: "#F7F7D1",
            boxShadow: "3px 3px 5px 0px #E7E7F6",
            borderRadius:"10px",
            color:"#3B6EAE"
          }}>
          <h1 style={{ 
            marginTop: "-1rem", 
            marginBottom: "4rem", 
            fontFamily: "BMJUA_ttf", 
            fontWeight:"lighter",
            textAlign:"center"
            }}> 로그인 </h1>
          <label> ID </label>
          <input className='put' type='text' />

          <label>Password</label>
          <input className='put' type='password' />

          <span>
            <br />
            <button formAction=''>
              Login
            </button>
            <button formAction='' style={{ marginLeft: "1rem"}}>
              Join us
            </button>
          </span>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login