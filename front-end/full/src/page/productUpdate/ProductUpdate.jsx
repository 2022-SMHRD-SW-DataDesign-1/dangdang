import React, { useState } from 'react'
import ApiService from "../../ApiService";
import { useNavigate } from "react-router-dom";
import Header from '../Header'
import Footer from '../Footer'
import '../loginpage/Login.css';
import '../font/font.css'

const ProductUpdate = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    // 이미지 url 저장해야함?
    const [image, setImage] = useState('');

    // 카테고리 세부화
    const [anmCtg, setAnimalCategory] = useState('');
    const [kindCtg, setKindCategory] = useState('');
    const handleAnimalCategoryChange = (e) => {
        setAnimalCategory(e.target.value);
    };

    const handleKindCategoryChange = (e) => {
        setKindCategory(e.target.value);
    };
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !price || !description || !quantity || !image || !anmCtg || !kindCtg) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        const product = {
            name: name,
            price: price,
            description: description,
            quantity: quantity,
            image: image,
            category: `${anmCtg},${kindCtg}`
        };

        try {
            const response = await ApiService.Uploadproduct(product);
            console.log(product);
            console.log(response.data);
            console.log("상품등록 성공");
            navigate("/");

        } catch (error) {
            console.error(error);
            console.log("상품등록 실패");
        }
    };


    return (
        <div style={{ backgroundColor: "#FDFDF6", display: "flex", flexDirection: "column", fontFamily: "BMJUA_ttf" }}>
            <Header />
            <div>
                <form onSubmit={handleRegister}
                    className='box'
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
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='  상품이름' /><br />
                    <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='  상품가격' /><br />
                    <input type="text" onChange={(e) => setQuantity(e.target.value)} value={quantity} placeholder='상품수량' /><br />
                    <label style={{ fontFamily: "BMJUA_ttf", fontSize: "1rem", fontWeight: "lighter" }}> 상품 사진 등록</label> <br />
                    <input type="file" onChange={(e) => setImage(e.target.value)} value={image} placeholder='상품사진' /><br />
                    <textarea name="file" onChange={(e) => setDescription(e.target.value)} value={description} id="file" cols="30" rows="10" placeholder='상품설명'></textarea><br />
                    <span>
                        <label style={{ marginRight: "1rem", fontFamily: "BMJUA_ttf" }}> 카테고리 </label>
                        <select name="anmCtg"
                            id="animal"
                            onChange={handleAnimalCategoryChange}
                            value={anmCtg} >
                        <option value="">동물 종류 선택</option>
                            <option value="강아지">강아지</option>
                            <option value="고양이">고양이</option>
                        </select>
                        <select name="kindCtg"
                            id="kind"
                            onChange={handleKindCategoryChange}
                            value={kindCtg} style={{ marginLeft: "1rem" }}>
                        <option value="">상품 선택</option>
                            <option value="사료">사료</option>
                            <option value="간식">간식</option>
                            <option value="장난감">장난감</option>
                            <option value="미용">미용</option>
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