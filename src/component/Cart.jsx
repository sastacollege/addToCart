import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext.jsx';

function Cart() {
  const { product } = useContext(ProductContext);
  //TOTAL PRICE
  const totalPrice = product.map((el) => el.price).reduce((a, b) => a + b, 0);

  return (
    <div className="parentCartContainer">
      <div className="cartContainer">
        <h1 style={{ textAlign: 'center' }}>MY CART</h1>
        <ol>
          {product.map((el) => (
            <li key={{}}>
              {el.name} : {el.price}
            </li>
          ))}
        </ol>
      </div>
      <h2 className="total">Total: ${totalPrice}</h2>
    </div>
  );
}

export default Cart;
