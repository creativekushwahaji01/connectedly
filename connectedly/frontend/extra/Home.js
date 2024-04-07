import React, { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch('http://localhost:5000/products');
      result = await result.json();
      setProducts(result);
    } catch (error) {
      console.error("Error in fetching data:", error);
    }
  };

  return (
    <div>
      <div className='Banner'>
        {/* Banner content goes here */}
      </div>
      <div>
        <div className='electronic'>
          <h2>ELECTRONICS</h2>
          <div className='electronic prod'>
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={index}>
                  <h3>{product.name}</h3>
                  <img src={product.img} alt={product.name} />
                  <p>Price: {product.price}</p>
                  <p>Category: {product.category}</p>
                  <p>Company: {product.company}</p>
                </div>
              ))
            ) : (
              <h1>No products found</h1>
            )}
          </div>
        </div>
        <div className='books'>
          <h2>BOOKS</h2>
          {/* Display books here */}
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
}
