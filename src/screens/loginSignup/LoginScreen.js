import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  TextInput,
  TouchableOpacity,
} from "react-native";
import module from "../../globals/style";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Login </Text>
      {/* input fields  */}
      {/* email  */}
      <View style={styles.inputBox}>
        <AntDesign
          name="user"
          size={24}
          color={emailFocus ? module.colors.text1 : module.colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
          }}
        />
      </View>

      {/* password  */}
      <View style={styles.inputBox}>
        <FontAwesome
          name="key"
          size={24}
          color={passwordFocus ? module.colors.text1 : module.colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onFocus={() => {
            setEmailFocus(false);
            setPasswordFocus(true);
          }}
          secureTextEntry={showPassword ? false : true}
        />
        <Entypo
          name={showPassword ? "eye" : "eye-with-line"}
          size={24}
          color={passwordFocus ? "black" : "gray"}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        />
      </View>

      {/* button  */}
      <TouchableOpacity style={module.btn1}>
        <Text
          style={{
            color: module.colors.col1,
            fontSize: module.titles.btntxt,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      {/* texts  */}
      <Text style={styles.forgot}> Forgot Password?</Text>
      <Text style={styles.or}> OR </Text>
      <Text style={styles.gftxt}> Sign in With</Text>
      <View
        style={{
          width: "80%",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.signWith}>
          <AntDesign name="google" size={35} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.signWith}>
          <AntDesign name="facebook-square" size={35} color="#0f91f3" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.signWith}>
          <AntDesign name="instagram" size={35} color="#dc03d8" />
        </TouchableOpacity>
      </View>
      <View style={[module.hr80, styles.signupOpt]}>
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("signup")}
        >
          Don't have an account?
          <Text style={{ color: module.colors.text1 }}> Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  head1: {
    fontSize: module.titles.title1,
    color: module.colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },
  inputBox: {
    flexDirection: "row",
    width: "80%",
    // height: 50,
    borderRadius: 10,
    backgroundColor: module.colors.col1,
    // border: "10px solid black",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 20,
    alignSelf: "center",
  },
  input: {
    width: "80%",
    // height: 50,
    fontSize: 18,
    marginLeft: 10,
  },
  forgot: {
    color: module.colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: module.colors.text1,
    marginVertical: 10,
  },
  gftxt: {
    color: module.colors.text2,
    marginVertical: 10,
    fontSize: 18,
  },
  signWith: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    minWidth: 40,
  },
  signupOpt: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 40,
    paddingVertical: 10,
    borderRadius: 15,
  },
});
export default LoginScreen;
