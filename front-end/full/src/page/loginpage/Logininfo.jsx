import React from "react";

// 로그인 확인여부 
const Logininfo = () => {
    const logout = () => {
        console.log('로그아웃클릭')
        sessionStorage.clear();
        window.location.replace("/")

    }
    const info1 = sessionStorage.getItem('loginUser');
    // key값을 잘못 넣으면 415 에러가 뜸
    // sessionStorage에서 'loginUser'라는 key로 저장된 값을 가져와 info1변수에 할당합니다.
    // info 1 변수가 null이면, 즉 사용자가 로그인 하지 않은 경우에는 로그인 링크를 보여준다.
    // info 1 변수가 null아 아니면, 즉 사용자가 로그인 하지 않은 경우에는 '로그인'링크를 보여준다
    // 로그아웃 버튼을 클릭하면 seesionStorage를 비우고 페이지를 다시 로드한다.
    console.log(info1);

    if (info1 == null) {
        return (
            <div >
                <a  style={{marginRight:"1rem"}} href='/Login'>
                    로그인
                </a>
                <a href='/Join'>
                    회원가입
                </a>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <a style={{marginRight:"1rem"}} href='/OrderPage'>
                        주문조회
                    </a>
                    <a onClick={logout}>로그아웃</a>
                </div>
            </div>
        )
    }



}
export default Logininfo;