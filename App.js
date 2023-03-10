import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//Screens
import HomeScreen from "./src/screens/home";
import LoginScreen from "./src/screens/auth/login";
import ConfirmPinScreen from "./src/screens/auth/confirmpin";
import SignUpScreen from "./src/screens/auth/register";
import CreatePinScreen from "./src/screens/auth/createpin";
import DashboardScreen from "./src/screens/dashboard";
import TransactionScreen from "./src/screens/transaction";
import TopupScreen from "./src/screens/topup";
import ReceiverScreen from "./src/screens/receiver";
import TransferReceiver from "./src/screens/transfer-receiver";
import ConfirmationSreen from "./src/screens/confirmation";
import SuccessTransferScreen from "./src/screens/successTransfer";
import FailTransferScreen from "./src/screens/failTransfer";
import ProfileScreen from "./src/screens/profile";
import DrawerCustom from "./src/components/drawerNavigation";
import PersonalInfo from "./src/screens/profile/personalInfo";
import ChangePassword from "./src/screens/profile/changePassword";
import ChangePin from "./src/screens/profile/changePin";
// Style
import stylesDrawer from "./src/styles/styleDrawer";

export default function App() {
  // const [isLoggin, setIsLoggin] = useState({
  //   value: false,
  //   data: {},
  // });
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("userLogin");
  //     if (value !== null) {
  //       setIsLoggin({
  //         value: true,
  //         data: JSON.parse(value),
  //       });
  //     } else {
  //       setIsLoggin({
  //         value: false,
  //         data: null,
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  // {
  //   console.log(isLoggin, "ini dari App");
  // }
  const HompageDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#6379F4",
        }}
        drawerContent={(props) => <DrawerCustom {...props} />}
        drawerStyle={stylesDrawer.drawer}
        sceneContainerStyle={stylesDrawer.sceneContainer}
      >
        <Drawer.Screen name="🏚 Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="👨🏻‍🦲 Profile" component={ProfileScreen} />
        <Drawer.Screen name="💵 Transaction" component={TransactionScreen} />
      </Drawer.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Confirm Pin" component={ConfirmPinScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Create Pin" component={CreatePinScreen} />
        <Stack.Screen
          name="Dashboard"
          component={HompageDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
        <Stack.Screen name="Top Up" component={TopupScreen} />
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Personal Information" component={PersonalInfo} />
        <Stack.Screen name="Change Password" component={ChangePassword} />
        <Stack.Screen name="Change Pin" component={ChangePin} />
      </Stack.Navigator>
    </NavigationContainer>
    // <HomeScreen />
  );
}
