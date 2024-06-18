import React, {useEffect, useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import loadingImg from "./assets/loader.gif";
import { CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import {commerce} from "./lib/commerce";



const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

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
