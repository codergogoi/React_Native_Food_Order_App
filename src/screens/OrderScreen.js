import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";

const OrderScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.locationView}>
        <Text> Delivering to</Text>
      </View>
      <Text h2> OrderScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  locationView: {
    flexDirection: "row",
  },
});

export default OrderScreen;
