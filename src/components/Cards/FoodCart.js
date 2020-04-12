import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

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
        style={styles.smallCard}
        onPress={(data) => onSelect(data)}
      >
        <Image style={styles.foodImageSmall} source={image} />
        <Text style={styles.title}>{name}</Text>
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
  smallCard: {
    flex: 1,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },

  foodImageSmall: {
    borderRadius: 20,
    height: 80,
    width: 100,
    backgroundColor: "red",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#581845",
  },
});

export default FoodCard;
