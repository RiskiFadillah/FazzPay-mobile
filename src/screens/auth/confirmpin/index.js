import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import stylesAuth from "../../../styles/globalcss";
stylesAuth;
import stylesTfPins from "../../../styles/styleTfPins";
stylesTfPins;
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmPinScreen() {
  const [pin, setPin] = useState("");
  const handlePinInput = (value, index) => {
    const newPin = pin.split("");
    newPin[index] = value;
    setPin(newPin.join(""));
  };
  const navigation = useNavigation();

  const [isIdSender, setIsIdSender] = useState({
    id_reciver: false,
    data: {},
  });
  const [isTransaction, setIsTransaction] = useState({
    id_reciver: false,
    data: {},
  });
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
  // Mengambil Date
  const today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth() + 1,
    day = today.getDate(),
    formattedDate = `${year}-${"0" + month}-${"0" + day}`,
    hours = today.getHours(),
    minutes = today.getMinutes(),
    clock = hours + "." + minutes;

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
  console.log(isTransaction, "ini id sender");
  const dataId = {
    id_sender: id_sender,
    id_reciver: id_reciver,
    total_transaction: transaction.total_transaction,
    information: transaction.information,
    date_hours: formattedDate + " - " + clock,
  };
  console.log(dataId, "ini data id");

  const handleConfirm = async () => {
    if (pin.length !== 6) {
      ToastAndroid.show("All pins must be filled in", ToastAndroid.SHORT);
    } else {
      const dataPin = {
        pin: pin,
        id_users: id_sender,
      };
      const dataId = {
        id_sender: id_sender,
        id_reciver: id_reciver,
        total_transaction: transaction.total_transaction,
        information: transaction.information,
        date_hours: formattedDate + " - " + clock,
      };
      console.log(dataPin);
      console.log(dataId);
      try {
        const response1 = await axios.post(
          "http://192.168.1.4:5000/api/v1/transaction/updatetransaction/",
          dataId
        );
        const response2 = await axios.post(
          "http://192.168.1.4:5000/api/v1/auth/confirm-pin",
          dataPin
        );
        console.log(response1.data);
        console.log(response2.data);
        navigation.navigate("Dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <View style={stylesTfPins.container}>
        <View style={stylesTfPins.containerbody}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              paddingBottom: 8,
              fontWeight: "700",
            }}
          >
            Enter PIN to Transfer
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: "300",
            }}
          >
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </Text>
        </View>
        <View style={stylesTfPins.pinContainer}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              key={index}
              style={stylesTfPins.pinInput}
              keyboardType="numeric"
              maxLength={1}
              secureTextEntry={true}
              onChangeText={(value) => handlePinInput(value, index)}
              value={pin[index] || ""}
            />
          ))}
        </View>
        <TouchableOpacity
          style={stylesTfPins.confirmButton}
          onPress={handleConfirm}
        >
          <Text style={stylesTfPins.confirmButtonText}>Transfer Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
