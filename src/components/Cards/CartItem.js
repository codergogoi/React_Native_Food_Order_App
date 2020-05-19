import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Text, Badge, Button } from "react-native-elements";

import ButtonAddRemove from "../Buttons/AddRemoveButton";

const CartItem = ({ data, onAddItem, onRemoveItem }) => {
  const { food, qty } = data.item;
  const { name, category, description, price } = food;

  let currentQty = qty;

  return (
    <View style={styles.smallCard}>
      <View style={styles.productInfo}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.resturentTitle}>
          {category.toString().toUpperCase()}
        </Text>
        <Text style={styles.foodDescription}>{description}</Text>
      </View>
      <View style={styles.priceView}>
        <Text style={styles.price}>₹{price}</Text>
        <View style={styles.countView}>
          <ButtonAddRemove
            title="-"
            onTap={() => onAddItem(food, --currentQty)}
          />

          <Text
            h4
            style={{ alignSelf: "center", margin: 5, fontWeight: "600" }}
          >
            {currentQty}
          </Text>
          <ButtonAddRemove
            title="+"
            onTap={() => onRemoveItem(food, ++currentQty)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  smallCard: {
    flex: 1,
    minHeight: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "300",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resturentTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 4,
    display: "flex",
    color: "#565555",
  },
  foodDescription: {
    fontSize: 16,
    fontWeight: "300",
    display: "flex",
    color: "#565555",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    display: "flex",
    color: "#EA5656",
    alignSelf: "center",
  },
  foodImageSmall: {
    borderRadius: 10,
    height: 99,
    width: 99,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#581845",
    alignSelf: "center",
  },
  rating: {
    alignSelf: "flex-start",
  },
  productInfo: {
    flex: 9,
    justifyContent: "space-around",
  },

  priceView: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  countView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 8,
  },
  badge: {
    backgroundColor: "green",
  },
  //Button
  btnAddRemove: {
    borderColor: "#f15b5d",
    borderRadius: 5,
    borderWidth: 0.5,
  },
  btnTitleStyle: {
    color: "#f15b5d",
  },
});

export default CartItem;
