import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
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
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = (e) => {
    e.preventDefault();
    const dataLogin = {
      email: email,
      password: password,
    };
    console.log(dataLogin);
    axios({
      url: "http://192.168.1.2:5000/api/v1/auth/login",
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
        console.log(err, "Tidak bisa terkirim");
        // navigation.navigate("Dashboard");
      });
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
            onChangeText={setEmail}
            value={email}
            placeholder="📧 Email"
          />
          <TextInput
            style={stylesAuth.input}
            onChangeText={setPassword}
            value={password}
            placeholder="🔒 Password"
            secureTextEntry
          />

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
