import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

// Style
const stylesLogin = StyleSheet.create({
  containerTitle: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    padding: 50,
  },
  containerBody: {
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    color: "#6379F4",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    width: "80%",
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#ccc",
    marginBottom: 10,
  },
});

export default function LoginScreen() {
  return (
    <>
      <View style={stylesLogin.containerTitle}>
        <Text style={stylesLogin.title}>FazzPay</Text>
      </View>
      <View style={stylesLogin.containerBody}>
        <Text style={stylesLogin.subTitle}>Login</Text>
        <Text
          style={{
            fontSize: 15,
            paddingTop: 5,
            width: 300,
            textAlign: "center",
            color: "#3A3D42",
          }}
        >
          Login to your existing account to access all the features in FazzPay.
        </Text>
        <TextInput
          style={stylesLogin.input}
          //onChangeText={setUsername}
          //value={email}
          placeholder="Email"
        />
        <TextInput
          style={stylesLogin.input}
          //onChangeText={setPassword}
          //value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>
    </>
  );
}
