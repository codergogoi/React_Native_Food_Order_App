import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, Input } from 'react-native-elements';
import { Context as UserContext } from '../../dataStore/userAccessContext';
import UserLogin from '../../components/InputFields/UserLogin';
import Overlay from '../../components/Overlay';

const SigninScreen = () => {
  const { state, onSignin, onDissmiss } = useContext(UserContext);

  const { msg } = state;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    showAlert();
    setIsLoading(false);
  }, [msg]);

  const showAlert = () => {
    if (msg !== null) {
      Alert.alert(
        'Login',
        `${msg}`,
        [{ text: 'Okay', onPress: () => onDissmiss }],
        {
          cancelable: false,
        }
      );
    }
  };

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: 'always' }}>
      <Overlay isShow={isLoading} />
      <View style={styles.titleView}>
        <Text h4> Signin</Text>
      </View>
      <View style={styles.listView}>
        <UserLogin
          onSubmit={({ email, password }) => {
            setIsLoading(true);
            onSignin({ email, password });
          }}
          route="Signup"
          linkText="New User? Signup Here"
          title="Sign In"
        />
      </View>
      <View style={styles.bottomView}>
        <Text style={{ color: '#A7A6A6' }}>Copyright@ Jayanta Gogoi 2020 </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentView: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    justifyContent: 'space-between',
  },
  titleView: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  listView: {
    paddingTop: 50,
    flex: 6,
  },
  bottomView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
