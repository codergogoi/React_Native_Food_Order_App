import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import SearchBar from "../components/SearchBar";
import TopCategory from "../components/TopCategoryList";
import TopFoodList from "../components/Listview/ProductListView";
import { navigate } from "../utils/NavigationRef";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import HambarIcon from "../images/hambar.png";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  /**
   * USER Actions
   */
  const didTapOptions = () => {
    console.log("Show Options");
  };

  const goToSearchPage = () => {
    navigate("Search", null);
  };

  const didSelectItem = (item) => {
    console.log(`Selected ${item}`);
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View>
        <View style={styles.searchOptions}>
          <SearchBar didTouch={() => goToSearchPage()} isHome={true} />
          <TouchableOpacity onPress={() => didTapOptions()}>
            <Image style={styles.imgIcon} source={HambarIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopCategory style={styles.topCategory} />
          <TopFoodList
            size={"medium"}
            horizontal={true}
            didSelectItem={didSelectItem}
          />
          <TopFoodList
            size={"medium"}
            horizontal={true}
            didSelectItem={didSelectItem}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgIcon: {
    width: 50,
    height: 30,
  },
  searchOptions: {
    display: "flex",
    height: 60,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  topCategory: {
    height: 100,
    backgroundColor: "green",
  },
});

HomeScreen.navigationOptions = () => {
  return {
    header: null,
    tabBarLabel: "MyHome",
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    ),
  };
};

export default HomeScreen;
