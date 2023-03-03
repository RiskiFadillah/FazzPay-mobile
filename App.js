import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//Screens
import HomeScreen from "./src/screens/home";
import LoginScreen from "./src/screens/auth/login";
import SignUpScreen from "./src/screens/auth/register";
import DashboardScreen from "./src/screens/dashboard";
import TransactionScreen from "./src/screens/transaction";
import ReceiverScreen from "./src/screens/receiver";
import TransferReceiver from "./src/screens/transfer-receiver";
import ConfirmationSreen from "./src/screens/confirmation";
import SuccessTransferScreen from "./src/screens/successTransfer";
import FailTransferScreen from "./src/screens/failTransfer";
import ProfileScreen from "./src/screens/profile";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
        <Stack.Screen name="Find Receiver" component={ReceiverScreen} />
        <Stack.Screen name="Transfer" component={TransferReceiver} />
        <Stack.Screen name="Confirmation" component={ConfirmationSreen} />
        <Stack.Screen
          name="Success Transfer"
          component={SuccessTransferScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fail Transfer"
          component={FailTransferScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <HomeScreen />
  );
}
