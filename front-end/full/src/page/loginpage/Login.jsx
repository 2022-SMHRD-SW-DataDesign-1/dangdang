import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ApiService from "../../ApiService";
import Header from '../Header'
import Footer from '../Footer'
import '../loginpage/Login.css'
import '../font/font.css'


const Login = () => {
  const [state, setState] = useState({
    id: '',
    password: ''
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const LoginUser = (e) => {
    e.preventDefault();
    const user = {
      id: state.id,
      password: state.password,
    };
    ApiService.loginUser({ id: user.id, password: user.password })
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        if (res.data === 'success') {
          // sessionStorage.setItem("info", JSON.stringify(user));
          window.sessionStorage.setItem("login", res.data);
          setLoggedIn(true);
          console.log(loggedIn);
          // false??
          navigate("/loginminji");
        } else {
          alert('아이디 또는 비밀번호가 올바르지 않습니다.');
          setState({
            ...state,
            password: '',
          });
        }
      })
      .catch((err) => {
        console.log("axios 에러", err);
      });
  };

  const logout = () => {
    console.log('로그아웃클릭')
    sessionStorage.setItem("login", false);
    setLoggedIn(false);
    sessionStorage.clear();
    console.log("로그아웃 확인");
    console.log(loggedIn);
    // true?
    // window.location.replace("/")
  }






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
          <input type="text" onChange={onChange} name="id"  className='put'value={state.id} placeholder='ID' />

          <label>Password</label>
          <input type="password" onChange={onChange} name="password"  className='put'value={state.password} placeholder='PW' />

          <span>
            <br />
            <button onClick={LoginUser} formAction=''>
              Login
            </button>
            {loggedIn && <button onClick={logout} name='logout'>로그아웃</button>}

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