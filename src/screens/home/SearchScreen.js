import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import SearchBar from "../../components/InputFields/SearchBar";
import BackIcon from "../../images/back_arrow.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { navigate } from "../../utils/NavigationRef";
import FoodListView from "../../components/Listview/ProductListView";

import { Context as UserContext } from "../../dataStore/userAccessContext";

const SearchScreen = ({ navigation }) => {
  const { state, onCheckAvailability } = useContext(UserContext);

  const { foods, restaurants } = state;

  const [isEditing, setIsEditing] = useState(false);
  const [keyword, setKeyword] = useState("");

  const didTapBack = () => {
    navigation.goBack();
  };

  const onTapItem = (item) => {
    navigate("ProductDetail", item);
  };

  useEffect(() => {
    onCheckAvailability({ searchAll: true });
  }, []);

  const onTextChange = (text) => {
    setIsEditing(true);
    setKeyword(text);
  };

  const onEndEditing = () => {
    setIsEditing(false);
  };

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: "always" }}>
      <View style={styles.titleView}>
        <View style={styles.searchOptions}>
          <TouchableOpacity onPress={() => didTapBack()}>
            <Image style={styles.imgIcon} source={BackIcon} />
          </TouchableOpacity>
          <SearchBar onTextChange={onTextChange} />
        </View>
      </View>
      <View style={styles.listView}>
        <FoodListView
          foods={
            isEditing
              ? foods.filter((item) => {
                  return item.name.includes(keyword);
                })
              : foods
          }
          style={{ flex: 1 }}
          size={"small"}
          didSelectItem={() => {}}
          didAddToCart={() => {}}
          didAddRemove={() => {}}
        />
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
