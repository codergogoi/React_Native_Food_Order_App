import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Text, Rating } from "react-native-elements";
import AppButton from "../Buttons/AppButton";

const deviceWidth = Math.round(Dimensions.get("window").width);

const FoodCard = ({ size, data, onSelect, disable = false }) => {
  const { name, image, description, price } = data.item;

  // {"_id":"5e9174d968dffe0b8ac55819","name":"Burger","description":"Extra cheesy Burger for you with extra combo","category":"burger","price":2.5,"image":"https://media1.s-nbcnews.com/j/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.fit-2000w.jpg","__v":0}

  const mediumCard = () => {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={() => onSelect(data)}>
          <Image style={styles.foodImage} source={{ uri: image }} />
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>
      </View>
    );
  };

  const smallCard = () => {
    return (
      <TouchableOpacity
        style={smallStyles.smallCard}
        onPress={() => onSelect(data)}
        disabled={disable}
      >
        <Image style={smallStyles.foodImageSmall} source={{ uri: image }} />
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
          <Text style={smallStyles.price}>{price}</Text>
        </View>
        <View style={smallStyles.shopView}>
          <Text style={smallStyles.productSize}>Large</Text>
          <AppButton title="Buy" width={100} />
        </View>
      </TouchableOpacity>
    );
  };

  switch (size) {
    case "small": // wide card
      return smallCard();
    case "medium": // medium card
      return mediumCard();
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
    height: 220,
    width: deviceWidth - 30,
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
  shopView: {
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  productSize: {
    fontSize: 20,
    fontWeight: "600",
    color: "#848484",
  },
});

export default FoodCard;
