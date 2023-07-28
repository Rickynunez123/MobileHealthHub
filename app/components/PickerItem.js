import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

/* 
Whenever when the user clicks on an item, the item will be chose and displayed 
It uses a function that is on pressed that is delegated by AppPicker 
which will hide the modal to chose from the options and the item selected will be changed 
*/

function PickerItem({onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
