import React, { useState } from "react";
import { FlatList, SafeAreaView, View, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    // uses the filter method on the messages array to create a new array that
    // excludes the message with the same id as the message parameter.
    // filter method return a new array and does not modify the original array
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
                id: 1,
                title: "T1",
                description: "D1",
                image: require("../assets/doctorImages/dr1.jpeg"),
              },
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/doctorImages/dr1.jpeg"),
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MessagesScreen;
