import React, { useState } from 'react'
import ApiService from "../../ApiService";

const Product = () => {

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


    const handleRegister = async (e) => {
        e.preventDefault();

        const product = {
            name: name,
            price: price,
            description: description,
            quantity: quantity,
            image: image,
            category:`${anmCtg},${kindCtg}`
        };

        try {
            const response = await ApiService.Uploadproduct(product);
            console.log(product);
            // user 데이터 넘어옴
            console.log(response.data);
            console.log("상품등록 성공");
        } catch (error) {
            console.error(error);
            console.log("상품등록 실패");
        }
    };

    return (
        <>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                {/* 상품등록 */}
                <form onSubmit={handleRegister}>
                    <h3>상품등록</h3>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='상품이름' /><br />
                    <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='상품가격' /><br />
                    <input type="text" onChange={(e) => setQuantity(e.target.value)} value={quantity} placeholder='상품수량' /><br />
                    <label>상품 사진 등록</label><br />
                    <input type="file" onChange={(e) => setImage(e.target.value)} value={image} placeholder='상품사진' /><br />
                    <textarea name="file" onChange={(e) => setDescription(e.target.value)} value={description} id="file" cols="30" rows="10" placeholder='상품설명'></textarea><br />

                    <select name="anmCtg" id="animal" onChange={handleAnimalCategoryChange} value={anmCtg}>
                        <option value="">동물 종류 선택</option>
                        <option value="강아지">강아지</option>
                        <option value="고양이">고양이</option>
                    </select>
                    <select name="kindCtg" id="kind" onChange={handleKindCategoryChange} value={kindCtg}>
                        <option value="">상품 선택</option>
                        <option value="사료">사료</option>
                        <option value="간식">간식</option>
                        <option value="장난감">장난감</option>
                        <option value="미용">미용</option>
                    </select>
                    <br />
                    <input type="submit"/>
                </form>
            </div>
        </>
    )

}

export default Product
