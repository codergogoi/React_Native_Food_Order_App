import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import CartItem from "../Cards/CartItem";

//cart information from API
const categories = [
  { id: 1, name: "Offers" },
  { id: 2, name: "Burgers" },
  { id: 3, name: "Pizzas" },
  { id: 4, name: "Coffee" },
  { id: 5, name: "Meals" },
];

const CartListView = ({ didChangeItems }) => {
  const onAddItem = (item) => {
    console.log(`Added: ${item}`);
    didChangeItems(item);
  };

  const onRemoveItem = (item) => {
    console.log(`removed: ${item}`);
    didChangeItems(item);
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={(item) => (
        <CartItem
          data={item}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CartListView;
