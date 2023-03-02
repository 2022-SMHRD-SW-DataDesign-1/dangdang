import React, { useState } from 'react'
import ApiService from "../../ApiService";
import { Link } from 'react-router-dom';

const TestInfo = () => {

    // const [변수, 변수를 다룰 함수] = usestate(초기값)
    const [Id, SetId] = useState("")
    const [Password, SetPassword] = useState("")
    const [Email, SetEmail] = useState("")
    const [Name, SetName] = useState("")
    const [Phone, SetPhone] = useState("")
    const [Address, SetAddress] = useState("")

    // 회원가입 submit 버튼을 클릭하면 실행되는 함수

    const handleSignup = async (e) => {
        // 이벤트 객체(e)를 매개변수로 받아서 이벤트의 기본 동작을 막고 
        e.preventDefault();
        // 회원가입에 필요한 정보를 객체로 생성

        const user = {
            id: Id,
            pwd: Password,
            email: Email,
            phone: Phone,
            address: Address,
            name: Name
        };
         // APIservice.joinuser 함수를 호출할때 매개변수로 전달 
        // try-catch 구문을 사용 회원가인 성공/실패 여부 확인
        try {
            const response = await ApiService.joinUser(user);
            console.log(response.data);
            console.log("회원가입 성공");
        } catch (error) {
            console.error(error);
            console.log("회원가입 실패");
        }
    }
   
    return (
        <>
            <div>
                <form onSubmit={handleSignup}>
                    <h3>회원가입</h3>
                    <input type="text" onChange={(e) => SetId(e.target.value)} value={Id} placeholder='아이디를 입력해주세요' /><br />
                    {/* 비밀번호 */}
                    <input type="password" onChange={(e) => SetPassword(e.target.value)} value={Password} placeholder='비밀번호' /><br />
                    <input type="password" placeholder='비밀번호 확인' /><br />
                    {/* {Password !== ConfirmPw && <p>비밀번호가 일치하지 않습니다.</p>} */}
                    <input type="Email" onChange={(e) => SetEmail(e.target.value)} value={Email} placeholder='이메일' /><br />
                    <input type="text" onChange={(e) => SetPhone(e.target.value)} value={Phone} placeholder='phone' /><br />
                    <input type="text" onChange={(e) => SetAddress(e.target.value)} value={Address} placeholder='주소' /><br />
                    <input type="text" onChange={(e) => SetName(e.target.value)} value={Name} placeholder='이름' /><br />
                    {/* <input type="text" onChange={(e) => SetDetail(e.target.value)} value={Detail} placeholder='상세주소' /><br /> */}
                    <input type="submit" />
                </form>
                <br />
                <Link to="/login" >
                    <button >로그인</button>
                </Link >
                <Link to="/cart">
                    <button >상품등록</button>
                </Link>
                <Link>
                    <button >장바구니</button>
                </Link>
                <Link to="/loadMember">
                    <button >고객조회</button>
                </Link>



            </div>
        </>
    )
}

export default TestInfo
