import { Pressable, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Style
import stylesHome from "./styles/styleHome";
stylesHome;

export default function HomeScreen({ navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Login");
      }}
      style={stylesHome.container}
    >
      <Text style={stylesHome.title}>FazzPay</Text>
      <StatusBar style="auto" />
    </Pressable>
  );
}
