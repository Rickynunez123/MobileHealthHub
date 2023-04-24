import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/flower-spa-icon.png")}
        />
        <Text style={styles.logoText}>Here To Help You</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="white" text="black" />
        <AppButton title="Sign Up" text="white" onPress={() => console.log("Tapped")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logoText: {
    fontFamily: "Arial",
    fontSize: 30,
    marginTop: 10,
  },
});

export default WelcomeScreen;
