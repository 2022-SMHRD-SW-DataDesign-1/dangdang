import React, { useState, useEffect } from 'react'
import ApiService from "../../ApiService";




const ProductLoad = () => {
    const [Products, setProducts] = useState([]);


    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = () => {
        ApiService.LoadProduct()
            .then((res) => {
                console.log(res.data);
                const products = res.data.map((product) => {
                    return {
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
            <h1>상품 목록페이지</h1>

            <div>
                <table border={"1"}>
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
                            <tr>
                                <td><a href='/ProductDetail'>{product.name}</a></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><a href='/ProductDetail'>{product.image}</a></td>
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
