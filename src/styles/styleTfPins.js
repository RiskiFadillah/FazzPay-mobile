import { StyleSheet } from "react-native";

const stylesTfPins = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerbody: {
    marginBottom: 30,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
  },
  pinInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: 50,
    height: 50,
    fontSize: 20,
    textAlign: "center",
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: "#6379F4",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    width: "60%",
  },
  confirmButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: "#6379F4",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    width: "60%",
  },
  confirmButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default stylesTfPins;
