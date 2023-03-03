import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import stylesTransaction from "../../styles/styleTransaction";
export default function TransactionScreen() {
  return (
    <>
      <ScrollView>
        <View style={stylesTransaction.containerBody}>
          <View style={stylesTransaction.saldo}>
            <View
              style={{
                display: "flex",
                gap: 5,
              }}
            >
              <Text style={{ color: "#ffff", fontSize: 25, paddingLeft: 10 }}>
                ⬇
              </Text>
              <View>
                <Text>Income</Text>
                <Text
                  style={{
                    color: "#ffff",
                    fontSize: 15,

                    fontWeight: "600",
                  }}
                  onPress={() => {
                    navigation.navigate("Transaction");
                  }}
                >
                  Rp.2.120.000
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                gap: 5,
              }}
            >
              <Text style={{ color: "#ffff", fontSize: 25, paddingLeft: 10 }}>
                ⬇
              </Text>
              <View>
                <Text>Income</Text>
                <Text
                  style={{
                    color: "#ffff",
                    fontSize: 15,

                    fontWeight: "600",
                  }}
                  onPress={() => {
                    navigation.navigate("Transaction");
                  }}
                >
                  Rp.2.120.000
                </Text>
              </View>
            </View>
            <Text
              style={{ color: "#ffff", paddingTop: 5, fontSize: 12 }}
            ></Text>
          </View>
          <View
            style={{
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              In This Week
            </Text>
            <Image source={require("../../images/graphic.png")} />
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
            <View style={{ height: 500 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return (
                  <View style={stylesTransaction.cardContainer}>
                    <Image
                      source={require("../../images/sakura.jpg")}
                      style={stylesTransaction.image}
                    />
                    <View style={stylesTransaction.cardText}>
                      <Text style={stylesTransaction.name}>
                        Miyawaki Sakura
                      </Text>
                      <Text style={{ fontSize: 10 }}>Transfer</Text>
                    </View>
                    <Text style={stylesTransaction.price}>+Rp.50.000</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}
