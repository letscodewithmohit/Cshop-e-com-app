import React, {createContext, useEffect, useState} from "react";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllProducts from "./Components/AllProducts/AllProducts";
// import AllProducts from "./Components/AllProducts/CopyAllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import toast, {Toaster} from "react-hot-toast";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./FirebaseAuth/FirebaseAuth";
import Singleproduct from "./pages/Singleproduct/Singleproduct";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

// context api
const CartContext = createContext();

// useContext hook

const NameContext = createContext();
const App = () => {
  // hooks for login and sign up components
  const [userName, setUserName] = useState("");

  // hooks for allproducts  and cart components
  const [cart, setCart] = useState([]);
  const [promocode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [invalid, setInvalid] = useState("");

  // context api value -
  const cartValue = cart.length;

  // usecontext hook value -
  const DisplayName = userName;

  // Add to Cart function
  const AddToCart = (product) => {
    const isProductExist = cart.find((findItem) => findItem.id === product.id);
    if (isProductExist) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      );
      setCart(updateCart);
    } else {
      setCart([...cart, {...product, quantity: 1}]);
      toast.success("Product added to cart");
    }

    console.log(cart);
  };

  // Increase Quantity
  const handleInc = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    );
    setCart(incQuantity);
  };

  // Decrease Quantity
  const handleDec = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? {...item, quantity: item.quantity - 1}
        : item
    );
    setCart(decQuantity);
  };

  // Remove Item

  const handleRemove = (id) => {
    const FiterItem = cart.filter((item) => item.id !== id);
    setCart(FiterItem);
  };

  // Calculate Total Price

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity;
    }, 0);
    return totalPrice - discount;
  };

  // promocode section

  const applyPromocode = () => {
    if (promocode === "DISCOUNT10") {
      setDiscount(getTotalPrice() * 0.1);
      setPromoCode("");
    } else {
      setInvalid("INVALID PROMO CODE!");
    }
  };

  // LOGIN AND SIGN UP SECTION FOR DISPLAY NAME

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);
  return (
    <CartContext.Provider value={cartValue}>
      <NameContext.Provider value={DisplayName}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home AddToCart={AddToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleInc={handleInc}
                  handleDec={handleDec}
                  handleRemove={handleRemove}
                  getTotalPrice={getTotalPrice}
                  applyPromocode={applyPromocode}
                  promocode={promocode}
                  setPromoCode={setPromoCode}
                  invalid={invalid}
                />
              }
            />
            <Route
              path="/allproducts"
              element={<AllProducts AddToCart={AddToCart} />}
            />
            <Route
              path="/singlepage/:productId"
              element={<Singleproduct AddToCart={AddToCart} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </NameContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
export {CartContext, NameContext};
