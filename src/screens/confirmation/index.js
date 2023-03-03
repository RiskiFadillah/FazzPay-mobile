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
import { useState, useEffect } from "react";
import stylesConfirmation from "../../styles/styleConfirmation";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmationSreen() {
  const navigation = useNavigation();
  const [isIdSender, setIsIdSender] = useState({
    id_reciver: false,
    data: {},
  });
  const [isTransaction, setIsTransaction] = useState({
    id_reciver: false,
    data: {},
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      const id = await AsyncStorage.getItem("userLogin");
      const id_sender = JSON.parse(id);
      const transaction = await AsyncStorage.getItem("DataTransaction");
      const detailTransaction = JSON.parse(transaction);
      if (id !== null && detailTransaction !== null) {
        setIsIdSender({
          id_sender: true,
          data: id_sender,
        });
        setIsTransaction({
          detailTransaction: true,
          data: detailTransaction,
        });
      } else {
        setIsIdSender({
          id_sender: false,
          data: null,
        });

        setIsTransaction({
          detailTransaction: false,
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
  const id_reciver = isTransaction.data.id_reciver;
  const amount_sender = isIdSender.data.user_profile
    ? isIdSender.data.user_profile.balance
    : null;
  const id_sender = isIdSender.data.user_profile
    ? isIdSender.data.user_profile.id_users
    : null;
  const transaction = isTransaction.data;
  const balanceLeft = amount_sender - transaction.total_transaction;
  console.log(id_reciver, "ini id reciver");
  console.log(amount_sender, "amount_sender");
  console.log(balanceLeft, "ini transaction");
  console.log(id_sender, "ini id sender");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.3:5000/api/v1/users/${id_reciver}`
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <Image
          source={require("../../images/moneytransfer.gif")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  }

  //   Post Transaction
  const handleSubmit = async () => {
    const dataId = {
      id_sender: id_sender,
      id_reciver: id_reciver,
      total_transaction: transaction.total_transaction,
      information: transaction.information,
      date_hours: formattedDate + " - " + clock,
    };
    console.log(dataId);
    axios({
      url: "http://192.168.1.3:5000/api/v1/transaction/updatetransaction/",
      method: "POST",
      data: dataId,
    })
      .then((res) => {
        AsyncStorage.setItem("DataTransaction", JSON.stringify(res.data.data));
        console.log(res.data.data);
        navigation.navigate("Dashboard");
      })
      .catch((err) => {
        console.log(err, "Tidak bisa terkirim");
        // navigation.navigate("Dashboard");
      });
  };

  // Date & Hours
  const today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth() + 1,
    day = today.getDate(),
    formattedDate = `${year}-${"0" + month}-${"0" + day}`,
    hours = today.getHours(),
    minutes = today.getMinutes(),
    clock = hours + "." + minutes;
  return (
    <>
      <ScrollView style={stylesConfirmation.containerBody}>
        <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 15 }}>
          Transfer to
        </Text>
        <View style={stylesConfirmation.cardContainer}>
          {data ? (
            <Image
              source={{ uri: data.images }}
              style={stylesConfirmation.image}
            />
          ) : (
            <Image
              source={require("../../images/sakura.jpg")}
              style={stylesConfirmation.image}
            />
          )}
          <View style={stylesConfirmation.cardText}>
            <Text style={stylesConfirmation.name}>
              {data ? data.first_name : ""}
            </Text>
            <Text style={{ fontSize: 15, paddingTop: 5 }}>
              {data ? data.phone_number : ""}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 15 }}>
          Details
        </Text>
        <View style={stylesConfirmation.cardContainerDetails}>
          <View style={stylesConfirmation.cardText}>
            <Text style={stylesConfirmation.name}>Amounnt</Text>
            <Text style={{ fontSize: 20, paddingTop: 5, fontWeight: "700" }}>
              Rp.{transaction.total_transaction}
            </Text>
          </View>
        </View>
        <View style={stylesConfirmation.cardContainerDetails}>
          <View style={stylesConfirmation.cardText}>
            <Text style={stylesConfirmation.name}>Balance Left</Text>
            <Text style={{ fontSize: 20, paddingTop: 5, fontWeight: "700" }}>
              Rp.{balanceLeft}
            </Text>
          </View>
        </View>
        <View style={stylesConfirmation.cardContainerDetails}>
          <View style={stylesConfirmation.cardText}>
            <Text style={stylesConfirmation.name}>Date & Time</Text>
            <Text style={{ fontSize: 20, paddingTop: 5, fontWeight: "700" }}>
              {formattedDate + " - " + clock}
            </Text>
          </View>
        </View>
        <View style={stylesConfirmation.cardContainerDetails}>
          <View style={stylesConfirmation.cardText}>
            <Text style={stylesConfirmation.name}>Notes</Text>
            <Text style={{ fontSize: 20, paddingTop: 5, fontWeight: "700" }}>
              {transaction.information}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={stylesConfirmation.button}
          onPress={handleSubmit}
        >
          <Text style={stylesConfirmation.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
