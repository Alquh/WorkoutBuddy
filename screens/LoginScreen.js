import React, { Component } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { androidClientId, iosClientId } from '../superSecretKey'

class LoginScreen extends Component {

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior:'web',
        androidClientId: androidClientId,
        iosClientId: iosClientId,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
        <Button title='Sign in with Google' onPress={() => this.signInWithGoogleAsync()}/>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});