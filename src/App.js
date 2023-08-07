import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/footer";
import Basket from "./pages/Basket/Basket";
import Sertificates from "./pages/Sertificates/Sertificates";
import axios from "axios";
import PrivateRouter from "./utils/router/PrivateRouter";
import RouteAuth from "./pages/Auth/RouteAuth";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  const [sertificates, setSertificates] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = basketItems.reduce((acc, item) => acc + item.price, 0);

    setTotal(sum);

    localStorage.setItem("Total", sum);
  }, [basketItems]);

  useEffect(() => {
    try {
      axios.get("http://localhost:3001/sertificates").then((res) => {
        setSertificates(res.data);
      });
      axios.get("http://localhost:3001/added").then((res) => {
        setBasketItems(res.data);
      });
    } catch (error) {
      alert("Ошибка при загрузке данных");
    }
  }, []);

  const addToBasket = (obj) => {
    try {
      if (basketItems.find((cartObj) => cartObj.id === obj.id)) {
        axios.delete(`http://localhost:3001/added/${obj.id}`);
        setBasketItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        axios.post("http://localhost:3001/added", obj);
        setBasketItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert(" Невозможно добавить, товар уже находится в корзине");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3001/added/${id}`);
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToCheckout = (id) => {
    if (total > 0) {
      axios.post("http://localhost:3001/checkout", {
        key: total,
        id: Date.now(),
      });

      setBasketItems([]);
      alert("Спасибо за покупку");
    } else {
      alert("Сначала добавьте товар в корзину");
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className="wrap">
            <Header total={total} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />

              <Route element={<PrivateRouter />}>
                <Route
                  path="/Basket"
                  element={
                    <Basket
                      items={basketItems}
                      total={total}
                      onRemoveItem={onRemoveItem}
                      addToCheckout={addToCheckout}
                    />
                  }
                />
                <Route
                  path="/Sertificates"
                  element={
                    <Sertificates
                      items={sertificates}
                      addToBasket={addToBasket}
                    />
                  }
                />
              </Route>
              <Route path="/Register" element={<RouteAuth />} />
              <Route path="/Login" element={<RouteAuth />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
