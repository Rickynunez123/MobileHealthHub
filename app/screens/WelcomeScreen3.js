import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import video from "../assets/videos/world.mp4";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen3(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
     <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/flower-spa-icon.png")}
        />
        <Text style={styles.logoText}>Here To Help You</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="white" text="black" />
        <AppButton
          title="Sign Up"
          text="white"
          onPress={() => console.log("Tapped")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

export default WelcomeScreen3;
