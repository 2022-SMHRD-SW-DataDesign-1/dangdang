import React, { useState } from 'react'
import ApiService from "../../ApiService";

const Product = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState('');
    const [anmCtg, setAnimalCategory] = useState('');
    const [kindCtg, setKindCategory] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const product = {
            name: name,
            price: price,
            description: description,
            quantity: quantity,
            image: image,
            category_num: {
                anmCtg: anmCtg,
                kind: kindCtg,
            },
        };

        ApiService.register(product)
            .then((response) => {
                console.log(response.data);
                console.log('상품등록 성공');
            })
            .catch((error) => {
                console.error(error);
                console.log('상품등록 실패');
            });
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
                    <select name="anmCtg" id="animal" onChange={(e) => setAnimalCategory(e.target.value)} value={anmCtg}>
                        <option value="">동물 종류 선택</option>
                        <option value="dog">강아지</option>
                        <option value="cat">고양이</option>
                    </select>
                    <select name="kindCtg" id="kind" onChange={(e) => setKindCategory(e.target.value)} value={kindCtg}>
                        <option value="">동물 종류에 따른 카테고리 선택</option>
                        {(anmCtg === 'dog') &&
                            <>
                                <option value="meal">사료</option>
                                <option value="snack">간식</option>
                                <option value="toy">장난감</option>
                                <option value="beauty">미용</option>
                            </>
                        }
                        {(anmCtg === 'cat') &&
                            <>
                                <option value="meal">사료</option>
                                <option value="snack">간식</option>
                                <option value="toy">장난감</option>
                                <option value="beauty">미용</option>
                            </>
                        }
                    </select>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </>
    )

}

export default Product
