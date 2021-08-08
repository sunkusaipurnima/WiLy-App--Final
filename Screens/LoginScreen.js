/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import firebase from "firebase";
import db from "../config";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const bgImg = require("../assets/background2.png");
  const appIcon = require("../assets/appIcon.png");
  const appName = require("../assets/appName.png");
  const handleLogin = async () => {
    console.log("inside handleLogin ");
    if (!email) {
      Alert.alert("Email is required");
    }
    if (!password) {
      Alert.alert("Password is requied");
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("BottomTab");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  return (
    <ImageBackground source={bgImg} style={styles.bgImage}>
      <View style={styles.upperContainer}>
        <Image source={appIcon} style={styles.appIcon} />
        <Image source={appName} style={styles.appName} />
      </View>

      <View style={styles.lowerContainer}>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder={"Enter Email"}
          placeholderTextColor={"#FFFFFF"}
          autoFocus
        />
        <TextInput
          style={[styles.textinput, { marginTop: 20 }]}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder={"Enter Password"}
          placeholderTextColor={"#FFFFFF"}
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => handleLogin(email, password)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  appIcon: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    marginTop: 80,
  },
  appName: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  lowerContainer: {
    flex: 0.5,
    marginTop: 40,
    alignItems: "center",
  },
  textinput: {
    width: "75%",
    height: 55,
    padding: 10,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
    backgroundColor: "#5653D4",
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
  },
});

export default LoginScreen;
