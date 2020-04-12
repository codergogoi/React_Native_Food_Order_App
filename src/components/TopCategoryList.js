import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import OfferIcon from "../images/offer.jpg";
import BurgerIcon from "../images/burger.jpg";
import PizzaIcon from "../images/pizza.jpg";
import CoffeeIcon from "../images/coffee.jpeg";
import LunchIcon from "../images/lunch.jpg";

const categories = [
  { id: 1, name: "Offers", image: OfferIcon },
  { id: 2, name: "Burgers", image: BurgerIcon },
  { id: 3, name: "Pizzas", image: PizzaIcon },
  { id: 4, name: "Coffee", image: CoffeeIcon },
  { id: 5, name: "Meals", image: LunchIcon },
];

const TopCategory = () => {
  onSelect = (item) => {
    console.log("Selected Item is", item);
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={(item) => <CategoryItem data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TopCategory;
