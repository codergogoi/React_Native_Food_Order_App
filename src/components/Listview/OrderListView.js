import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import OrderCard from "../Cards/OrderCard";
import FoodCard from "../Cards/FoodCard";

const OrderListView = ({
  orders,
  size,
  horizontal,
  didSelectItem,
  onCancel,
  disable,
  details,
}) => {
  return (
    <FlatList
      horizontal={horizontal ? true : false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={orders}
      renderItem={(item, i) =>
        details ? (
          <FoodCard
            key={`${i}`}
            size={"small"}
            data={item}
            canAdd={false}
            disable={true}
          />
        ) : (
          <OrderCard
            key={`${i}`}
            size={size}
            data={item}
            disable={disable}
            onSelect={() => didSelectItem(item)}
            onCancel={() => onCancel(item)}
          />
        )
      }
      keyExtractor={(item) => item._id}
    />
  );
};

export default OrderListView;
