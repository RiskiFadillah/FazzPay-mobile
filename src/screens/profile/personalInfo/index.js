import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
  RefreshControl,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Style
import stylesPersonalInfo from "../../../styles/stylePersonalInfo";


export default function PersonalInfo() {
  return (
    <>
      <ScrollView>
        <View style={stylesPersonalInfo.containerBody}>
          <Text style={stylesPersonalInfo.titleText}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </Text>
          <View
            style={stylesPersonalInfo.PersonalInfo}
            onPress={() => navigation.navigate("Change Password")}
          >
            <Text
              style={{
                color: " #7A7886",
                fontSize: 12,
              }}
            >
              First Name
            </Text>
            <TextInput
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
              }}
              placeholder="Robert"
            />
          </View>
          <View
            style={stylesPersonalInfo.PersonalInfo2}
            onPress={() => navigation.navigate("Change Password")}
          >
            <Text
              style={{
                color: " #7A7886",
                fontSize: 12,
              }}
            >
              Last Name
            </Text>
            <TextInput
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
              }}
              placeholder="Robert"
            />
          </View>
          <View
            style={stylesPersonalInfo.PersonalInfo2}
            onPress={() => navigation.navigate("Change Password")}
          >
            <Text
              style={{
                color: " #7A7886",
                fontSize: 12,
              }}
            >
              Email
            </Text>
            <TextInput
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
              }}
              placeholder="Robert"
            />
          </View>
          <View
            style={stylesPersonalInfo.PersonalInfo2}
            onPress={() => navigation.navigate("Change Password")}
          >
            <Text
              style={{
                color: " #7A7886",
                fontSize: 12,
              }}
            >
              Phone Number
            </Text>
            <TextInput
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
              }}
              placeholder="Robert"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
