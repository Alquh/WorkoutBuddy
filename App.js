import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
//import { androidClientId, iosClientId } from './superSecretKey';
import * as Expo from 'expo'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LinksScreen from './screens/LinksScreen'
import firebase from 'firebase'
import { firebaseConfig } from './config'
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return  <AppNavigator />;
    }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  HomeScreen: HomeScreen,
  LinksScreen: LinksScreen
});

const AppNavigator = createAppContainer
(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})