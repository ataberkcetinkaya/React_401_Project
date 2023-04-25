import { useState, useContext, createContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

    const addToBasket = (data, findBasketItem) => {
    if (findBasketItem) {
      const newItems = items.filter((item) => item._id !== findBasketItem._id);
      setItems(newItems);
    } else {
      setItems([...items, data]);
    };
  };

  const values = {
    items,
    setItems,
    addToBasket,
  };
 
  return (
    <BasketContext.Provider value={values}>
      {children}
    </BasketContext.Provider>
  );
}

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };