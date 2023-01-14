import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import image from "../../assets/food.png";
// import { colors, hr80 } from "../globals/style";
import module from "../globals/style";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hungers</Text>
      <View style={styles.logoView}>
        <Image style={styles.logo} source={image} />
      </View>
      <View style={module.hr80} />
      <Text style={styles.text}> Please Login or signup to continue. </Text>
      <View style={module.hr80} />

      <View style={styles.btn}>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text style={styles.Btns}> Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.Btns}> Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f93547",
  },
  logoView: {
    width: "80%",
    height: "40%",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 50,
    textShadow: "4px 4px 2px rgba(0,0,0,0.6)",
    textShadowColor: "red",
    color: module.colors.col1,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "200",
  },
  text: {
    color: module.colors.col1,
    fontSize: 16,
    textAlign: "center",
  },
  btn: {
    flexDirection: "row",
  },

  Btns: {
    fontSize: 20,
    color: module.colors.text1,
    textAlign: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    fontWeight: "700",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;
