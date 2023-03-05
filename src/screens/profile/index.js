import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
  RefreshControl,
} from "react-native";
import stylesProfile from "../../styles/styleProfile";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoggin, setIsLoggin] = useState({
    value: false,
    data: {},
  });
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
          style={{
            width: "100%",
            backgroundColor: "#E5E8ED",
            marginTop: 30,
            padding: 17,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
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
          style={{
            width: "100%",
            backgroundColor: "#E5E8ED",
            marginTop: 15,
            padding: 17,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
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
          style={{
            width: "100%",
            backgroundColor: "#E5E8ED",
            marginTop: 15,
            padding: 17,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
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
          style={{
            width: "100%",
            backgroundColor: "#E5E8ED",
            marginTop: 15,
            padding: 17,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
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
            Notification
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
          style={{
            width: "100%",
            backgroundColor: "#E5E8ED",
            marginTop: 15,
            padding: 17,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
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
