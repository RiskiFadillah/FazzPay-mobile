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
import StyleChangePass from "../../../styles/styleChangePass";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleImageClick = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    if (errorEmail) {
      ToastAndroid.show(errorEmail, ToastAndroid.LONG);
    } else {
    }
  };
  return (
    <>
      <ScrollView>
        <View style={StyleChangePass.containerBody}>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 5,
              width: 300,
              color: "#3A3D42",
              marginTop: 35,
            }}
          >
            You must enter your current password and then type your new password
            twice.
          </Text>
          <View style={StyleChangePass.input}>
            <TextInput
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
              placeholder="🔒 Current Password"
            />
            <TouchableOpacity onPress={handleImageClick}>
              <Image source={require("../../../images/illuminati.png")} />
            </TouchableOpacity>
          </View>
          <View style={StyleChangePass.input}>
            <TextInput
              secureTextEntry={!showPassword}
              onChangeText={setNewPassword}
              value={newPassword}
              placeholder="🔒 New Password"
            />
            <TouchableOpacity onPress={handleImageClick}>
              <Image source={require("../../../images/illuminati.png")} />
            </TouchableOpacity>
          </View>
          <View style={StyleChangePass.input}>
            <TextInput
              secureTextEntry={!showPassword}
              onChangeText={setRepeatPassword}
              value={repeatPassword}
              placeholder="🔒 Repeat Password"
            />
            <TouchableOpacity onPress={handleImageClick}>
              <Image source={require("../../../images/illuminati.png")} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={StyleChangePass.button}
            onPress={handleLogin}
          >
            <Text style={StyleChangePass.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
