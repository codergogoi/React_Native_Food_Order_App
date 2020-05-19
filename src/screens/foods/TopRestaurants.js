import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Restaurant from "../../components/Cards/Restaurant";

const TopRestaurants = ({
  restaurants,
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
      data={restaurants}
      renderItem={(item) => (
        <Restaurant
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

export default TopRestaurants;
