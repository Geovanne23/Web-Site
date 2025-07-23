import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import SidebarCart from "./components/SidebarCart";
import CheckoutPage from "./components/pages/CheckoutPage";
import AboutPage from "./components/pages/AboutPage";
import AccountPage from "./components/pages/AccountPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  const [products, setProducts] = useState([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cardTotal, setCardTotal] = useState(0);

  const addToCardTotal = (value) => setCardTotal(cardTotal + value);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addProductToCart = (id) => {
    const productToAdd = products.filter((product) => product.id === id)[0];
    if (selectedProducts.includes(productToAdd)) return;
    setSelectedProducts(selectedProducts.concat(productToAdd));
    setCardTotal(cardTotal + productToAdd.price);
  };

  const removeProductFromCart = (id) => {
    const newSelectecdProducts = selectedProducts.filter(
      (products) => products.id !== id
    );
    setSelectedProducts(newSelectecdProducts);
  };
  return (
    <Router>
      <div className="App">
        <Navbar
          selectedProducts={selectedProducts}
          setShowSidebarCart={setShowSidebarCart}
        />
        <SidebarCart
          addToCardTotal={addToCardTotal}
          removeProductFromCart={removeProductFromCart}
          cardTotal={cardTotal}
          selectedProducts={selectedProducts}
          setShowSidebarCart={setShowSidebarCart}
          showSidebarCart={showSidebarCart}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  addToCardTotal={addToCardTotal}
                  removeProductFromCart={removeProductFromCart}
                  selectedProducts={selectedProducts}
                  addProductToCart={addProductToCart}
                  products={products}
                  setShowSidebarCart={setShowSidebarCart}
                  showSidebarCart={showSidebarCart}
                  cardTotal={cardTotal}
                />
              }
            />
            <Route
              path="/cart/checkout"
              element={
                <CheckoutPage
                  selectedProducts={selectedProducts}
                  cardTotal={cardTotal}
                />
              }
            />

            <Route
              path="/cart/checkout"
              element={<div>Página de Pagamento {cardTotal} </div>}
            />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/account" element={<AccountPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
