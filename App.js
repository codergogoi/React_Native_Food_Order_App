import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Image, StyleSheet } from "react-native";

import { Provider as UserProvider } from "./src/context/userAccessContext";

/**
 * Screens
 */
import AuthCheckScreen from "./src/screens/AuthCheckScreen";
import AccountScreen from "./src/screens/AccountScreen";
import CartScreen from "./src/screens/CartScreen";
import HomeScreen from "./src/screens/HomeScreen";
import OfferScreen from "./src/screens/OffersScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import { setNavigator } from "./src/utils/NavigationRef";
import OrderScreen from "./src/screens/OrderScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";

const switchNavigator = createSwitchNavigator({
  authCheck: AuthCheckScreen,
  homeStack: createBottomTabNavigator({
    Home: {
      screen: createStackNavigator({
        TopProducts: HomeScreen,
        Search: SearchScreen,
        ProductDetail: ProductDetailScreen,
      }),
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: "#f15b5d",
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./src/images/home_icon.png")
              : require("./src/images/home_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Offer: {
      screen: OfferScreen,
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: "#f15b5d",
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./src/images/offer_icon.png")
              : require("./src/images/offer_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Cart: {
      screen: createStackNavigator({
        Shoping: CartScreen,
        Order: OrderScreen,
        Payment: PaymentScreen,
      }),
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: "#f15b5d",
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require("./src/images/cart_icon.png")
              : require("./src/images/cart_n_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: "#f15b5d",
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let img =
            focused == true
              ? require("./src/images/account_icon.png")
              : require("./src/images/account_n_icon.png");
          return <Image source={img} style={styles.tabIcon} />;
        },
      },
    },
  }),
  loginStack: {
    screen: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen,
    }),
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        let icon =
          focused == true
            ? require("./src/images/account_icon.png")
            : require("./src/images/account_n_icon.png");
        return <Image source={icon} style={styles.tabIcon} />;
      },
    },
  },
});

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <UserProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </UserProvider>
  );
};
