import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "./AppText";
import colors from "../config/colors";

//List item is the same as card2 but without the stars and the margin

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  IconComponent,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        style={styles.card}
        onPress={onPress}
        underlayColor={colors.ultraLightGray}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 15,
    overflow: "hidden",
  },
  detailsContainer:{
    marginLeft: 10,
    justifyContent: "center"
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  container: {
    flexDirection: "row",
  },
  title: {
    marginBottom: 5,
    fontWeight: "600",
  },
  subTitle: {
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
