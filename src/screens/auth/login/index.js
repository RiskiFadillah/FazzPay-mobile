import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ToastAndroid,
  Image,
} from "react-native";
import stylesAuth from "../../../styles/globalcss";
stylesAuth;
import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
AsyncStorage;
useNavigation;
// Style

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleImageClick = () => {
    setShowPassword(!showPassword);
  };

  const handleEmail = (text) => {
    setEmail(text);

    if (text && !text.includes("@")) {
      setErrorEmail("Invalid email format");
    } else {
      setErrorEmail("");
    }
  };

  const handleLogin = (e) => {
    if (errorEmail) {
      ToastAndroid.show(errorEmail, ToastAndroid.LONG);
    } else {
      e.preventDefault();
      const dataLogin = {
        email: email,
        password: password,
      };
      console.log(dataLogin);
      axios({
        url: "http://192.168.1.4:5000/api/v1/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: dataLogin,
      })
        .then((res) => {
          AsyncStorage.setItem("userLogin", JSON.stringify(res.data.data));
          navigation.navigate("Dashboard");
        })
        .catch((err) => {
          console.log(err.response.data.message, "Tidak bisa terkirim");
          ToastAndroid.show(err.response.data.message, ToastAndroid.LONG);
        });
    }
  };
  return (
    <>
      <ScrollView>
        <View style={stylesAuth.containerTitle}>
          <Text style={stylesAuth.title}>FazzPay</Text>
        </View>
        <View style={stylesAuth.containerBody}>
          <Text style={stylesAuth.subTitle}>Login</Text>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 5,
              width: 300,
              textAlign: "center",
              color: "#3A3D42",
            }}
          >
            Login to your existing account to access all the features in
            FazzPay.
          </Text>

          <TextInput
            style={stylesAuth.input}
            onChangeText={handleEmail}
            value={email}
            keyboardType="email-address"
            placeholder="📧 Email"
          />
          <View style={stylesAuth.input}>
            <TextInput
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
              placeholder="🔒 Password"
            />
            <TouchableOpacity onPress={handleImageClick}>
              <Image source={require("../../../images/illuminati.png")} />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              paddingTop: 10,
              fontSize: 10,
              marginLeft: 200,
              color: "#6379F4",
            }}
          >
            Forget Password?
          </Text>
          <TouchableOpacity style={stylesAuth.button} onPress={handleLogin}>
            <Text style={stylesAuth.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 30, color: "#3A3D42" }}>
            Don’t have an account? Let’s{" "}
            <Text
              style={{ color: "#6379F4" }}
              onPress={() => {
                navigation.navigate("Sign Up");
              }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
