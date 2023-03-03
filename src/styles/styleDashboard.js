import { StyleSheet } from "react-native";

const stylesDashboard = StyleSheet.create({
  containerTop: {
    height: 110,
    padding: 25,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
  },
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
  },
  button: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    width: "49%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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

export default stylesDashboard;
