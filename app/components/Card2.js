import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StarRating from "react-native-star-rating";

import AppText from "./AppText";
import colors from "../config/colors";

function Card2({ name, doctorType, image }) {
  return (
    <View style={styles.card}>
    <View style={styles.container}>
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
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    padding: 20,
    overflow: "hidden",
  },
  image: {
    width: 70,
    height: 70,
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

export default Card2;
