import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Text, View, TouchableOpacity } from "react-native";
import stylesDrawer from "../styles/styleDrawer";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DrawerCustom(props) {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userLogin");
      await AsyncStorage.removeItem("DataTransaction");
      await AsyncStorage.removeItem("id_reciver");
      navigation.navigate("Login");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={stylesDrawer.drawerHeader}>
        <Text style={stylesDrawer.drawerHeaderText}>Fazzpay</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" />
      <TouchableOpacity
        style={stylesDrawer.logoutButton}
        onPress={handleLogout}
      >
        <Text style={stylesDrawer.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
