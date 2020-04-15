import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const AddRemoveButton = ({ title, onTap, width = 32 }) => {
  return (
    <Button
      type="outline"
      buttonStyle={[styles.button, { width: width }]}
      title={title}
      onPress={onTap}
      titleStyle={styles.titleStyle}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#f15b5d",
  },

  button: {
    width: 50,
    height: 50,
    borderColor: "#f15b5d",
    borderWidth: 0.3,
    alignSelf: "center",
    borderRadius: 5,
  },
});

export default AddRemoveButton;
