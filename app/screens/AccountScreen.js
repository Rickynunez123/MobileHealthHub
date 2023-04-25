import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.gray,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.gray,
    },
  },
];

function AccountScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ricardo Nunez"
          subTitle="rnunezcu@mtu.edu"
          image={require("../assets/doctorImages/dr1.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {},
});

export default AccountScreen;
