import { React, Component } from 'react';
import { Text } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import { androidClientId, iosClientId } from "../superSecretKey";


class Google extends Component {

  state = { user: null };

  componentDidMount() {
    this.initAsync();
  }

  initAsync = async () => {
	  try {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
	  iosClientId: iosClientId,
	  androidClientId: androidClientId,
	  //scopes: ["profile", "email"],
	});
	} catch ({ message }) {
  alert('GoogleSignIn.initAsync(): ' + message);
}
    this._syncUserWithStateAsync();
  };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    this.setState({ user });
  };

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    this.setState({ user: null });
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  onPress = () => {
    if (this.state.user) {
      this.signOutAsync();
    } else {
      this.signInAsync();
    }
  };

  render() {
    return <Text onPress={this.onPress}>Toggle Auth</Text>;
  }
}
export default Google;