import React,{useState} from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import Header from '../Header'
import '../orderpage/OrderPage.css'


const TabMenu = styled.ul`
    font-weight: bold;
    display: inline-flex;
    flex-direction: row;
    list-style: none;
    margin-top: -0.5rem;
    height: auto;
    margin-left: -2.3rem;
    
    
    .submenu {
        display: inline-flex;
        padding: 2.2% ;
        cursor: pointer;
        background-color: #d3d3d3;
        color: gray;
        width: 10.1vw;
        height: 2vh;
        border-radius:5px 5px 0px 0px;
        margin: 3px;
        
    }

    .focused{
        display: inline-flex;
        width: calc(30.5%);
        padding: 2.2% ;
        cursor: pointer;
        background-color: #999999;
        color: white;
    }

`;


const OrderPage = () => {

    const menuArr = [
        { name: '주문내역조회', content: '월요일만화' },
        { name: '취소/반품/교환 내역', content: '화요일만화'},
        { name: '과거주문내역', content: '수요일만화' }
    ];

    const [currentTab, setCurrentTab] = useState(0);
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };



    return (
        <div style={{ backgroundColor: "#FDFDF6", display: "flex", flexDirection: "column", fontFamily: "BMJUA_ttf" }}>
            <Header />
            <div>
                <h1 className='title'>주문조회</h1>
            </div>
            <div>
            <TabMenu>
                    {menuArr.map((ele, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    className={currentTab === index ? "submenu focused" : "submenu"}
                                    onClick={() => selectMenuHandler(index)}
                                > {ele.name}
                                </div>
                            </>
                        )
                    })}
                </TabMenu>
            </div>
            <Footer />
        </div>
    )
}

export default OrderPage