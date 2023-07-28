import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  //[functionName, functionToUpdate ]
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.gray}
              style={styles.icon}
            />
          )}
          {/* If there is a selectedItem, the item will be displayed, else 
              display placeholder 
          */}
            <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
 
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.gray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <Button
            style={styles.close}
            title="Close"
            onPress={() => setModalVisible(false)}
          >

            
          </Button>
        {/* 
        When you use data={items} in the FlatList component, the FlatList component iterates through 
        each item in the items array and renders a component for each item using the renderItem prop.
        In the renderItem function, the item parameter refers to each individual item in the items array.
        So, when you write renderItem={({ item }) => ...}, you are destructuring the item object from the 
        FlatList component's parameter object and using it to render each item in the list. */}
          <FlatList
            data={items}
            //Uncomment the following line 
            // keyExtractor={(item) => item.value.toString()}
           // The renderItem props is used to define a function that takes an 
           // item from the "items" array and returns a rendered component for each 
           // item in the list
           // item refers to the array of items set in data 
            renderItem={({ item }) => (
              <PickerItem
                 //Generic prop that will be use to render any item 
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  // callback function that is called when an item in the 
                  // FlatList component is selected by the user. It takes the 
                  // selected item as a parameter and does some action with that item.
                  onSelectItem(item);
                  console.log(item.label + "this");
                }}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ultraLightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  
});

export default AppPicker;
