import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Input } from "react-native-elements";
import AppButton from "../components/Buttons/AppButton";
import { Context as UserContext } from "../context/userAccessContext";
import UserLogin from "../components/UserLogin";

const SigninScreen = () => {
  const { onSignin } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: "always" }}>
      <View style={styles.titleView}>
        <Text h4> Signin</Text>
      </View>
      <View style={styles.listView}>
        <UserLogin
          onSubmit={onSignin}
          route="Signup"
          linkText="New User? Signup Here"
          title="Sign In"
        />
      </View>
      <View style={styles.bottomView}>
        <Text style={{ color: "#A7A6A6" }}>Copywrite 2020 @ Jayanta Gogoi</Text>
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
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  listView: {
    paddingTop: 50,
    flex: 6,
  },
  bottomView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
