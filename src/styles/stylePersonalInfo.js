import { StyleSheet } from "react-native";

const stylesPersonalInfo = StyleSheet.create({
  containerBody: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#7A7886",
  },
  PersonalInfo: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 30,
    padding: 10,
    paddingLeft: 17,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  PersonalInfo2: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 15,
    padding: 10,
    paddingLeft: 17,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default stylesPersonalInfo;
