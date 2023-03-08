
import React from 'react'
import '../page/font/font.css'
import '../page/Header.css'


const Header = () => {

    // 로그인 객체 담아와야함
    







    return (
        <header className='header'>
            
            <h1 style={{ marginLeft: "2%" }}>댕냥이</h1>
            <nav>
                <ul className='ul1'>
                    <li> Dog </li>
                    <li  className='tab' > Cat </li>
                </ul>

            </nav>
            <nav>
                <ul className='ul2'>
                    <a href='/Login'>
                        로그인
                    </a>
                    <a href='/Join'>
                        회원가입
                    </a>
                    <a>
                        주문조회
                    </a>
                </ul>
            </nav>
        </header>
    )
}

export default Header