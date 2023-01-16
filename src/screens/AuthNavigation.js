import React from "react";
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./WelcomeScreen";
import SignupScreen from "./loginSignup/SignupScreen";
import LoginScreen from "./loginSignup/LoginScreen";
import HomeScreen from "./HomeScreen";

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Welcomepage">
      <Stack.Screen
        name="Welcomepage"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
