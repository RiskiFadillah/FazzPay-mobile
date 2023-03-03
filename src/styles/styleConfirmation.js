import { StyleSheet } from "react-native";

const stylesConfirmation = StyleSheet.create({
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
  cardContainerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    shadowColor: "#000",
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
  button: {
    backgroundColor: "#6379F4",
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default stylesConfirmation;
