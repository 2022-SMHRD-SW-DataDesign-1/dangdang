import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../../ApiService';
import Header from '../Header';
import Footer from '../Footer';
import './ProductDetail.css'


const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { product_num } = useParams();

  useEffect(() => {
    loadProduct(parseInt(product_num));
  }, [product_num]);

  const loadProduct = (product_num) => {
    ApiService.getProduct(product_num)
      .then((res) => {
        setProduct(res.data); // 선택한 제품의 데이터 저장
        console.log(res.data);
      })
      .catch((err) => {
        console.log('axios 에러', err);
      });
  };

  return (
    <div style={{ backgroundColor: "#FDFDF6", display: "flex", flexDirection: "column", fontFamily: "BMJUA_ttf" }}>
      <Header />
      <h1 className='title'>상품 상세페이지</h1>
      <div className='detailArea'>
        <div className='thumbnail'>
          <img src={require("../Img/product1.jpg")} alt="상품상세이미지" />
        </div>
        <div className='infoArea'>
          <ul className='prdDetail_table'>
            <li className='prd_name'> {product.name}</li>
            <li className='prd_des'> {product.description}</li>
            <li className='prd_price'> {product.price}원</li>
            {/* <p>상품 이미지: {product.image}</p> */}
            {/* <p>상품 카테고리: {product.category}</p> */}
          </ul>
          <div className='buy'>
            <button className='btn2'>
              <a>장바구니</a>
            </button>
            <button className='btn2'>
              <a>구매하기</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
