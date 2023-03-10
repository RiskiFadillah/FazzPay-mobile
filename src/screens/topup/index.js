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
} from "react-native";
import stylesTopUp from "../../styles/styleTopup";

export default function TopupScreen() {
  return (
    <>
      <View style={stylesTopUp.containerBody}>
        <View style={stylesTopUp.containerTop}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            Saldo Fazzpay Cash
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 15, fontWeight: "700" }}>Pilih Metode</Text>
        </View>
        <TouchableOpacity
          style={stylesTopUp.buttonInfo}
          onPress={() => navigation.navigate("Personal Information")}
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
          onPress={() => navigation.navigate("Personal Information")}
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
          onPress={() => navigation.navigate("Change Pin")}
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
          onPress={() => navigation.navigate("Change Pin")}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            📱 Internet / Mobile Bangking
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
          onPress={() => navigation.navigate("Change Pin")}
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
      </View>
    </>
  );
}
