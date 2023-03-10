import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Image,
} from "react-native";
import { useState } from "react";
import stylesAuth from "../../../styles/globalcss";
stylesAuth;
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleEmail = (text) => {
    setEmail(text);

    if (text && !text.includes("@")) {
      setErrorEmail("Invalid email format");
    } else {
      setErrorEmail("");
    }
  };
  const handleImageClick = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    if (email === "" || password === "" || userName === "") {
      ToastAndroid.show(
        "Email,Password and User Name must be fill in",
        ToastAndroid.LONG
      );
    } else if (errorEmail) {
      ToastAndroid.show(errorEmail, ToastAndroid.LONG);
    } else {
      e.preventDefault();
      const dataLogin = {
        email: email,
        password: password,
        first_name: userName,
      };
      console.log(dataLogin);
      axios({
        url: "http://192.168.1.5:5000/api/v1/auth/register",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: dataLogin,
      })
        .then((res) => {
          AsyncStorage.setItem("userLogin", JSON.stringify(res.data.data));
          navigation.navigate("Create Pin");
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err.response.data.message, "Tidak bisa terkirim");
          ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
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
          <Text style={stylesAuth.subTitle}>Sign Up</Text>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 5,
              width: 300,
              textAlign: "center",
              color: "#3A3D42",
            }}
          >
            Create your account to access FazzPay.
          </Text>
          <TextInput
            style={stylesAuth.input}
            onChangeText={setUsername}
            value={userName}
            placeholder="👨🏻‍🦲 User Name"
          />
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
            <Text style={stylesAuth.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 30, color: "#3A3D42" }}>
            Already have an account? Let’s{" "}
            <Text
              style={{ color: "#6379F4" }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
