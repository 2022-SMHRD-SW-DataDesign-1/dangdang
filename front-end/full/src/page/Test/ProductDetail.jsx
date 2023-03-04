import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../../ApiService';

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
      })
      .catch((err) => {
        console.log('axios 에러', err);
      });
  };

  return (
    <div>
      <h1>상품 상세페이지</h1>
      <div>
        <p>상품 이름: {product.name}</p>
        <p>상품 가격: {product.price}</p>
        <p>상품 설명: {product.description}</p>
        <p>상품 이미지: {product.image}</p>
        <p>상품 카테고리: {product.category}</p>
      </div>
      <div>
        <button>장바구니</button>
        <button>구매하기</button>
      </div>
    </div>
  );
};

export default ProductDetail;
