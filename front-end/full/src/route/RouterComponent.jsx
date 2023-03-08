import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// test
import TestJoin from "../page/Test/TestInfo"
import Product from '../page/Test/Product';
import LoadMember from '../page/Test/LoadMember';
import LoadProduct from '../page/Test/ProductLoad'
// real
import Main from '../page/mainpage/Main'
import Join from '../page/joinpage/Join'
import Login from '../page/loginpage/Login'
import ProductListDog from '../page/productList/ProductListDog'
import ProductListCat from '../page/productList/ProductListCat';
import ProductUpdate from '../page/productUpdate/ProductUpdate'
import ProductDetail from '../page/productDetail/ProductDetail'
import Mypage from '../page/mypage/Mypage'
import Orderpage from '../page/orderpage/OrderPage'

// import Test from '../page/Test/Test'
// import TestLogin from '../page/Test/TestLogin';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* 테스트 */}
                    <Route path="/Test" element={<TestJoin />} />
                    <Route path="/Producttest" element={<Product />} />
                    <Route path='/loadMembertest' element={<LoadMember />} />
                    <Route path='/loadProducttest' element={<LoadProduct />} />
                    {/* 찐 */}
                    <Route path="/" element={<Main />} />
                    <Route path="/Join" element={<Join />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/ProductDog" element={<ProductListDog />} />
                    <Route path="/ProductCat" element={<ProductListCat />} />

                    <Route path="/ProductUpdate" element={<ProductUpdate />} />

                    <Route path="/Mypage" element={<Mypage />} />
                    <Route path="/Orderpage" element={<Orderpage />} />
                    {/*  */}
                    <Route path="/ProductDetail/:product_num" element={<ProductDetail />} />
                    {/* <Route path="/loginyuri" element={<TestLogin/>} /> */}
                    {/* <Route path='/ProductDetail' element={<ProductDetail/>}/> */}
                    {/* <Route path='/Test' element={<Test/>}/> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
