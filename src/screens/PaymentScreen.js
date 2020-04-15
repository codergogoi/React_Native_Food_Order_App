import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";

import CartListView from "../components/Listview/CartListView";
import AppButton from "../components/Buttons/AppButton";
import { TouchableOpacity } from "react-native-gesture-handler";

import OrderIcon from "../images/orders.png";

const PaymentScreen = ({ navigation }) => {
  const onTapItem = (item) => {
    console.log(`Selected Item: ${item}`);
  };

  let isLoading = false;

  const didTapOrderNow = () => {
    isLoading = true;
    console.log("isLoading");
  };

  const didChangeItems = (item) => {
    console.log(`API level Operation ${JSON.stringify(item)}`);
  };

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: "always" }}>
      <View style={styles.titleView}>
        <Text h4> My Cart</Text>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image source={OrderIcon} style={styles.imgIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <CartListView didChangeItems={didChangeItems} />
      </View>
      <View style={styles.bottomView}>
        <View style={styles.amountDetails}>
          <Text style={{ fontSize: 18 }}> Total</Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}> $200.00</Text>
        </View>
        <AppButton title="Order Now" onTap={didTapOrderNow} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentView: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    justifyContent: "space-between",
  },
  titleView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  listView: {
    flex: 9,
  },
  bottomView: {
    flex: 2,
  },

  imgIcon: {
    width: 60,
    height: 60,
  },
  searchOptions: {
    display: "flex",
    height: 60,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  topCategory: {
    height: 100,
    backgroundColor: "green",
  },

  amountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
  },
});

PaymentScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

export default PaymentScreen;
