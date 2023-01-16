import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import HomeHead from "../components/HomeHead";
import Categories from "../components/Categories";
import OfferSlider from "../components/OfferSlider";
import { AntDesign } from "@expo/vector-icons";
import module from "../globals/style";

const HomeScreen = () => {
  return (
    <ScrollView vertical showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar />
        <HomeHead />
        <View style={styles.searchBox}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput style={styles.input} placeholder="Search..." />
        </View>
        <Categories />
        <OfferSlider />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: module.colors.col1,
    alignItems: "center",
    width: "100%",
  },
  searchBox: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: module.colors.col1,
    borderRadius: 30,
    alignItems: "center",
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  input: {
    // color: "red",
    fontSize: 18,
    // fontWeight: "bold",
    marginLeft: 10,
    width: "90%",
  },
  searchIcon: {
    color: "red",
  },
});
export default HomeScreen;
