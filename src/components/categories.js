import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import module from "../globals/style";
import { FontAwesome5 } from "@expo/vector-icons";
import image from "../../assets/image.jpg";
import burger from "../../assets/burger.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}> Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="fruit-cherries"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Image source={image} style={styles.image} />
          <Text style={styles.type}>Fruits</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Image source={burger} style={styles.image} />
          <Text style={styles.type}>Burger</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: module.colors.col1,
    width: "90%",
    elevation: 10,
    borderRadius: 10,
  },
  head: {
    color: module.colors.text1,
    fontSize: 20,
    fontWeight: "300",
    margin: 10,
    alignSelf: "center",
    paddingBottom: 5,
    borderBottomColor: module.colors.text1,
    borderBottomWidth: 1,
  },
  box: {
    alignItems: "center",
    backgroundColor: module.colors.col1,
    elevation: 10,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  image: {
    width: 330,
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
  type: {
    color: module.colors.text1,
    fontSize: 16,
    fontWeight: "300",
    paddingVertical: 5,
  },
  icon: {
    padding: 10,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
});
export default Categories;
