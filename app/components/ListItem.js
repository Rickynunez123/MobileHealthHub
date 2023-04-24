import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

//List item is the same as card2 but without the stars and the margin 

function ListItem({ name, doctorType, image, onPress }) {
  return (
    <TouchableHighlight 
    style={styles.card} 
    onPress={onPress}
    underlayColor={colors.ultraLightGray}
    >
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.doctorType}>{doctorType}</AppText>
      </View>
    </View>
    </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    padding: 15,
    overflow: "hidden",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 20,
  },
  container: {
    flexDirection: "row",
  },
  name: {
    marginBottom: 10,
    fontWeight: "600",
  },
  doctorType: {
    color: colors.gray2,
    fontSize: "13",
    fontWeight: "400",
  },

  ratingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
});

export default ListItem;
