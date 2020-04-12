import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import BurgerIcon from "../images/burger_icon.jpg";

const CategoryItem = ({ data }) => {
  const { name, image } = data.item;

  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <Image style={styles.foodImage} source={image} />
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
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
  foodImage: {
    borderRadius: 20,
    height: 100,
    width: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#581845",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
    color: "#636363",
  },
});

export default CategoryItem;
