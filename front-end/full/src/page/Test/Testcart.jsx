import React, { useState } from 'react'
import ApiService from "../../ApiService";



const Testcart = () => {
    return (
        <div>
            <h3>장바구니</h3>
            <table border={"1"}>
                <thead>
                    <tr>
                        <td>주문번호</td>
                        <td>주문상품</td>
                        <td>갯수</td>
                        <td>가격</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00001</td>
                        <td>강아지개껌</td>
                        <td>29,700</td>
                        <td>1</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>00002</td>
                        <td>츄르</td>
                        <td>15,500</td>
                        <td>2</td>
                    </tr>
                </tbody>

            </table>
            <h4>총가격 : </h4>
            <hr />

            <h3>주문 조회</h3>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>주문번호</td>
                            <td>주문상품</td>
                            <td>갯수</td>
                            <td>가격</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00001</td>
                            <td><a href="www.naver.com">강아지개껌</a></td>
                            <td>29,700</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>00002</td>
                            <td>츄르</td>
                            <td>15,500</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />

            <h3>회원 조회</h3>
            <div>
                <table border={"1"}>
                    <thead>
                        <tr>
                            <td>고객번호</td>
                            <td>고객이메일</td>
                            <td>고객 주소</td>
                            <td>총 가격</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00001</td>
                            <td>박민지</td>
                            <td>광주 광산구</td>
                            <td>1,500</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>00002</td>
                            <td>허유리</td>
                            <td>광주 광산구</td>
                            <td>2,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
        </div>

    )
}
export default Testcart
