import React, { useState, useEffect } from 'react';
import ApiService from '../../ApiService';

// 완성!!!! 이걸로 대충 할 수 있겟따...

function LoadMember() {
    const [members, setMembers] = useState([]);


    useEffect(() => {
        loadMember();
    }, []);

    const loadMember = () => {
        ApiService.LoadMember()
            .then((res) => {
                console.log(res.data);
                const users = res.data.map((member) => {
                    return {
                        id: member.id,
                        name: member.name,
                        phone: member.phone,
                        email: member.email,
                        address: member.address
                    };
                });
                setMembers(users);
            })
            .catch((err) => {
                console.log("axios 에러", err);
            });
    };
    return (
        <>
            <div>고객 조회</div>
            <table border={"1"}>
                <thead>
                    <tr>
                        <td>아이디</td>
                        <td>이름</td>
                        <td>phone</td>
                        <td>E-mail</td>
                        <td>주소</td>
                    </tr>
                </thead>
                <tbody>
                    {members.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default LoadMember