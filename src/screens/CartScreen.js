import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";

import CartListView from "../components/Listview/CartListView";

const CartScreen = ({ navigation }) => {
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
      </View>
      <View style={styles.listView}>
        <CartListView didChangeItems={didChangeItems} />
      </View>
      <View style={styles.bottomView}>
        <View style={styles.amountDetails}>
          <Text style={{ fontSize: 18 }}> Total</Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}> $200.00</Text>
        </View>
        <Button
          type="clear"
          titleStyle={styles.titleStyle}
          style={styles.orderButton}
          title="Order Now"
          loading={isLoading}
          onPress={didTapOrderNow}
        ></Button>
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
  orderButton: {
    width: 300,
    height: 50,
    backgroundColor: "#FD5A5A",
    alignSelf: "center",
    borderRadius: 30,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginTop: 3,
  },
  amountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
  },
});

CartScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

export default CartScreen;

/*
<View>
        <View style={styles.searchOptions}>
          
        </View>
        
        <View>
          
        </View>
      </View>*/
