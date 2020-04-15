import React from "react";
import { navigate } from "../utils/NavigationRef";
import { View, StyleSheet, Image, TextInput } from "react-native";

import SearchIcon from "../images/search.png";

const SearchBar = ({ didTouch, isHome }) => {
  return (
    <View style={styles.root}>
      <View style={styles.searchBar}>
        <Image style={styles.searchIcon} source={SearchIcon} />
        <TextInput
          style={styles.searchTextField}
          placeholderTextColor={"#939395"}
          placeholder={"Search Foods"}
          onTouchStart={didTouch}
          autoFocus={!isHome}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchBar: {
    flex: 1,
    height: 42,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ededed",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#E5E5E5",
    borderWidth: 2,
  },

  searchIcon: {
    width: 25,
    height: 25,
  },
  searchTextField: {
    marginLeft: 5,
    flex: 9,
    display: "flex",
    fontSize: 20,
    height: 42,
  },
});

export default SearchBar;
