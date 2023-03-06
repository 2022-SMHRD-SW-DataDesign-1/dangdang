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

                <form className='box2'
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
                    <input type="text" placeholder='  ID를 입력하세요' />
                    <button > 중복확인 </button>

                    <label className='label'>Password</label>
                    <input type="password" placeholder='  Password를 입력하세요' />

                    <label className='label'>Confirm Password</label>
                    <input type="password" />

                    <label className='label'>Name</label>
                    <input type="text" />

                    <label className='label'>Email</label>
                    <input type="email" />

                    <label className='label'>Phone</label>
                    <input type="text" />

                    <label className='label'>주소</label>
                    <input type="text" />
                    <button > 검색 </button>

                    <br />
                    <div style={{textAlign:"center"}}>
                    <button style={{}} type='submit'>회원가입</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Join