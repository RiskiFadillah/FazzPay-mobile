import { StyleSheet } from "react-native";

const stylesProfile = StyleSheet.create({
  containerBody: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerTop: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: 7,
    marginTop: 80,
  },
  imageProfile: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: "700",
  },
  buttonInfo: {
    width: "100%",
    backgroundColor: "#E5E8ED",
    marginTop: 30,
    padding: 17,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonInfo2: {
    width: "100%",
    backgroundColor: "#E5E8ED",
    marginTop: 15,
    padding: 17,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E5E8ED",
    padding: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  modalButton: {
    backgroundColor: "#6379F4",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default stylesProfile;
