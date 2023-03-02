import React, { useState } from 'react'
import ApiService from "../../ApiService";



const Product = () => {

    const [name, SetName] = useState("")
    const [thumbnail, SetThumbnail] = useState("")
    const [picurl, SetPicurl] = useState("")
    const [text, SetText] = useState("")
    const [price, SetPrice] = useState("")
    const [size, SetSize] = useState("")

    const Handleregister = async (e) => {
        e.preventDefalut();

        const product = {
            p_name: name,
            p_thumbnail: thumbnail,
            p_picurl: picurl,
            p_text: picurl,
            p_price: text,
            p_date: price,
            p_size: size
        }

        ApiService.register(product)
            .then((response) => {
                console.log(response.data);
                console.log("상품등록 성공");
            })
            .catch((error) => {
                console.error(error);
                console.log("상품등록 실패");
            });
    }


    return (
        <>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                {/* 상품등록 */}
                <form onSubmit={Handleregister}>
                    < h3 > 상품등록</h3 >
                    <input type="text" onChange={(e) => SetName(e.target.value)} value={name} placeholder='상품이름' /><br />
                    <input type="text" onChange={(e) => SetPrice(e.target.value)} value={price} placeholder='상품가격' /><br />
                    <input type="text" placeholder='상품수량을 입력해주세요' /><br />

                    <select name="category" id="dorc">
                        <option value="null">선택</option>
                        <option value="dog">강아지</option>
                        <option value="cat">고양이</option>
                    </select> 
                    <select name="category" id="kind">
                        <option value="null">선택</option>
                        <option value="meal">사료</option>
                        <option value="snack">간식</option>
                        <option value="toy">장난감</option>
                        <option value="beauty">미용</option>
                    </select>
                    <br />
                    <label> 상품 사진 등록</label> <br />
                    <input type="file" onChange={(e) => SetThumbnail(e.target.value)} value={thumbnail} placeholder='상품사진' /><br />
                    <textarea name="file" onChange={(e) => SetText(e.target.value)} value={text} id="file" cols="30" rows="10" placeholder='상품설명'></textarea><br />
                    <br />
                    <button>등록하기</button>
                </form>

            </div>
        </>

    )
}
export default Product
