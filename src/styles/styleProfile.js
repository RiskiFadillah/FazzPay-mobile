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
  userName:{
    fontSize:22,
    fontWeight:'700'
  }
});

export default stylesProfile;
