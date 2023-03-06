import React, { useState} from 'react'
import ApiService from "../../ApiService";
import { useNavigate } from "react-router-dom";

import Header from '../Header'
import Footer from '../Footer'
import '../joinpage/Join.css';
import '../font/font.css'

const Join = () => {

    // const [변수, 변수를 다룰 함수] = usestate(초기값)
    const [id, SetId] = useState("")

    const [password, SetPassword] = useState("")
    const [confirmpw, SetConfirmpw] = useState("")

    const [email, SetEmail] = useState("")
    const [name, SetName] = useState("")
    const [phone, SetPhone] = useState("")
    const [address, SetAddress] = useState("")

    const [IdCheck, SetIdCheck] = useState(false)
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 아이디 중복체크
    const handleIdcheck = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiService.checkUserId(id);
            console.log(response.data);
            if (response.data === '') {
                alert("사용 가능한 아이디입니다.");
                SetIdCheck(true)
            } else {
                alert("사용중인 아이디입니다.");
                SetIdCheck(false)
                window.location.reload()
            }
        } catch (error) {
            console.error(error);
            alert("아이디 확인 실패");
        }
    };

    // 회원가입 submit 버튼을 클릭하면 실행되는 함수
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        // 이벤트 객체(e)를 매개변수로 받아서 이벤트의 기본 동작을 막고 
        e.preventDefault();
        // 회원가입에 필요한 정보를 객체로 생성
        if (!IdCheck) {
            alert("아이디 중복을 확인해주세요");
            return;
        }
        const user = {
            id: id,
            password: password,
            email: email,
            phone: phone,
            address: address,
            name: name
        };
        // try-catch 구문을 사용 회원가인 성공/실패 여부 확인
        try {
            const response = await ApiService.joinUser(user);
            console.log(user);
            // user 데이터 넘어옴
            console.log(response.data);
            console.log("회원가입 성공");
            navigate("/Main");

        } catch (error) {
            console.error(error);
            console.log("회원가입 실패");
        }
    }




    return (
        <div style={{ backgroundColor: "#FDFDF6", display: "flex", flexDirection: "column", fontFamily: "BMJUA_ttf" }}>
            <Header />
            <div>

                <form onSubmit={handleSignup} className='box2'
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap-reverse",
                        height: "35rem",
                        width: "25rem",
                        marginTop: "5rem",
                        marginBottom: "10rem",
                        backgroundColor: "#F7F7D1",
                        boxShadow: "3px 3px 5px 0px #E7E7F6",
                        borderRadius: "10px",
                        color: "#3B6EAE",

                    }}>
                    <div>
                        <h1 style={{
                            fontFamily: "BMJUA_ttf",
                            fontWeight: "lighter",
                            textAlign: "center",
                        }}> 회원가입 </h1>
                    </div>
                    <label className='label' >ID</label>
                    <input type="text" onChange={(e) => SetId(e.target.value)} value={id} placeholder='  ID를 입력하세요' />
                    <button onClick={handleIdcheck} name="checkId" > 중복확인 </button>

                    <label className='label'>Password</label>
                    <input type="password" onChange={(e) => SetPassword(e.target.value)} value={password}  placeholder='  Password를 입력하세요' />

                    <label className='label'>Confirm Password</label>
                    <input type="password" onChange={(e) => SetConfirmpw(e.target.value)}/>
                    {confirmpw && password !== confirmpw && <p>비밀번호가 일치하지 않습니다.</p>}

                    <label className='label'>Name</label>
                    <input type="text" onChange={(e) => SetName(e.target.value)} value={name}  />

                    <label className='label'>Email</label>
                    <input type="email" onChange={(e) => SetEmail(e.target.value)} value={email}/>

                    <label className='label'>Phone</label>
                    <input type="text" onChange={(e) => SetPhone(e.target.value)} value={phone} />

                    <label className='label'>주소</label>
                    <input type="text" onChange={(e) => SetAddress(e.target.value)} value={address} />
                    <button > 검색 </button>

                    <br />
                    <div style={{ textAlign: "center" }}>
                        <button style={{}} type='submit' name='signup'>회원가입</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Join