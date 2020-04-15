import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import AppButton from "./Buttons/AppButton";
import { navigate } from "../utils/NavigationRef";

const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const UserLogin = ({ onSubmit, route, linkText, title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Spacer>
        <Input
          placeholder="Email ID"
          autoCapitalize={false}
          autoCorrect={false}
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer>
        <Input
          placeholder="Password"
          secureTextEntry
          autoCapitalize={false}
          autoCorrect={false}
          onChangeText={setPassword}
        />
      </Spacer>
      <Spacer />
      <AppButton title={title} onTap={() => onSubmit({ email, password })} />
      <Spacer>
        <Button
          titleStyle={styles.titleStyle}
          type="clear"
          title={linkText}
          onPress={() => navigate(route)}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  txtInputView: {
    marginTop: 10,
    marginBottom: 10,
  },
  spacer: {
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "400",
    color: "#f15b5d",
  },
});

export default UserLogin;
