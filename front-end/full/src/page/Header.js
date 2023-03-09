import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logininfo from "./loginpage/Logininfo";
import '../page/font/font.css'
import '../page/Header.css'


const Header = () => {

    // 로그인 객체 담아와야함
    const navigate = useNavigate();
    const clicked = () =>{
        let info = sessionStorage.getItem('info');
        
        
        // if(info){
        //     navigate('/Login')
        // }else{
        //     alert('로그인을 해주세요')
        // }
    }







    return (
        <header className='header'>
            <a className='h11' href='/' >
            <h1>댕냥이</h1>
            </a>
            <nav >
                <ul className='ul1'>
                    <li ><a href='/ProductDog'> Dog </a></li>
                    <li  className='tab' ><a href='/ProductCat'> Cat </a></li>
                </ul>

            </nav>
            <nav>
                <ul className='ul2'>
                    {/* 테스트는 어쩌지? */}
                    {/* <button onClick={clicked}>test</button> */}
                    <Logininfo></Logininfo>
                </ul>
            </nav>
        </header>
    )
}

export default Header