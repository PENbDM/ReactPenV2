import Header from "./components/Header";
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import { useState, useEffect } from "react";
import Favourite from "./pages/Favourite";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [fav, setFav] = useState([]);
  const [cartItem, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("/item").then((res) => {
        setItems(res.data);
      });
      await axios.get("/getcartItems").then((res) => {
        setCartItems(res.data);
      });
      await axios.get("/getfavItem").then((res) => {
        setFav(res.data);
      });
    };
    fetchData();
  }, []);

  const addToCart = async (obj) => {
    try {
      if (cartItem.find((item) => item._id === obj._id)) {
        await axios.delete(`/delete/${obj._id}`);
        setCartItems((prev) => prev.filter((item) => item._id !== obj._id));
      } else {
        const { data } = await axios.post("/cartItem", obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("dont press button to much :)");
      console.log(error);
    }
  };

  const addToFav = async (obj) => {
    try {
      if (fav.find((item) => item._id === obj._id)) {
        await axios.delete(`/deletee/${obj._id}`);
        setFav((prev) => prev.filter((item) => item._id !== obj._id));
      } else {
        const { data } = await axios.post("/favItem", obj);
        setFav((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("dont press button to much :)");
      console.log(error);
    }
  };

  const removeItemCart = async (_id) => {
    await axios.delete(`/delete/${_id}`);
    setCartItems((prev) => prev.filter((item) => item._id !== _id));
  };

  const isItemAdded = (_id) => {
    return cartItem.some((obj) => obj._id === _id);
  };
  const isItemFav = (_id) => {
    return fav.some((obj) => obj._id === _id);
  };
  return (
    <div className="wrapper">
      <Header cartItem={cartItem} onClickCart={() => setCartOpen(true)} />
      {cartOpen ? (
        <Drawer
          onCloseCart={() => setCartOpen(false)}
          cartItem={cartItem}
          removeItemCart={removeItemCart}
        />
      ) : null}

      <Routes>
        <Route
          path="/home"
          element={
            <Home
              items={items}
              isItemFav={isItemFav}
              isItemAdded={isItemAdded}
              addToCart={addToCart}
              addToFav={addToFav}
            />
          }
        ></Route>
        <Route
          path="/fav"
          element={
            <Favourite
              fav={fav}
              isItemFav={isItemFav}
              isItemAdded={isItemAdded}
              addToCart={addToCart}
              addToFav={addToFav}
            />
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
