
import React from 'react'
import '../page/font/font.css'


const Header = () => {

    // 로그인 객체 담아와야함
    







    return (
        <header style={{
            display: "flex",
            maxWidth: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            height: "15vh",
            backgroundColor: "#F7F7D1",
            fontFamily: "BMJUA_ttf",
            fontSize: "30px",
            textAlign: "center",
            color: "#3B6EAE"
        }}>
            
            <h1 style={{ marginLeft: "2%" }}>댕냥이</h1>
            <nav>
                <ul style={{
                    display: "flex",
                    // listStyle: "none",
                    // float: "left",
                    fontFamily: "BMJUA_ttf",
                    fontSize: "40px",
                    color: "#B5D0E5",
                    
                }}>

                    <h1> Dog </h1>
                    <h1 style={{marginLeft:"50%"}}> Cat </h1>
                    {/* <img style={{ marginLeft: "30px" }}
                        src={require("../component/img/강아지_c.png")} alt="dog2" />
                    <img style={{ marginLeft: "30px" }}
                        src={require("../component/img/고양이_c.png")} alt="cat2" />
                    */}

                </ul>

            </nav>
            <nav>
                <ul style={{
                    display: "flex",
                    listStyle: "none",
                    color: "#3B6EAE",
                    fontSize: "20px",
                    float: "right"
                }}>
                    <a href='/loginminji' style={{ color:"#3B6EAE", marginLeft: "30px",textDecoration: "none" }}>
                        로그인
                    </a>
                    <a href='/Join' style={{ color:"#3B6EAE", marginLeft: "30px",textDecoration: "none" }}>
                        회원가입
                    </a>
                    <a style={{ marginLeft: "30px", marginRight: "20px" }}>
                        주문조회
                    </a>
                </ul>
            </nav>
        </header>
    )
}

export default Header