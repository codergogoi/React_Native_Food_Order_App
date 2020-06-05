import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, Input } from 'react-native-elements';
import { Context as UserContext } from '../../dataStore/userAccessContext';
import UserLogin from '../../components/InputFields/UserLogin';
import Overlay from '../../components/Overlay';

const SignupScreen = () => {
  const { state, onSignup } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const { msg } = state;

  useEffect(() => {
    setIsLoading(false);
  }, [msg]);

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: 'always' }}>
      <Overlay isShow={isLoading} />
      <View style={styles.titleView}>
        <Text h4> Signup</Text>
      </View>
      <View style={styles.listView}>
        <UserLogin
          isSignup={true}
          onSubmit={({ email, password, firstName, lastName }) => {
            setIsLoading(true);
            onSignup({ email, password, firstName, lastName });
          }}
          route="Signin"
          linkText="Already Registred? Login Here"
          title="Sign up"
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

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
