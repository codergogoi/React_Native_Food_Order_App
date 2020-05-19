import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import CartItem from "../Cards/CartItem";

const CartListView = ({ onAddItem, onRemoveItem, cartItems }) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={cartItems}
      renderItem={(item) => (
        <CartItem
          key={`${item._id}`}
          data={item}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
        />
      )}
      keyExtractor={(item) => item._id}
    />
  );
};

export default CartListView;
