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
import stylesTransfer from "../../styles/styleTransfer";
stylesTransfer;
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function TransferReceiver() {
  const navigation = useNavigation();
  // Get User Reciver By Id
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isIdReceiver, setIsIdReceiver] = useState({
    id_reciver: false,
    data: {},
  });
  const [isIdSender, setIsIdSender] = useState({
    id_reciver: false,
    data: {},
  });
  const [formTrasnsfer, setFormTransfer] = useState({
    total_transaction: 0,
    information: "",
  });

  // SetItem Transfer to Async Storage
  const handleInputChange = (field, value) => {
    setFormTransfer({ ...formTrasnsfer, [field]: value });
  };
  const handleSubmit = async () => {
    const dataId = {
      id_sender: id_sender,
      id_reciver: id_receiver,
      total_transaction: formTrasnsfer.total_transaction,
      information: formTrasnsfer.information,
    };
    console.log(dataId, "ini dari dataId");
    try {
      await AsyncStorage.setItem("DataTransaction", JSON.stringify(dataId));
      console.log("Data saved successfully");
      navigation.navigate("Confirmation");
    } catch (error) {
      console.error(error);
    }
  };

  // Get Data from Async Storage
  const getData = async () => {
    try {
      const id_reciver = await AsyncStorage.getItem("id_reciver");
      const id = await AsyncStorage.getItem("userLogin");
      const id_sender = JSON.parse(id);
      if (id_reciver !== null && id !== null) {
        setIsIdSender({
          id_sender: true,
          data: id_sender,
        });
        setIsIdReceiver({
          id_reciver: true,
          data: id_reciver,
        });
      } else {
        setIsIdSender({
          id_sender: false,
          data: null,
        });
        setIsIdReceiver({
          id_reciver: false,
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
  console.log(isIdReceiver.data, "ini id receiver");
  const id_receiver = isIdReceiver.data;
  const id_sender = isIdSender.data.user_profile
    ? isIdSender.data.user_profile.id_users
    : null;
  console.log(id_sender, "ini id sender");

  // Get User Reciver By Id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.3:5000/api/v1/users/${id_receiver}`
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

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

  const images = data.images;
  return (
    <>
      <View style={stylesTransfer.containerBody}>
        <View style={stylesTransfer.cardContainer}>
          {data ? (
            <Image source={{ uri: images }} style={stylesTransfer.image} />
          ) : (
            <Image
              source={require("../../images/sakura.jpg")}
              style={stylesTransfer.image}
            />
          )}
          <View style={stylesTransfer.cardText}>
            <Text style={stylesTransfer.name}>{data.first_name}</Text>
            <Text style={{ fontSize: 15, paddingTop: 5 }}>
              {data.phone_number}
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ textAlign: "center" }}>
            Rp.{isIdSender.data.user_profile.balance}
            {isIdSender.data.user_profile.balance === 0
              ? " Not enough saldo"
              : " Available"}
          </Text>
          <TextInput
            style={stylesTransfer.inputAmount}
            placeholder="0.00"
            placeholderTextColor="#A9A9A9"
            textAlign="center"
            keyboardType="numeric"
            onChangeText={(number) =>
              handleInputChange("total_transaction", number)
            }
          />
          <TextInput
            style={[stylesTransfer.input]}
            placeholder="🖊Add some notes"
            placeholderTextColor="#A9A9A9"
            textAlign="center"
            onChangeText={(text) => handleInputChange("information", text)}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={stylesTransfer.button}
              onPress={handleSubmit}
            >
              <Text style={stylesTransfer.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
