import { StyleSheet } from "react-native";

const stylesAuth = StyleSheet.create({
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
  button: {
    backgroundColor: "#6379F4",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default stylesAuth;
