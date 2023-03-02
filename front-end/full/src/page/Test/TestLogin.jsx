import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ApiService from "../../ApiService";


const TestLogin = (props) => {
    // const [변수, 변수를 다룰 함수] = usestate(초기값)
    
    // 아이디 입력 && 비밀번호 입력 -> 데이터 보내기
    // 같은지 확인 
    // 아니면 아이디 또는 비밀번호가 틀렸다고 공지
    const [state, setState]= useState({
        user_id :'',
        user_pwd: ''
    });

    const onChange = (e) =>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
    };
    const navigate = useNavigate();
    const LoginUser=(e) =>{
        e.preventDefault();
        let User ={
            user_id:state.user_id,
            user_pwd:state.user_pwd,
        };
        ApiService.LoginUser(User.user_id, User.user_pwd)
        .then((res)=>{
            console.log(res.status);
            console.log(res.data);
            console.log("if통과");
            if(res.data === '/login'){
                alert('로그인실패');
                window.location.reload();
            }else{
                sessionStorage.setItem("info", res.data)
                navigate("/");
            }
        })
        .catch((err)=>{
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
                <input type="text" onChange={onChange} name="user_id" value={state.user_id} placeholder='ID'/><br />
                <input type="password" onChange={onChange} name="user_pwd" value={state.user_pwd} placeholder='PW'/><br />
                <button onClick={LoginUser}>로그인</button>
            </form>

        </div>
    )
}

export default TestLogin