import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './ProductList2.css'

const ProductList2 = () => {
    return (
        <div>
            <Header />
            <div style={{textAlign:"center", marginTop:"3rem"}}>
                <button> 사료 </button>
                <button> 간식 </button>
                <button> 장난감 </button>
                <button> 미용 </button>
            </div>
            <div className="pn" >
                <div>
                <img style={{ width: "30rem", height: "30rem" }}
                    src={require("../Img/product1.jpg")} alt="사료" />
                <h3 className='productname'> 댕냥이 사료 1kg</h3>
                <h4> 30,000원</h4>
                </div>
                <div>
                <img style={{ width: "30rem", height: "30rem", marginLeft: "2rem" }}
                    src={require("../Img/product2.jpg")} alt="사료2" />
                <h3> 댕냥이 사료 2kg</h3>
                <h4> 29,000원</h4>
                </div>
                <div>
                <img style={{ width: "30rem", height: "30rem", marginLeft: "2rem" }}
                    src={require("../Img/product3.jpg")} alt="사료3" />
                <h3> 댕냥이 사료 3kg</h3>
                <h4> 27,000원</h4>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductList2