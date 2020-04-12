import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

/**
 * Screens
 */

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
  homeStack: createBottomTabNavigator({
    Home: createStackNavigator({
      TopProducts: HomeScreen,
      Search: SearchScreen,
      ProductDetail: ProductDetailScreen,
    }),
    Offer: OfferScreen,
    Cart: createStackNavigator({
      Shoping: CartScreen,
      Order: OrderScreen,
      Payment: PaymentScreen,
    }),
    Account: AccountScreen,
  }),
  loginStack: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  );
};
