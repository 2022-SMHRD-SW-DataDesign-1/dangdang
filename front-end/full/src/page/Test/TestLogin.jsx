import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ApiService from "../../ApiService";

const TestLogin = (props) => {
  const [state, setState] = useState({
    id: '',
    password: ''
  });

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
    ApiService.LoginUser({ id: user.id, password: user.password })
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        if (res.data === 'success') {
          sessionStorage.setItem("info", JSON.stringify(user));
          navigate("/");
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

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      {/* 로그인 */}
      <form>
        <h3>로그인</h3>
        <input type="text" onChange={onChange} name="id" value={state.id} placeholder='ID' /><br />
        <input type="password" onChange={onChange} name="password" value={state.password} placeholder='PW' /><br />
        <button onClick={LoginUser}>로그인</button>
      </form>
    </div>
  )
}

export default TestLogin
