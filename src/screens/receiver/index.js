import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styleReceiver from "../../styles/styleReceiver";
import { useState, useEffect } from "react";
styleReceiver;

export default function ReceiverScreen({ navigation }) {
  const [dataUsers, setDataUsers] = useState([]),
    [refetch, setRefetch] = useState(false),
    [isModalVisible, setIsModalVisible] = useState(false);

  // Search

  //to get id Receiver
  const navigateById = (id_users, navigation) => {
    navigation.navigate("Transfer", { id_users: id_users });
    AsyncStorage.setItem("id_reciver", id_users);
    console.log(id_users, "dari navigate");
  };
  const handleLongPress = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    axios
      .get(`https://fazzpay-be.cyclic.app/api/v1/users?limit=10`)
      .then((res) => setDataUsers(res.data.data))
      .catch((err) => console.log(err.message));
  }, [refetch]);

  console.log(dataUsers);

  return (
    <>
      <View style={styleReceiver.containerBody}>
        <View style={{ marginTop: 5 }}>
          <TextInput
            style={{
              width: "100%",
              height: 36,
              backgroundColor: "#fff",
              paddingHorizontal: 8,
              borderRadius: 10,
            }}
            placeholder="🔍 Search"
          />
        </View>
        <View style={{ paddingTop: 5 }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Contacts</Text>
          <Text style={{ fontSize: 12, paddingTop: 5 }}>
            {dataUsers.length} Contacts Found
          </Text>
        </View>
        <ScrollView>
          <View style={{ height: 900 }}>
            {dataUsers.map((item) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPressIn={() => {}}
                  onPressOut={() => {}}
                  onPress={() => navigateById(item.id_users, navigation)}
                  style={styleReceiver.cardContainer}
                >
                  {item.images ? (
                    <Image
                      source={{
                        uri: item.images,
                      }}
                      style={styleReceiver.image}
                    />
                  ) : (
                    <Image
                      source={require("../../images/default-person.jpg")}
                      style={styleReceiver.image}
                    />
                  )}
                  <TouchableWithoutFeedback onLongPress={handleLongPress}>
                    <View style={styleReceiver.cardText}>
                      <Text style={styleReceiver.name}>
                        {item ? item.first_name : ""}
                      </Text>
                      <Text style={{ fontSize: 10, paddingTop: 10 }}>
                        {item ? item.phone_number : ""}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <Modal
          visible={isModalVisible}
          transparent={true}
          onRequestClose={handleModalClose}
        >
          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={styleReceiver.modalBackground}>
              <View style={styleReceiver.modalContainer}>
                <Text style={styleReceiver.modalText}>
                  Are you sure you want to delete this card?
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => alert("Delete button pressed")}
                >
                  <View style={styleReceiver.deleteButton}>
                    <Text style={styleReceiver.deleteButtonText}>Delete</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </>
  );
}
