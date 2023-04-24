import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
// rsf

function AppButton({ title, onPress, color = "softBlack", text = "black" }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color] },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[text] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 70,
    backgroundColor: colors.black,
    borderRadius: 50,
    opacity: 0.6,
    marginRight: 20, // Add margin to the container
    marginLeft: 20, // Add margin to the container
    borderWidth: 3,
    borderColor: "#00000",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    fontFamily: "Arial",
    fontSize: 30,
    color: colors.black,
    // shadowColor: "#000000",
    // shadowOffset: { width: 5, height: 5},
    // shadowOpacity: 1,
  },
});
export default AppButton;
