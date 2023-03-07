import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestJoin from "../page/Test/TestInfo"
import TestLogin from '../page/Test/TestLogin';
import Product from '../page/Test/Product';
import LoadMember from '../page/Test/LoadMember';
import ProductDetail from '../page/Test/ProductDetail'
import LoadProduct from '../page/Test/ProductLoad'
import Test from '../page/Test/Test'
import Main from '../page/mainpage/Main'
import Join from '../page/joinpage/Join'
import Login from '../page/loginpage/Login'
import ProductList2 from '../page/productList/ProductList2'
import ProductUpdate from '../page/productUpdate/ProductUpdate'
import Mypage from '../page/mypage/Mypage';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestJoin/>} />
                    <Route path="/loginyuri" element={<TestLogin/>} />
                    <Route path="/Product" element={<Product/>} />
                    <Route path='/loadMember' element={<LoadMember/>}/>
                    {/* <Route path='/ProductDetail' element={<ProductDetail/>}/> */}
                    <Route path='/loadProduct' element={<LoadProduct/>}/>
                    <Route path='/Test' element={<Test/>}/>
                    <Route path="/ProductDetail/:product_num" element={<ProductDetail/>} />
                    <Route path="/Main" element={<Main/>} />
                    <Route path="/Join" element={<Join/>} />
                    <Route path="/Loginminji" element={<Login/>} />
                    <Route path="/ProductList2" element={<ProductList2/>} />
                    <Route path="/ProductUpdate" element={<ProductUpdate/>} />
                    <Route path="/Mypage" element={<Mypage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
