import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../joinpage/Join.css';
import '../font/font.css'

const Join = () => {
    return (
        <div style={{ backgroundColor: "#FDFDF6", display: "flex", flexDirection: "column", fontFamily: "BMJUA_ttf" }}>
            <Header />
            <div>

                <form className='box'
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
                        alignItems: "center"
                    }}>
                    <div>
                        <h1 style={{
                            fontFamily: "BMJUA_ttf",
                            fontWeight: "lighter",
                            marginLeft: "5rem"
                        }}> 회원가입 </h1>
                    </div>
                    <label>ID</label>
                    <input type="text" placeholder='  ID를 입력하세요' />
                    <button style={{ marginLeft: "22rem", marginTop: "-2rem" }}> 중복확인 </button>

                    <label>Password</label>
                    <input type="password" placeholder='  password를 입력하세요' />

                    <label>Confirm Password</label>
                    <input type="password" />

                    <label>Name</label>
                    <input type="text" />

                    <label>Email</label>
                    <input type="email" />

                    <label>Phone</label>
                    <input type="text" />

                    <label>주소</label>
                    <input type="text" />
                    <button style={{ marginLeft: "22rem", marginTop: "-2rem" }}> 검색 </button>

                    <br />
                    <div style={{marginLeft: "5rem"}}>
                    <button style={{}} type='submit'>회원가입</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Join