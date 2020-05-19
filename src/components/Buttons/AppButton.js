import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const AppButton = ({ title, onTap, width = 300, height = 40 }) => {
  return (
    <Button
      type="clear"
      buttonStyle={[styles.button, { width: width, height: height }]}
      title={title}
      onPress={onTap}
      titleStyle={styles.titleStyle}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    fontWeight: "300",
    color: "white",
  },

  button: {
    width: 300,
    height: 40,
    backgroundColor: "#f15b5d",
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default AppButton;
