import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import ProductDetails from "./Components/ProductDetails/ProductDetails.js";
import Products from "./Components/Products/Products";
import LogIn from "./Components/LogIn";
import NavBar from "./Components/NavBar/NavBar";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import New from "./Pages/New";
import EditProduct from "./Components/EditProduct.js/EditProductDetails";

// Components

function App() {
  // const URL = process.env.REACT_APP_API_URL
  //const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //     axios
  //     .get(`${URL}/products`)
  //     .then((response) =>{
  //         //console.log(response.data)
  //         setProducts(response.data);
  //     })
  //     .catch((error) => console.log("error fetching products", error))
  // },[URL])

  const addToCart = (products) => {
    console.log("we are in addToCart");
    setCart([...cart, products]);
  };
  console.log(cart);
  // const renderCart = () => {
  //   <>
  //   <div className="products">
  //     {cart.map((product, id) => (
  //       <div className="product" key={id}>
  //         <h3>{product.name}</h3>
  //         <h4>{product.cost}</h4>
  //         <img src={product.image} alt={product.name} />
  //     </div>
  //     ))}
  //     </div>
  //   </>
  // }
  // const HandleDelete = (id) => {
  //   const remainder = cart.filter((x) => x.id != id);
  //   setCart(remainder);
  // };

  const removeFromCart = (id) => {
    console.log(id);
    setCart(cart.filter((product) => product.id != id));
  };

  return (
    <div className="App">
      {/* <p>Hello Fantastics</p> */}
      <NavBar cart={cart} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Test />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products func={addToCart} cart={cart} />}/>
        <Route path="/newproduct" element={<New />}/>
        <Route path="/products/:id/edit" element={<EditProduct />}/>
        <Route path="/shoppingCart" element={<ShoppingCart func={removeFromCart} setCart={setCart}  cart={cart} />}/>
        <Route path="/account" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
