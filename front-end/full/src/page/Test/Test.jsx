import React, { useState } from 'react'

import styled from 'styled-components';


const ProductList = () => {

  const [content, setContent] = useState();

  const handleClickButton = e => {
    const { name } = e.target;
    setContent(name);
  };

  console.log(content);

  const selectComponent = {
    first: "1",
    second: "2",
    third: "3",
    fourth: "4",
    fifth: "5",
  };

  const MAIN_DATA = [
    {
      name: 'Product 1',
      price: 100,
      image: 'productImage1',
      description: 'This is product 1',
      category: '간식'
    },
    {
      name: 'Product 2',
      price: 200,
      image: 'productImage2',
      description: 'This is product 2',
      category: '미용'
    },
    {
      name: 'Product 3',
      price: 300,
      image: 'productImage3',
      description: 'This is product 3',
      category: '사료'
    },
    {
      name: 'Product 4',
      price: 400,
      image: 'productImage4',
      description: 'This is product 4',
      category: '장난감'
    },
    {
      name: 'Product 5',
      price: 500,
      image: 'productImage5',
      description: 'This is product 5',
      category: '사료'
    }
  ];

  return (
    <div style={{ backgroundColor: "#F7F3E7", height: "100%", display: "flex", flexDirection: "column" }}>
      <div>
        {MAIN_DATA.map(data => {
          return (
            <button onClick={handleClickButton} 
            name={data.name} 
            key={data.id}>
              {data.category}
            </button>
          );
        })}
      </div>
      {content && <div>{selectComponent[content]}</div>}
    </div>
  )
}

export default ProductList