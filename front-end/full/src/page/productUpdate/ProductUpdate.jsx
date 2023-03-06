import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../loginpage/Login.css';
import '../font/font.css'

const ProductUpdate = () => {
    return (
        <div style={{ backgroundColor: "#FDFDF6", display: "flex", flexDirection: "column", fontFamily: "BMJUA_ttf" }}>
            <Header />
            <div>
                <form className='box'
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "35rem",
                        width: "25rem",
                        marginTop: "5rem",
                        marginBottom: "10rem",
                        backgroundColor: "#F7F7D1",
                        boxShadow: "3px 3px 5px 0px gray",
                        textAlign: "left",
                        borderRadius: "10px",
                        color: "#3B6EAE",
                        alignItems: "center"
                    }}>
                    < h1 style={{ fontFamily: "BMJUA_ttf", fontWeight: "lighter" }} > 상품등록</h1>
                    <input type="text" placeholder='  상품이름' /><br />
                    <input type="text" placeholder='  상품가격' /><br />
                    <label style={{ fontFamily: "BMJUA_ttf", fontSize: "1rem", fontWeight: "lighter" }}> 상품 사진 등록</label> <br />
                    <input type="file" placeholder='상품사진' /><br />
                    <textarea name="file" id="file" cols="30" rows="10" placeholder='상품설명'></textarea><br />
                    <span>
                        <label style={{ marginRight: "1rem", fontFamily: "BMJUA_ttf" }}> 카테고리 </label>
                        <select name="category1" id="animal" >
                            <option value="null">선택</option>
                            <option value="dog">강아지</option>
                            <option value="cat">고양이</option>
                        </select>
                        <select name="category2" id="kind" style={{ marginLeft: "1rem" }}>
                            <option value="null">선택</option>
                            <option value="meal">사료</option>
                            <option value="snack">간식</option>
                            <option value="toy">장난감</option>
                            <option value="beauty">미용</option>
                        </select>
                    </span>
                    <br />
                    <input style={{
                        fontFamily: "BMJUA_ttf",
                        width: "5rem",
                        height: "2rem",
                        fontSize: "1rem",
                        borderColor: "beige",
                        color: "#3B6EAE",
                        backgroundColor: "azure",
                        borderRadius: "10px",
                        border: "none",
                        marginRight: "1rem"
                    }} type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ProductUpdate