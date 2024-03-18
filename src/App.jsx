import Product from './component/Product.jsx';
import Cart from './component/Cart.jsx';
import './App.css';

function App() {
  return (
    <div className="productContainer">
      <Product
        name="Macbook Pro"
        description="Macbook pro is a laptop"
        price={6000}
      />
      <Product
        name="Apple Ipad"
        description="This is a Tablet for Study"
        price={5000}
      />
      <Product
        name="Earbud"
        description="This is a earbud introduced by apple in 2016"
        price={4000}
      />
      <Product
        name="Mac "
        description="Mac is a Moniter cum Laptop introduced in 2022"
        price={3000}
      />
      <Product
        name="Galaxy Fold 2"
        description="Samsung galaxy is a premium smartphone which you can fold"
        price={2000}
      />

      <Cart />
    </div>
  );
}

export default App;
