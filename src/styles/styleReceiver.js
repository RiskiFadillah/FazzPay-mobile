import { StyleSheet } from "react-native";

const styleReceiver = StyleSheet.create({
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
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  deleteButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default styleReceiver;
