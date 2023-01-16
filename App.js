import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./src/RootNavigation";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/loginSignup/LoginScreen";
import SignupScreen from "./src/screens/loginSignup/SignupScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <RootNavigation /> */}

      {/* <LoginScreen /> */}
      {/* <SignupScreen/> */}
      <HomeScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
