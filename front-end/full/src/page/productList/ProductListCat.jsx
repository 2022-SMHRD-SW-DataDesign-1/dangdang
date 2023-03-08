import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ApiService from "../../ApiService";
import Footer from '../Footer'
import Header from '../Header'
import './ProductListDog.css'

const ProductListCat = () => {

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
        ApiService.LoadProductCat()
            .then((res) => {
                console.log(res.data);
                const products = res.data.map((product) => {
                    return {
                        num: product.product_num,
                        name: product.name,
                        price: product.price,
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
            <Header />
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
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
            <div className="pn" >
                {Products.map((product) => (
                    <div key={product.product_num} className="product-item">
                        <Link to={`/ProductDetail/${product.product_num}`}>
                            <img style={{ width: "30rem", height: "30rem" }} 
                                src={(`/${product.image}.jpg`)} alt="사료" />

                            <h3 className='productname'>{product.name}</h3>
                            <h4> {product.price}원</h4>
                        </Link>
                    </div>
                ))}

                {/* <div>
                <img style={{ width: "30rem", height: "30rem", marginLeft: "2rem" }}
                    src={require("../Img/product2.jpg")} alt="사료2" />
                <h3> 댕냥이 사료 2kg</h3>
                <h4> 29,000원</h4>
                </div>
                <div>
                <img style={{ width: "30rem", height: "30rem", marginLeft: "2rem" }}
                    src={require("../Img/product3.jpg")} alt="사료3" />
                <h3> 댕냥이 사료 3kg</h3>
                <h4> 27,000원</h4>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default ProductListCat