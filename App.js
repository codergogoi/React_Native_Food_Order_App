import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

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
    Home: {
      screen: createStackNavigator({
        TopProducts: HomeScreen,
        Search: SearchScreen,
        ProductDetail: ProductDetailScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Ionicons name={"ios-home"} size={25} color={tintColor} />;
        },
      },
    },
    Offer: {
      screen: OfferScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Ionicons name={"ios-local-offer"} size={25} color={tintColor} />
          );
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
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = `account-star`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
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
        const iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    },
  },
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

/*
const iconimg = focused  ? 
              require('../active.png')  : 
              require('../inactive.png')
        return (
            <Image 
                source={iconimg}
                style={styles.tabIcon}
            />
        )
        */
