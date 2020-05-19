import React, { useContext, useEffect, useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";

import CartListView from "../../components/Listview/CartListView";
import AppButton from "../../components/Buttons/AppButton";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Context as UserContext } from "../../dataStore/userAccessContext";
import { navigate } from "../../utils/NavigationRef";
import OrderIcon from "../../images/orders.png";
import PaymentTypePopup from "react-native-raw-bottom-sheet";
import ArrowIcon from "../../images/arrow_icon.png";

const CartScreen = ({ navigation }) => {
  const { state, onViewCart, onAddToCart, onCreateOrder } = useContext(
    UserContext
  );

  const { cartItems, orders } = state;

  const popupRef = useRef();

  useEffect(() => {
    console.log(orders);
    console.log("Goto Order Screen");
  }, [orders]);

  useEffect(() => {
    onViewCart();
  }, []);

  let isLoading = false;

  const didTapOrderNow = () => {
    isLoading = true;
    onCreateOrder();
  };

  const onAddItem = (item, qty) => {
    onAddToCart(item, qty);
  };

  const onRemoveItem = (item, qty) => {
    onAddToCart(item, qty);
  };

  const totalAmount = () => {
    let total = 0;
    if (cartItems !== undefined && cartItems.length > 0) {
      cartItems.map((item) => {
        let qty = item.qty;
        let price = item.food.price;
        total += qty * price;
      });
    }

    return total;
  };

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: "always" }}>
      <View style={styles.titleView}>
        <Text h4> My Cart</Text>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            navigate("Order");
          }}
        >
          <Image source={OrderIcon} style={styles.imgIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        {cartItems !== undefined && cartItems.length > 0 ? (
          <CartListView
            cartItems={cartItems}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        ) : (
          <View
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "500", color: "#9C9696" }}>
              Your Cart is Empty
            </Text>
          </View>
        )}
      </View>
      {cartItems !== undefined && cartItems.length > 0 && (
        <View style={styles.bottomView}>
          <View style={styles.amountDetails}>
            <Text style={{ fontSize: 18 }}> Total</Text>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              ₹ {totalAmount()}
            </Text>
          </View>
          <AppButton
            height={50}
            title="Order Now"
            onTap={() => popupRef.current.open()}
          />
        </View>
      )}
      <PaymentTypePopup
        ref={popupRef}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            justifyContent: "flex-start",
            alignItems: "center",
          },
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <View style={styles.amountDetails}>
            <Text style={{ fontSize: 18 }}> Total + (Delivery Charge ₹50)</Text>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              ₹ {totalAmount() + 50}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              popupRef.current.close();
              didTapOrderNow();
            }}
          >
            <View style={styles.options}>
              <Text style={styles.optionsText}>Cash On Delivery</Text>
              <Image source={ArrowIcon} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.options}>
              <Text style={styles.optionsText}>Pay Through Card</Text>
              <Image source={ArrowIcon} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.options}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#900C3F" }}
              >
                Change Delivery Address
              </Text>
              <Image source={ArrowIcon} style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>
      </PaymentTypePopup>
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
  options: {
    display: "flex",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    borderTopColor: "#DFDFDF",
    borderTopWidth: 0.5,
    borderBottomColor: "#DFDFDF",
    borderBottomWidth: 0.5,
  },
  optionsText: {
    fontSize: 18,
  },
  icon: {
    width: 40,
    height: 40,
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
