import { StyleSheet } from "react-native";

const stylesTransaction = StyleSheet.create({
  containerBody: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "900",
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  saldo: {
    width: "100%",
    backgroundColor: "#6379F4",
    padding: 15,
    borderRadius: 15,
    height: 120,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
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
});

export default stylesTransaction;
