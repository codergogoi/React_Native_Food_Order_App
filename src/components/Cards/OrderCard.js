import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Text, Rating } from "react-native-elements";
import moment from "moment";
import WaitingIcon from "../../images/orders.png";
import AppButton from "../Buttons/AppButton";

const deviceWidth = Math.round(Dimensions.get("window").width);

const OrderCard = ({ data, onSelect, onCancel }) => {
  const {
    orderID,
    totalAmount,
    orderDate,
    paidThrough,
    orderStatus,
    items,
  } = data.item;

  return (
    <TouchableOpacity
      style={smallStyles.smallCard}
      onPress={(data) => onSelect(data)}
    >
      <View style={smallStyles.productInfo}>
        <View
          style={{
            flex: 6,
            padding: 5,
            paddingLeft: 20,
          }}
        >
          <Text style={smallStyles.title}>Order ID: {orderID}</Text>
          <Text style={smallStyles.orderDateTitle}>
            {moment(orderDate).format("MMM Do, h:mm a")}
          </Text>
          <Text style={smallStyles.price}>₹{totalAmount}</Text>
        </View>
        <View
          style={{
            flex: 6,
            justifyContent: "space-around",
            padding: 5,
            flexDirection: "row",
          }}
        >
          <Image source={WaitingIcon} style={smallStyles.statusOnGoing} />
          <AppButton
            title={"Cancel"}
            width={100}
            height={50}
            onTap={onCancel}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  orderDateTitle: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "400",
    display: "flex",
    color: "#565555",
  },
  price: {
    fontSize: 25,
    fontWeight: "600",
    display: "flex",
    color: "#EA5656",
    marginTop: 5,
  },
  statusOnGoing: {
    height: 60,
    width: 60,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
  },
  statusCompleted: {
    height: 80,
    width: 80,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
  },

  rating: {
    alignSelf: "flex-start",
  },
  productInfo: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default OrderCard;
