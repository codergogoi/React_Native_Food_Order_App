import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import OfferIcon from "../../images/offer.jpg";
import BurgerIcon from "../../images/burger.jpg";
import PizzaIcon from "../../images/pizza.jpg";
import CoffeeIcon from "../../images/coffee.jpeg";
import LunchIcon from "../../images/lunch.jpg";
import FoodCard from "../Cards/FoodCard";

const ProductListView = ({
  products,
  size,
  horizontal,
  didSelectItem,
  disable,
}) => {
  const onSelectItem = ({ item }) => {
    didSelectItem(item);
  };

  return (
    <FlatList
      horizontal={horizontal ? true : false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={products}
      renderItem={(item) => (
        <FoodCard
          size={size}
          data={item}
          disable={disable}
          onSelect={onSelectItem}
        />
      )}
      keyExtractor={(item) => item._id}
    />
  );
};

export default ProductListView;
