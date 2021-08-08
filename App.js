/** @format */

import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./Screens/LoginScreen";
import BottomTabNavigator from "./Components/BottomTabNavigator";

const Stack = createStackNavigator();

const App = (props) => {
  const [fontLoaded] = useFonts({ Rajdhani_600SemiBold });

  if (fontLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
};

const styles = StyleSheet.create({});

export default App;
