import React, { useState } from "react";

import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
} from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { MaterialCommunityIcons } from '@expo/vector-icons'

// import WelcomeScreen2 from "./app/screens/WelcomeScreen2";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import WelcomeScreen3 from "./app/screens/WelcomeScreen3";
import Card from "./app/components/Card";
import Card2 from "./app/components/Card2";
import MessagesScreen from "./app/screens/MessagesScreen";

import DoctorDetailsScreen from "./app/screens/DoctorDetailsScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import CategoryPickerItem from "./app/components/CategoryPickerItem";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <View
      style={{
        backgroundColor: "#ffff",
        paddingTop: 100,
      }}
    >
      <ListingEditScreen />
      {/* <AppPicker
        // This is the item that will be displayed, and we are getting it as a prop 
        selectedItem={category}
        // Event that the component raises when the user selects an item
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="helo"
      /> */}
    </View>
  );
}

// <View
//   style={{
//     backgroundColor: "#f8f4f4",
//     padding: 20,
//     paddingTop: 100,
//   }}
// >
//   <Card2
//     name="Dr. Ricardo Nunez"
//     doctorType="Dermatologists"
//     image={require("./app/assets/doctorImages/dr1.jpeg")}
//   ></Card2>
// </View>

// <ListItem
// title="My title"
// subTitle="My subtitle"
// ImageComponent={<Icon name="email"/>}
// />
