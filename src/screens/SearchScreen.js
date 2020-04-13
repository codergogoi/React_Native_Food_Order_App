import React, { useContext } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import SearchBar from "../components/SearchBar";

import BackIcon from "../images/back_arrow.png";
import { TouchableOpacity } from "react-native-gesture-handler";

import FoodListView from "../components/Listview/ProductListView";

const SearchScreen = ({ navigation }) => {
  const didTapBack = () => {
    navigation.goBack();
  };

  const onTapItem = (item) => {
    console.log(`Selected Item: ${item}`);
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View>
        <View style={styles.searchOptions}>
          <TouchableOpacity onPress={() => didTapBack()}>
            <Image style={styles.imgIcon} source={BackIcon} />
          </TouchableOpacity>
          <SearchBar />
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

SearchScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

export default SearchScreen;
