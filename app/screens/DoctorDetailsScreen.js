import React from "react";
import { View, Image, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";


import AppText from "../components/AppText";
import colors from "../config/colors";

function DoctorDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/doctorImages/dr1.jpeg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.name}>Dr. Ricardo Nunez</AppText>
        <AppText style={styles.doctorType}>Dermatologists</AppText>
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

export default DoctorDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
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
    fontSize: "12",

  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
});
