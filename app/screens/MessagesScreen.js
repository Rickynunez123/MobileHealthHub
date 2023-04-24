import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';


import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/doctorImages/dr1.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/doctorImages/dr1.jpeg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/doctorImages/dr1.jpeg"),
  },
];

function MessagesScreen(props) {
  return ( 
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            name={item.title}
            doctorType={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </SafeAreaView>
  );
}

export default MessagesScreen;
