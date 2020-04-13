import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Text, Rating } from "react-native-elements";

const deviceWidth = Math.round(Dimensions.get("window").width);

const FoodCard = ({ size, data, onSelect }) => {
  const { name, image, description, price } = data.item;

  const mediumCard = () => {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={(data) => onSelect(data)}>
          <Image style={styles.foodImage} source={image} />
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>
      </View>
    );
  };

  const smallCard = () => {
    return (
      <TouchableOpacity
        style={smallStyles.smallCard}
        onPress={(data) => onSelect(data)}
      >
        <Image style={smallStyles.foodImageSmall} source={image} />
        <View style={smallStyles.productInfo}>
          <Text style={smallStyles.title}>{name}</Text>
          <Text style={smallStyles.resturentTitle}> Western Foods</Text>
          <Rating
            style={smallStyles.rating}
            type="heart"
            readonly
            ratingCount={5}
            imageSize={20}
          />
          <Text style={smallStyles.price}>$ 2.99</Text>
        </View>
      </TouchableOpacity>
    );
  };

  switch (size) {
    case "small": // wide card
      return smallCard();
    case "medium": // medium card
      return mediumCard();
    case "big": // details card
      break;
    default:
      return mediumCard();
  }
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
    height: 250,
    width: deviceWidth - 40,
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

const smallStyles = StyleSheet.create({
  smallCard: {
    flex: 1,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resturentTitle: {
    fontSize: 18,
    fontWeight: "400",
    display: "flex",
    color: "#565555",
  },
  price: {
    fontSize: 18,
    fontWeight: "400",
    display: "flex",
    color: "#EA5656",
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
    flex: 1,
    padding: 5,
    justifyContent: "space-around",
  },
});

export default FoodCard;
