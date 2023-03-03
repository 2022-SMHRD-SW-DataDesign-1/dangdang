import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestJoin from "../page/Test/TestInfo"
import TestLogin from '../page/Test/TestLogin';
import Product from '../page/Test/Product';
import LoadMember from '../page/Test/LoadMember';
import ProductDetail from '../page/Test/ProductDetail'
const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestJoin/>} />
                    <Route path="/login" element={<TestLogin/>} />
                    <Route path="/Product" element={<Product/>} />
                    <Route path='/loadMember' element={<LoadMember/>}/>
                    <Route path='/ProductDetail' element={<ProductDetail/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
