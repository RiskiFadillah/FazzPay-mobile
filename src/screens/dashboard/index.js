import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import stylesDashboard from "../../styles/styleDashboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
stylesDashboard;

export default function DashboardScreen({ navigation }) {
  const [isLoggin, setIsLoggin] = useState({
    value: false,
    data: {},
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("userLogin");
      if (value !== null) {
        setIsLoggin({
          value: true,
          data: JSON.parse(value),
        });
      } else {
        setIsLoggin({
          value: false,
          data: null,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  let userProfile = JSON.stringify(isLoggin.data.user_profile);
  {
    isLoggin.value ? console.log(userProfile) : console.log("data tidak ada");
  }
  console.log(userProfile);

  {
    isLoggin.value
      ? console.log(isLoggin.data.user_profile.images)
      : console.log("data tidak ada");
  }

  return (
    <>
      <View style={stylesDashboard.containerTop}>
        <View
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          {isLoggin.value ? (
            <Image
              source={{
                uri: isLoggin.data.user_profile.images,
              }}
              style={stylesDashboard.imageProfile}
            />
          ) : (
            <Image
              source={require("../../images/sakura.jpg")}
              style={stylesDashboard.imageProfile}
            />
          )}

          <View style={{ paddingTop: 4 }}>
            <Text>Hello,</Text>
            <Text style={{ fontSize: 20, paddingTop: 8 }}>
              {isLoggin.value
                ? isLoggin.data.user_profile.first_name +
                  " " +
                  isLoggin.data.user_profile.last_name
                : ""}
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text>🔔</Text>
        </View>
      </View>
      <View style={stylesDashboard.containerBody}>
        <View style={stylesDashboard.saldo}>
          <Text style={{ color: "#ffff" }}>Balance</Text>
          <Text
            style={{
              color: "#ffff",
              fontSize: 19,
              paddingTop: 5,
              fontWeight: "600",
            }}
            onPress={() => {
              navigation.navigate("Transaction");
            }}
          >
            Rp. {isLoggin.value ? isLoggin.data.user_profile.balance : ""}
          </Text>
          <Text style={{ color: "#ffff", paddingTop: 5, fontSize: 12 }}>
            {isLoggin.value ? isLoggin.data.user_profile.phone_number : ""}
          </Text>
        </View>
        <View
          style={{
            paddingTop: 10,
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <TouchableOpacity style={stylesDashboard.button}>
            <Text
              style={stylesDashboard.buttonText}
              onPress={() => {
                navigation.navigate("Find Receiver");
              }}
            >
              💲 Transfer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesDashboard.button}>
            <Text style={stylesDashboard.buttonText}>➕ Top Up</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 15,
            paddingBottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Transaction History</Text>
          <Text>See all</Text>
        </View>
        <ScrollView>
          <View style={{ height: 1000 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
              return (
                <View style={stylesDashboard.cardContainer}>
                  <Image
                    source={require("../../images/sakura.jpg")}
                    style={stylesDashboard.image}
                  />
                  <View style={stylesDashboard.cardText}>
                    <Text style={stylesDashboard.name}>Miyawaki Sakura</Text>
                    <Text style={{ fontSize: 10 }}>Transfer</Text>
                  </View>
                  <Text style={stylesDashboard.price}>+Rp.50.000</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
