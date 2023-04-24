import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StarRating from "react-native-star-rating";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ name, doctorType, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.doctorType}>{doctorType}</AppText>
        <View style={styles.ratingContainer}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={4}
            starSize={17}
            fullStarColor={colors.gold}
            emptyStarColor={colors.gold}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    marginBottom: 10,
    fontWeight:"600"

  },
  doctorType: {
    color: colors.gray,
    fontWeight: "bold",
    fontSize: "12",

  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
});

export default Card;
