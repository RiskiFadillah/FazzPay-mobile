import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import stylesAuth from "../../../styles/globalcss";
stylesAuth;
import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerbody: {
    marginBottom: 30,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
  },
  pinInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: 50,
    height: 50,
    fontSize: 20,
    textAlign: "center",
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: "#6379F4",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    width: "60%",
  },
  confirmButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default function CreatePinScreen({ navigation }) {
  const [pin, setPin] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  const handlePinInput = (value, index) => {
    const newPin = pin.split("");
    newPin[index] = value;
    setPin(newPin.join(""));
  };
  const getUserProfile = async () => {
    try {
      const value = await AsyncStorage.getItem("userLogin");
      if (value !== null) {
        setUserProfile(JSON.parse(value));
        //console.log(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  id = userProfile ? userProfile.id_users : undefined;
  console.log(userProfile);
  console.log(id);

  const handleConfirm = async () => {
    if (pin.length !== 6) {
      ToastAndroid.show("All pins must be filled in", ToastAndroid.SHORT);
    } else {
      console.log(pin);
      try {
        const response = await axios.patch(
          `http://192.168.1.5:5000/api/v1/auth/createpin/${id}`,
          { pin }
        );
        console.log(response.data.data);
        ToastAndroid.show("Pin has been created!", ToastAndroid.SHORT);
        navigation.navigate("Login");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <View style={stylesAuth.containerTitle}>
        <Text style={stylesAuth.title}>FazzPay</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.containerbody}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              paddingBottom: 8,
              fontWeight: "700",
            }}
          >
            Create Security PIN
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: "300",
            }}
          >
            Create a PIN that’s contain 6 digits number for security purpose in
            FazzPay.
          </Text>
        </View>
        <View style={styles.pinContainer}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              key={index}
              style={styles.pinInput}
              keyboardType="numeric"
              maxLength={1}
              secureTextEntry={true}
              onChangeText={(value) => handlePinInput(value, index)}
              value={pin[index] || ""}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
