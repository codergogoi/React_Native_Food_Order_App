import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import SearchBar from "../components/SearchBar";
import TopCategory from "../components/TopCategoryList";
import TopFoodList from "../components/Listview/ProductListView";
import { navigate } from "../utils/NavigationRef";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import HambarIcon from "../images/hambar.png";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native-elements";

//Context
import { Context as UserContext } from "../context/userAccessContext";

const HomeScreen = ({ navigation }) => {
  const { state, onCheckAvailability, onCheckLogin } = useContext(UserContext);

  const { products } = state;

  /**
   * LifeCycle Methoda
   */
  useEffect(() => {
    onCheckAvailability();
  }, []);

  /**
   * USER Actions
   */
  const didTapOptions = () => {
    console.log("Show Options");
  };

  const goToSearchPage = () => {
    if (products) {
      navigate("Search", products);
    }
  };

  const didSelectItem = (item) => {
    navigate("ProductDetail", item);
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
          <View style={styles.choiceView}>
            <Text h4 style={styles.choiceText}>
              Popular Choice
            </Text>
          </View>
          <TopFoodList
            products={products}
            size={"medium"}
            horizontal={true}
            didSelectItem={didSelectItem}
          />
          <View style={styles.choiceView}>
            <Text h4 style={styles.choiceText}>
              30 Minutes Foods
            </Text>
          </View>
          <TopFoodList
            products={products}
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
  choiceView: {
    height: 40,
    marginLeft: 10,
    marginRight: 30,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 0.2,
    justifyContent: "flex-start",
  },
  choiceText: {
    fontWeight: "700",
    color: "#f15b5d",
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
