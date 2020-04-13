import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import OfferIcon from "../../images/offer.jpg";
import BurgerIcon from "../../images/burger.jpg";
import PizzaIcon from "../../images/pizza.jpg";
import CoffeeIcon from "../../images/coffee.jpeg";
import LunchIcon from "../../images/lunch.jpg";
import FoodCard from "../Cards/FoodCard";

const categories = [
  { id: 1, name: "Offers", image: OfferIcon },
  { id: 2, name: "Burgers", image: BurgerIcon },
  { id: 3, name: "Pizzas", image: PizzaIcon },
  { id: 4, name: "Coffee", image: CoffeeIcon },
  { id: 5, name: "Meals", image: LunchIcon },
];

const ProductListView = ({ size, horizontal, didSelectItem }) => {
  return (
    <FlatList
      horizontal={horizontal ? true : false}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={(item) => (
        <FoodCard
          size={size}
          data={item}
          onSelect={(item) => didSelectItem(item)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductListView;
