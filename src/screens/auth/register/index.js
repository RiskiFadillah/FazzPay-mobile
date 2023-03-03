import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import stylesAuth from "../../../styles/globalcss";
stylesAuth;
import axios from "axios";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");

  const handleLogin = (e) => {
    console.log(`UserName: ${userName},Email: ${email}, Password: ${password}`);
    e.preventDefault();
    const dataLogin = {
      email: email,
      password: password,
      firstname: userName,
    };
    console.log(dataLogin);
    axios({
      url: "http://192.168.1.3:5000/api/v1/auth/register",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: dataLogin,
    })
      .then((res) => {
        navigation.navigate("Login");
        console.log(res);
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
            <Text style={stylesAuth.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 30, color: "#3A3D42" }}>
            Already have an account? Let’s{" "}
            <Text style={{ color: "#6379F4" }}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
