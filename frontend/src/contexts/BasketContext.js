import { useState, useContext, createContext, useEffect } from "react";

const BasketContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

    const addToBasket = (data, findBasketItem) => {
    if (findBasketItem) {
      const newItems = items.filter((item) => item._id !== findBasketItem._id);
      setItems(newItems);
    } else {
      setItems([...items, data]);
    };
  };

  const removeFromBasket = (item_id) => {
    const newItems = items.filter((item) => item._id !== item_id);
    setItems(newItems);
  };

  const values = {
    items,
    setItems,
    addToBasket,
    removeFromBasket,
  };
 
  return (
    <BasketContext.Provider value={values}>
      {children}
    </BasketContext.Provider>
  );
}

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };