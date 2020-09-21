import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import Login from "./src/Login";
import Profile from "./src/Profile";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyCKGIchRk-lvSITqGD5jEA8P6XVsH5r9Os",
      authDomain: "auth-rn-f704e.firebaseapp.com",
      databaseURL: "https://auth-rn-f704e.firebaseio.com",
      projectId: "auth-rn-f704e",
      storageBucket: "auth-rn-f704e.appspot.com",
      messagingSenderId: "784656238102",
      appId: "1:784656238102:web:854bda6749e26cf7bc5737",
      measurementId: "G-MNSKM4SYKS",
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    alert("We don't know if we are connected to firebase yet");
  });

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#512df8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "400",
            letterSpacing: 4,
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
