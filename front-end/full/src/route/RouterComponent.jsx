import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestJoin from "../page/Test/TestInfo"
import TestLogin from '../page/Test/TestLogin';
import Cart from '../page/Test/Product';
import LoadMember from '../page/Test/LoadMember';
const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestJoin/>} />
                    <Route path="/login" element={<TestLogin/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path='/loadMember' element={<LoadMember/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
