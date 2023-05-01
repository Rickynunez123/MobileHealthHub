import React from "react";
import {View, StyleSheet, SafeAreaView, FlatList } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";

const listing = [
  {
    id: 1,
    name: "Ricardo Nunez",
    doctorType: "Gynecologist",
    image: require("../assets/doctorImages/dr1.jpeg"),
  },
  {
    id: 2,
    name: "Ambarish Rao",
    doctorType: "Neurologists",
    image: require("../assets/doctorImages/dr1.jpeg"),
  },
  {
    id: 3,
    name: "Niko Gonzales",
    doctorType: "Radiologists",
    image: require("../assets/doctorImages/dr1.jpeg"),
  },
];

function ListingsScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.screen}>
            
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            doctorType={item.doctorType}
            image={item.image}
          />
        )}
      />

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.ultraLightGray,
  },
});
export default ListingsScreen;
