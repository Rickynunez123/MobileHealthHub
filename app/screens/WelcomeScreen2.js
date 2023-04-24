import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

/*  The first parameter is the amount of red, the second parameter is the 
    amount of green, the third parameter is the amount of blue, and the fourth 
    parameter is the opacity level. The range of each parameter is from 0 to 255, 
    and the range of the opacity level is from 0 to 1. 
*/

function WelcomeScreen2(props) {
  // To set the screen dimensions
  const { height, width } = Dimensions.get("window");

  return (
    <LinearGradient
      colors={[
        "rgba(131,58,180,1)",
        "rgba(253,29,29,0.9)",
        "rgba(252,176,69,1)",
      ]}
      style={[styles.container, { height, width }]}
    >

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "transparent",
    padding: 20,
    borderRadius: 10,
  },
});

export default WelcomeScreen2;
