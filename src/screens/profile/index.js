import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
  RefreshControl,
  Switch,
} from "react-native";
import stylesProfile from "../../styles/styleProfile";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoggin, setIsLoggin] = useState({
    value: false,
    data: {},
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("userLogin");
      if (value !== null) {
        setIsLoggin({
          value: true,
          data: JSON.parse(value),
        });
      } else {
        aq;
        setIsLoggin({
          value: false,
          data: null,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const dataUsers = isLoggin ? isLoggin.data.user_profile : null;
  imagesProfile = dataUsers ? dataUsers.images : null;
  console.log(dataUsers, "dari profile");

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <>
      <View style={stylesProfile.containerBody}>
        <View style={stylesProfile.containerTop}>
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={stylesProfile.imageProfile}
            />
          ) : (
            <Image
              source={{
                uri: imagesProfile,
              }}
              style={stylesProfile.imageProfile}
            />
          )}

          <Pressable onPress={pickImageAsync}>
            <Text>Edit</Text>
          </Pressable>
          <Text style={stylesProfile.userName}>
            {dataUsers ? dataUsers.first_name : ""}
          </Text>
          <Text>{dataUsers ? dataUsers.phone_number : ""}</Text>
        </View>
        <TouchableOpacity
          style={stylesProfile.buttonInfo}
          onPress={() => navigation.navigate("Personal Information")}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
              alignItems: "center",
            }}
          >
            Personal Information
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesProfile.buttonInfo2}
          onPress={() => navigation.navigate("Change Password")}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Change Password
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesProfile.buttonInfo2}
          onPress={() => navigation.navigate("Change Pin")}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Change Pin
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesProfile.buttonInfo2}
          onPress={() => {
            console.log("Tombol ditekan!");
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
              paddingTop:10
            }}
          >
            Notification
          </Text>
          <View
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesProfile.buttonInfo2}
          onPress={() => {
            console.log("Tombol ditekan!");
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Logout
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
