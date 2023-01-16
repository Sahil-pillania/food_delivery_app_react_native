import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import module from "../globals/style";

const HomeHead = () => {
  return (
    <View style={styles.container}>
      <Fontisto
        name="nav-icon-list-a"
        size={24}
        color="black"
        style={styles.myicon}
      />
      <View style={styles.container2}>
        <Text style={styles.mytext}>Hungers</Text>
        <MaterialCommunityIcons
          name="food-outline"
          size={24}
          color="black"
          style={styles.myicon}
        />
      </View>
      <FontAwesome5
        name="user-circle"
        size={28}
        color="black"
        style={styles.myicon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: module.colors.col1,
    elevation: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container2: {
    flexDirection: "row",
    //width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  mytext: {
    paddingHorizontal: 5,
    fontSize: 20,
    color: module.colors.text1,
    fontWeight: "bold",
  },
});
export default HomeHead;
