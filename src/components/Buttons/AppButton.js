import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const AppButton = ({ title, onTap, width = 300 }) => {
  return (
    <Button
      type="clear"
      buttonStyle={[styles.button, { width: width }]}
      title={title}
      onPress={onTap}
      titleStyle={styles.titleStyle}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginTop: 3,
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: "#f15b5d",
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default AppButton;
