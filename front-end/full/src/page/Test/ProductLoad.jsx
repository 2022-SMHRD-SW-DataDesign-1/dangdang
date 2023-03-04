import React, { useState, useEffect } from 'react'
import ApiService from "../../ApiService";




const ProductLoad = () => {
    const [Products, setProducts] = useState([]);
    const menuArr = [
        { name: '사료', content: '사료' },
        { name: '간식', content: '간식' },
        { name: '장난감', content: '장난감' },
        { name: '미용', content: '미용' }
    ]


    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = () => {
        ApiService.LoadProduct()
            .then((res) => {
                console.log(res.data);
                const products = res.data.map((product) => {
                    return {
                        product_num: product.product_num,
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        image: product.image,
                        category: product.category
                    };
                });
                setProducts(products);
            })
            .catch((err) => {
                console.log("axios 에러", err);
            });
    };
    return (
        <div>
            <h1 style={{ backgroundColor: 'red' }}>상품 목록페이지</h1>
            <div style={{ display: 'flex', marginleft: '300px', backgroundColor: 'yellow' }}>
                {menuArr.map((kind, index) => {
                    return (
                        <>
                            <button key={index}>
                                {kind.name}
                            </button>
                        </>
                    )
                })}
            </div>
            <div style={{ backgroundColor: 'yellowgreen' }}>
                <table border={"1"} >
                    <thead>
                        <tr>
                            <td>상품이름</td>
                            <td>상품가격</td>
                            <td>상품설명</td>
                            <td>이미지</td>
                            <td>카테고리</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Products.map((product) => (
                            <tr key={product.product_num}>
                                <td><a href={`/ProductDetail/${product.product_num}`}>{product.name}</a></td>
                                <td>{product.product_num}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.image}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ProductLoad;
