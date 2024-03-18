import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext.jsx';

// eslint-disable-next-line react/prop-types
function Product({ name, description, price }) {
  const { setProduct } = useContext(ProductContext);

  const handleAddToCart = () => {
    let newProduct = {
      name,
      description,
      price,
    };

    setProduct((curr) => [...curr, newProduct]);
  };

  // Check if product array is empty
  // if (product.length === 0) {
  //   return (
  //     <div className="product">
  //       <h2>No Product Available</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>
        <span
          style={{
            fontSize: '20px',
            fontWeight: 'bolder',
            display: 'block',
            marginBottom: '20px',
          }}>
          Description
        </span>
        {description}
      </p>
      <h4>
        Price: <span style={{ fontWeight: 'lighter' }}>${price}</span>
      </h4>
      <button className="productBtn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
