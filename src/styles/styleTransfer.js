import { StyleSheet } from "react-native";

const stylesTransfer = StyleSheet.create({
  containerBody: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  cardText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    paddingTop: 10,
    color: "#1EC15F",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    textAlign: "center",
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#A9A9A9",
    color: "#000000",
  },
  inputAmount: {
    height: 50,
    margin: 12,
    padding: 10,
    marginTop: 100,
    textAlign: "center",
    fontSize: 30,
    borderRadius: 0,
    borderWidth: 0,
    color: "#000000",
  },
  inputFocused: {
    borderBottomColor: "#A9A9A9",
  },
  button: {
    backgroundColor: "#6379F4",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "50%",
   
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default stylesTransfer;
