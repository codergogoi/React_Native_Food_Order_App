import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";

import { Context as UserAccessConext } from '../context/userAccessContext';

const AccountScreen = () => {

  const { } = useContext(UserAccessConext);

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: "always" }}>
      <View style={styles.titleView}>
        <View style={styles.profileView}>
          <Image
            source={{
              uri: "https://avatars1.githubusercontent.com/u/7048105?s=460&v=4",
            }}
            style={styles.imageStyle}
          />
          <View style={{ marginLeft: 10 }}>
            <Text h4 style={{ color: "#383838" }}>
              Jayanta Gogoi
            </Text>
            <Text style={{ color: "#7B7B7B" }}>codergogoi@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.listView}></View>
      <View style={styles.bottomView}>
        <Button
          type="clear"
          titleStyle={styles.titleStyle}
          style={styles.signoutButton}
          title="Signout"
        ></Button>
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
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listView: {
    flex: 9,
    backgroundColor: "white",
  },
  bottomView: {
    flex: 1,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileView: {
    margin: 10,
    padding: 10,
    flex: 1,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },

  signoutButton: {
    marginTop: 7,
    width: 300,
    height: 50,
    backgroundColor: "#A3A2A2",
    alignSelf: "center",
    borderRadius: 30,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginTop: 3,
  },
});

export default AccountScreen;
