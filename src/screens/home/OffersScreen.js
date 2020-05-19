import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";

import FoodListView from "../../components/Listview/ProductListView";

const OfferScreen = ({ navigation }) => {
  const onTapItem = (item) => {
    console.log(`Selected Item: ${item}`);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "#F2F2F2" }}
      forceInset={{ top: "always" }}
    >
      <View>
        <View style={styles.searchOptions}>
          <Text h4> Available Offers</Text>
        </View>
        <FoodListView
          style={{ flex: 1 }}
          size={"small"}
          didSelectItem={onTapItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

OfferScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

export default OfferScreen;
