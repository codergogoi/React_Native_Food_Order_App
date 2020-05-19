import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import AppButton from "../Buttons/AppButton";
import { navigate } from "../../utils/NavigationRef";

const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const UserLogin = ({ onSubmit, route, linkText, title, isSignup = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const addSignUpFields = () => {
    if (isSignup) {
      return (
        <View>
          <Spacer>
            <Input
              placeholder="First Name"
              autoCapitalize={false}
              autoCorrect={false}
              onChangeText={setFirstName}
            />
          </Spacer>

          <Spacer>
            <Input
              placeholder="Last Name"
              autoCapitalize={false}
              autoCorrect={false}
              onChangeText={setLastName}
            />
          </Spacer>
        </View>
      );
    }
  };

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
      {addSignUpFields()}
      <Spacer />
      <AppButton
        height={50}
        title={title}
        onTap={() => onSubmit({ email, password, firstName, lastName })}
      />
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
