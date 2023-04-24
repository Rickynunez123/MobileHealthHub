import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { MaterialCommunityIcons } from '@expo/vector-icons'

// import WelcomeScreen2 from "./app/screens/WelcomeScreen2";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import WelcomeScreen3 from "./app/screens/WelcomeScreen3";
import Card from "./app/components/Card";
import Card2 from "./app/components/Card2";
import MessagesScreen from "./app/screens/MessagesScreen";

import DoctorDetailsScreen from "./app/screens/DoctorDetailsScreen";

export default function App() {
  return <MessagesScreen />;
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
