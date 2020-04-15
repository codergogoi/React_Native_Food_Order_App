import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";
import AppButton from "../components/Buttons/AppButton";
import BackIcon from "../images/back_arrow.png";
import { navigate } from "../utils/NavigationRef";
import ProductListView from "../components/Listview/ProductListView";

const screenWidth = Dimensions.get("window").width;

const ProductDetailScreen = ({ navigation }) => {
  const { state } = navigation;

  const { name, image, description, price } = state.params;

  const onTapAddToCard = () => {};

  const didTapBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: "always" }}>
      <View style={styles.titleView}>
        <TouchableOpacity onPress={() => didTapBack()}>
          <Image style={styles.imgIcon} source={BackIcon} />
        </TouchableOpacity>
        <Text h4 style={{ flex: 1, textAlign: "center", marginRight: 40 }}>
          {name}
        </Text>
      </View>
      <View style={styles.listView}>
        <ImageBackground
          source={{
            uri: image,
          }}
          style={styles.coverImage}
        >
          <View style={styles.foodInfo}>
            <Text h3 style={styles.foodTitle}>
              {name}
            </Text>
            <Text style={styles.foodDetails}>{description}</Text>
          </View>
        </ImageBackground>
        <ProductListView size="small" disable={true} />
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
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listView: {
    flex: 11,
  },
  coverImage: {
    width: screenWidth,
    height: 300,
    justifyContent: "flex-end",
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

  amountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
  },
  foodTitle: {
    color: "white",
    fontWeight: "700",
  },
  foodInfo: {
    height: 120,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
  },
  foodDetails: {
    fontSize: 18,
    color: "white",
    fontWeight: "400",
  },
});

ProductDetailScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

export default ProductDetailScreen;
