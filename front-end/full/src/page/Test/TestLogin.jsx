import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ApiService from "../../ApiService";

const TestLogin = (props) => {
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
          sessionStorage.setItem("info", res.data);
          setLoggedIn(true);
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

  const logout = () => {
    console.log('로그아웃클릭')
    sessionStorage.clear();
    setLoggedIn(false);
    window.location.replace("/")
  }

  return (
    <div>
      {/* 로그인 */}
      <form>
        <h3>로그인</h3>
        <input type="text" onChange={onChange} name="id" value={state.id} placeholder='ID' /><br />
        <input type="password" onChange={onChange} name="password" value={state.password} placeholder='PW' /><br />
        <button onClick={LoginUser} name='login'>로그인</button>
        {loggedIn && <button onClick={logout} name='logout'>로그아웃</button>}
      </form>
    </div>
  );
};

export default TestLogin;