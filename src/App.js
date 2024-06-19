import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import loadingImg from "./assets/loader.gif";
import { CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import {commerce} from "./lib/commerce";
import ProductView from "./components/ProductView/ProductView";
import Products from "./components/Products/Products";



const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [featureProducts, setFeatureProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts().then(r => fetchProducts());
  }, []);
  return (
      <div>
        {products.length > 0 ? (
            <>
              <Router>
                <div style={{ display: "flex" }}>
                  <CssBaseline />
                  <Navbar
                      totalItems={cart.total_items}
                      handleDrawerToggle={handleDrawerToggle}
                  />
                  <Switch>
                    <Route exact path="/">
                      <Products
                          products={products}
                          featureProducts={featureProducts}
                          onAddToCart={handleAddToCart}
                          handleUpdateCartQty
                      />
                    </Route>
                    <Route path="/product-view/:id" exact>
                      <ProductView />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </>
        ) : (
            <div className="loader">
              <img src={loadingImg} alt="Loading" />
            </div>
        )}
      </div>
  );
};

export default App;
