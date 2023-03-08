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
import { useState, useEffect } from "react";
import stylesDashboard from "../../styles/styleDashboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
stylesDashboard;

export default function DashboardScreen({ navigation }) {
  const [dataUsers, setDataUsers] = useState(null);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
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
        aq;
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

  const id_users = isLoggin.value ? isLoggin.data.user_profile.id_users : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.4:5000/api/v1/users/${id_users}`
        );
        setRefetch(setDataUsers(response.data.data));
        console.log(response.data.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [refetch]);

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (!dataUsers) {
    return (
      <View>
        <Image
          source={require("../../images/moneytransfer.gif")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  }
  console.log(dataUsers, "dari data Users");

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
              source={require("../../images/default-person.jpg")}
              style={stylesDashboard.imageProfile}
            />
          )}

          <View style={{ paddingTop: 4 }}>
            <Text>Hello,</Text>
            <Text style={{ fontSize: 20, paddingTop: 8 }}>
              {dataUsers ? dataUsers.first_name : ""}
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
            Rp. {dataUsers ? dataUsers.balance : ""}
          </Text>
          <Text style={{ color: "#ffff", paddingTop: 5, fontSize: 12 }}>
            {dataUsers ? dataUsers.phone_number : ""}
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
          <View style={{ height: 900 }}>
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <View style={stylesDashboard.cardContainer}>
                  <Image
                    source={require("../../images/sakura.jpg")}
                    style={stylesDashboard.image}
                  />
                  <View style={stylesDashboard.cardText}>
                    <Text style={stylesDashboard.name}>Sakura</Text>
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
