import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";
import OrderListView from "../../components/Listview/OrderListView";
import BackIcon from "../../images/back_arrow.png";
import moment from "moment";

import { Context as UserContext } from "../../dataStore/userAccessContext";

const OrderDetails = ({ navigation }) => {
  const { state } = useContext(UserContext);

  const { orderItems } = state;

  const didTapBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: "always" }}>
      <View style={styles.titleView}>
        <TouchableOpacity onPress={() => didTapBack()}>
          <Image style={styles.imgIcon} source={BackIcon} />
        </TouchableOpacity>
        <Text h4 style={{ flex: 1, textAlign: "center", marginRight: 40 }}>
          Order ID: {orderItems.orderID}
        </Text>
      </View>
      <View style={styles.listView}>
        <View
          style={{
            paddingLeft: 20,
            justifyContent: "space-around",
            height: 100,
          }}
        >
          <Text style={styles.details}>
            Order Date:
            {moment(orderItems.orderDate).format("MMM Do, h:mm a")}
          </Text>
          <Text style={styles.details}>
            Order Amount: {orderItems.totalAmount}
          </Text>
          <Text style={styles.details}>Status: {orderItems.orderStatus}</Text>
        </View>
        <OrderListView orders={orderItems.items} details={true} />
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
    justifyContent: "center",
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
    width: 40,
    height: 50,
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
  details: {
    fontSize: 20,
    color: "#4D4B4B",
  },
});

OrderDetails.navigationOptions = () => {
  return {
    header: null,
  };
};

export default OrderDetails;
