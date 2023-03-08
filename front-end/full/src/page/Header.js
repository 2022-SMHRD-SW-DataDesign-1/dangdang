
import React from 'react'
import '../page/font/font.css'
import '../page/Header.css'


const Header = () => {

    // 로그인 객체 담아와야함
    







    return (
        <header className='header'>
            <a className='h11' href='/' >
            <h1>댕냥이</h1>
            </a>
            <nav>
                <ul className='ul1'>
                    
                    <li><a href='/ProductDog'> Dog </a></li>
                    <li  className='tab' ><a href='/ProductCat'> Cat </a></li>
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
                    <a href='/OrderPage'>
                        주문조회
                    </a>
                </ul>
            </nav>
        </header>
    )
}

export default Header