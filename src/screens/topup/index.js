import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
  RefreshControl,
  Switch,
  Modal,
} from "react-native";
import { useState, useEffect } from "react";
import stylesTopUp from "../../styles/styleTopup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function TopupScreen() {
  const navigation = useNavigation();
  const [topUpAmount, setTopUpAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoggin, setIsLoggin] = useState({
    value: false,
    data: {},
  });
  const [refetch, setRefetch] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("userLogin");
      if (value !== null) {
        setRefetch(
          setIsLoggin({
            value: true,
            data: JSON.parse(value),
          })
        );
      } else {
        setRefetch(
          setIsLoggin({
            value: false,
            data: null,
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [refetch]);

  const user_balance = isLoggin.value
    ? isLoggin.data.user_profile.balance
    : null;
  const id_users = isLoggin.value ? isLoggin.data.user_profile.id_users : null;

  const handleTopUp = () => {
    console.log(topUpAmount);
    // melakukan pengiriman data ke server untuk top up
    axios({
      url: `https://fazzpay-be.cyclic.app/api/v1/users/topup/${id_users}`,
      method: "PATCH",
      data: { balance: topUpAmount },
    })
      .then((res) => {
        console.log(res.data.message);
        setBalance(res.data.balance);
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <View style={stylesTopUp.containerBody}>
        <View style={stylesTopUp.containerTop}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            Saldo Fazzpay Cash Rp.{user_balance}
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 15, fontWeight: "700" }}>Pilih Metode</Text>
        </View>
        <TouchableOpacity
          style={stylesTopUp.buttonInfo}
          onPress={() => navigation.navigate("Top Up")}
        >
          <View
            style={{
              display: "flex",
              height: 40,
              flexDirection: "row",
              gap: 4,
            }}
          >
            <Image
              source={require("../../images/indomaret.png")}
              style={{
                width: 90,
                height: 40,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 15,
                alignItems: "center",
                marginTop: 10,
              }}
            >
              Indomaret
            </Text>
          </View>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              marginTop: 8,
              fontSize: 18,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesTopUp.buttonInfo}
          onPress={() => navigation.navigate("Top Up")}
        >
          <View
            style={{
              display: "flex",
              height: 40,
              flexDirection: "row",
              gap: 4,
            }}
          >
            <Image
              source={require("../../images/alfamart.png")}
              style={{
                width: 90,
                height: 40,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 15,
                alignItems: "center",
                marginTop: 10,
              }}
            >
              Alfamart
            </Text>
          </View>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              marginTop: 8,
              fontSize: 18,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesTopUp.buttonInfo2}
          onPress={() => navigation.navigate("Top Up")}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            🏧 ATM
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesTopUp.buttonInfo2}
          onPress={() => {
            console.log("Tombol ditekan!");
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            💳 Debit Visa / Mastercard
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesTopUp.buttonInfo2}
          onPress={() => navigation.navigate("Top Up")}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            📱 Internet / Mobile Banking
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesTopUp.buttonInfo2}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Fazzpay
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            ➡
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={stylesTopUp.modalContainer}>
            <View style={stylesTopUp.modal}>
              <TextInput
                style={stylesTopUp.input}
                placeholder="Enter top-up amount"
                onChangeText={(text) => setTopUpAmount(text)}
                value={topUpAmount}
                keyboardType="numeric" // Menggunakan nilai balance dalam topUpAmount sebagai value pada TextInput
              />
              <TouchableOpacity onPress={handleTopUp}>
                <Text style={stylesTopUp.submitButton}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
