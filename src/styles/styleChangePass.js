import { StyleSheet } from "react-native";

const StyleChangePass = StyleSheet.create({
  containerBody: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  input: {
    width: "100%",
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#ccc",
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#6379F4",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default StyleChangePass;
