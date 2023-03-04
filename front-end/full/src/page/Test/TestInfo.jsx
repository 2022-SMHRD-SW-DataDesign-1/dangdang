import React, { useState } from 'react'
import ApiService from "../../ApiService";
import { Link } from 'react-router-dom';

const TestInfo = () => {

    // const [변수, 변수를 다룰 함수] = usestate(초기값)
    const [id, SetId] = useState("")

    const [password, SetPassword] = useState("")
    const [confirmpw, SetConfirmpw] = useState("")

    const [email, SetEmail] = useState("")
    const [name, SetName] = useState("")
    const [phone, SetPhone] = useState("")
    const [address, SetAddress] = useState("")

    const [IdCheck, SetIdCheck] =useState(false)

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

    const handleSignup = async (e) => {
        // 이벤트 객체(e)를 매개변수로 받아서 이벤트의 기본 동작을 막고 
        e.preventDefault();
        // 회원가입에 필요한 정보를 객체로 생성
        if(!IdCheck){
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
                    <div className="id-check-container">
                        <input type="text" onChange={(e) => SetId(e.target.value)} value={id} placeholder='아이디를 입력해주세요' /><br />
                        <button onClick={handleIdcheck} name="checkId">중복체크</button><br />
                    </div>
                    {/* 비밀번호 */}
                    <input type="password" onChange={(e) => SetPassword(e.target.value)} value={password} placeholder='비밀번호' /><br />
                    <input type="password" onChange={(e) => SetConfirmpw(e.target.value)} value={confirmpw} placeholder='비밀번호 확인' /><br />
                    {confirmpw && password !== confirmpw && <p>비밀번호가 일치하지 않습니다.</p>}


                    <input type="Email" onChange={(e) => SetEmail(e.target.value)} value={email} placeholder='이메일' /><br />
                    <input type="text" onChange={(e) => SetPhone(e.target.value)} value={phone} placeholder='phone' /><br />
                    <input type="text" onChange={(e) => SetAddress(e.target.value)} value={address} placeholder='주소' /><br />
                    <input type="text" onChange={(e) => SetName(e.target.value)} value={name} placeholder='이름' /><br />
                    {/* 상세주소 테이블 하나 더 추가? */}
                    {/* <input type="text" onChange={(e) => SetDetail(e.target.value)} value={Detail} placeholder='상세주소' /><br /> */}
                    <input type="submit" name='signup' />
                </form>
                <br />
                <Link to="/login" >
                    <button >로그인</button>
                </Link ><br />
                <hr />
                <Link to="/loadMember">
                    <button >고객조회</button>
                </Link>
                <Link to="/loadproduct">
                    <button >상품목록</button>
                </Link><br />
                <hr />
                <Link to="/Product">
                    <button >상품등록</button>
                </Link>
                <Link to="/ProductDetail">
                    <button >장바구니</button>
                </Link>


            </div>
        </>
    )
}

export default TestInfo
