import React from 'react';
import products from '../products.json';
import '../css/ProductPage.css';
// Import your CSS file if not already done

const ProductPage = () => {
  return (
    <div>
      <h2>Product Page</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image" // Add a class for styling
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className='features'>
            <strong>Features:</strong>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
