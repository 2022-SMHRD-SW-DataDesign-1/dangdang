import React,{useState} from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import Header from '../Header'
import '../orderpage/OrderPage.css'


const TabMenu = styled.ul`
    display: inline-flex;
    flex-direction: row;
    list-style: none;
    height: auto;
   
    .submenu {
        display: inline-flex;
        padding: 2.2% ;
        cursor: pointer;
        background-color: lightgray;
        color: gray;
        width: 10vw;
        height: 2vh;
        // border-radius:5px 5px 0px 0px;
        margin: 2px;
        font-weight: lighter;
    }

    .focused{
        display: inline-flex;
        // width: calc(30.5%);
        padding: 2.2% ;
        cursor: pointer;
        background-color: #3D73B9;
        color: #F5F16F;
        font-weight: lighter;
    }
`;


const OrderPage = () => {

    const menuArr = [
        { name: '주문내역조회', content: '주문내역조회' },
        { name: '취소/반품/교환 내역', content: '취소/반품/교환 내역'},
        { name: '과거주문내역', content: '과거주문내역' }
    ];

    const [currentTab, setCurrentTab] = useState(0);
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };



    return (
        <div style={{ backgroundColor: "#FDFDF6", display: "flex", flexDirection: "column", fontFamily: "BMJUA_ttf", height:"1000px" }}>
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
                <div className="box-tab" style={{textAlign: 'center'}}>
                    <div style={{  fontSize: '30px', marginTop: '2vh', textAlign:'center'}}> 
                        {menuArr[currentTab].content}</div>
                    <div style={{ marginTop: '10px'}}>
                        {/* {
                            (monArrTest2[currentTab] == undefined)?
                             <div><img src={`data:image/;base64,${loadingImg}`} style={{width:'20vw', height:'20wh'}}></img></div>:
                             monArrTest2[currentTab].map((i, idx)=>{
                                return (
                                    <>
                                        {i.color == ''?
                                        <img src={`${i.img}`} 
                                            style={{boxShadow: '2px 3px 2px #dcdcdc',
                                                    borderRadius: '10%',
                                                    width: '200px',
                                                    border: i.color,
                                                    margin: '8px'}} 
                                            onClick={() => {showModal(i.img, idx, i); setShow(true);}}
                                            ref={(el) => imgRef.current[idx] = el} />
                                        :
                                        <img src={`${i.img}` } 
                                            style={{boxShadow: '2px 3px 2px #dcdcdc',
                                                    borderRadius: '10%',
                                                    width: '200px',
                                                    border: i.color,
                                                    margin: '8px',
                                                    boxSizing: 'border-box'
                                            }}
                                            onClick={
                                                i.img==oneImage?
                                                    setFlag(idx)
                                                :
                                                    ()=>{setFlag(idx); onChecked(i.img)}
                                            }
                                            ref={(el) => imgRef.current[idx] = el} />}
                                    </>
                                )
                            })
                        }
                        <Modal show={show} selectToon={selectToon}
                                onChecked={() => onChecked(selectImg)}
                                setFlag ={()=>setFlag(selectIdx)}
                                onClose={() => setShow(false)} /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderPage