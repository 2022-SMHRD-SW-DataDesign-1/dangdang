import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './Mypage.css'

const Mypage = () => {
  return (
    <div style={{ backgroundColor: "#FDFDF6", display: "flex", flexDirection: "column", fontFamily: "웰컴체 Bold.ttf" }}>
      <Header />
      <h1 className='title'> MY PAGE </h1>
      <div className='b1'>
        <div className='b2'>
          <img className='profile' src={require("../Img/프로필이미지.jpg")} />
        </div>
        <div className='info'>
          ID : yulming <br />
          이름 : 박민지 <br />
          Phone : 010-1234-5678 <br />
          E-mail : dangdang@gmail.com <br />
          주소 : 광주광역시 동구 예술길 31-15
        </div>
      </div>
      
        <div className='state'>
          <h3> 나의 주문처리 현황
            <span>
              ( 최근 3개월 기준 )
            </span>
          </h3>
        </div>
        <div className='state2'>
          <ul className='order'>
            <li>
              <strong> 입금전 </strong>
              <a>
                <span>
                </span>
              </a>
            </li>
            <li>
              <strong> 배송준비중 </strong>
              <a>
                <span>
                </span>
              </a>
            </li>
            <li>
              <strong> 배송중 </strong>
              <a>
                <span>
                </span>
              </a>
            </li>
            <li>
              <strong> 배송완료 </strong>
              <a>
                <span>
                </span>
              </a>
            </li>
          </ul>
          <ul className='cs'>
            <li>
              <span className='icoDot'></span>
              <strong> 취소 : </strong>
              <a>
                <span>
                </span>
              </a>
            </li>
            <li>
              <span className='icoDot'></span>
              <strong> 교환 : </strong>
              <a>
                <span>
                </span>
              </a>
            </li>
            <li>
              <span className='icoDot'></span>
              <strong> 반품 : </strong>
              <a>
                <span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      
      <Footer />
    </div>
  )
}

export default Mypage