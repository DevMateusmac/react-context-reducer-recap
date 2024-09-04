import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import CatContextProvider from "./store/shopping-cart-context.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {  
  return (
    <CatContextProvider>
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CatContextProvider>
  );
}

export default App;
