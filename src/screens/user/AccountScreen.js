import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Button } from "react-native-elements";
import ArrowIcon from "../../images/arrow_icon.png";

import { Context as UserAccessConext } from "../../dataStore/userAccessContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { navigate } from "../../utils/NavigationRef";

const AccountScreen = () => {
  const { onLogout } = useContext(UserAccessConext);

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
      <View style={styles.listView}>
        {/* view Orders */}
        <TouchableOpacity onPress={() => navigate("Order")}>
          <View style={styles.options}>
            <Text style={styles.optionsText}>View Orders</Text>
            <Image source={ArrowIcon} style={styles.icon} />
          </View>
        </TouchableOpacity>
        {/* View Payment Methods */}
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Payment Options</Text>
            <Image source={ArrowIcon} style={styles.icon} />
          </View>
        </TouchableOpacity>
        {/* Edit Profile */}
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Edit Profile</Text>
            <Image source={ArrowIcon} style={styles.icon} />
          </View>
        </TouchableOpacity>
        {/* Contact Us */}
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Contact Support</Text>
            <Image source={ArrowIcon} style={styles.icon} />
          </View>
        </TouchableOpacity>
        {/* Logout */}
        <TouchableOpacity onPress={onLogout}>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Signout</Text>
            <Image source={ArrowIcon} style={styles.icon} />
          </View>
        </TouchableOpacity>
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
  icon: {
    width: 40,
    height: 40,
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
  options: {
    display: "flex",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    borderTopColor: "#DFDFDF",
    borderTopWidth: 0.5,
    borderBottomColor: "#DFDFDF",
    borderBottomWidth: 0.5,
  },
  optionsText: {
    fontSize: 18,
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
