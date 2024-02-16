import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
} from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Tabs from "@/components/Tabs";

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WhiteBG }}>
      <View style={styles.container}>
        {/* Header */}
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
            paddingHorizontal: 26,
          }}
        >
          <View style={{ width: 84, paddingRight: 20 }}>
            <Image
              source={require("../../assets/images/Characters/logosm2.png")}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </View>

          <View
            style={{
              backgroundColor: "#D9D9E8",
              flex: 3,
              maxWidth: 178,
              borderRadius: 20,
              paddingHorizontal: 10,
              flexDirection: "row",
              height: "50%",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                flex: 1,
                maxWidth: 178,
                borderRadius: 20,
                height: "100%",
                paddingLeft: 10,
              }}
              placeholder="Search"
              placeholderTextColor={"black"}
              underlineColorAndroid="transparent"
            />
            <Image
              source={require("../../assets/images/Characters/Search icon.png")}
              style={{ width: 24, height: 24 }}
            />
          </View>

          <View
            style={{
              alignItems: "center",
              flex: 1,
            }}
          >
            <Image
              source={require("../../assets/images/Characters/Hambuger.png")}
              style={{ width: 28, height: 17 }}
            />
          </View>
        </View>

        {/* Recommended For You */}
        <View
          style={{
            flex: 4,
            width: "100%",
            flexDirection: "column",
            //backgroundColor: 'red'
            marginLeft: 26,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              marginBottom: 10,
            }}
          >
            Recommended for you
          </Text>

          <View style={{ height: 359, justifyContent: "center" }}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ paddingRight: 30 }}
            >
              {/* First Character */}
              <View
                style={{
                  width: 196,
                  minHeight: 314,
                  borderRadius: 11,
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "90%",
                    borderRadius: 11,
                    padding: 16,
                  }}
                >
                  <View style={{ flex: 4 }}>
                    <Image
                      source={require("../../assets/images/Characters/Group 3.png")}
                      style={{
                        width: 20.47,
                        height: 19.5,
                        position: "absolute",
                        top: 0,
                        right: -3,
                        zIndex: 1,
                      }}
                    />
                    <Image
                      source={require("../../assets/images/Characters/Staff toy 2.png")}
                      style={{
                        width: 98,
                        height: 280,
                        position: "absolute",
                        top: -45,
                        left: "50%",
                        marginLeft: -50,
                        zIndex: 1,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      //backgroundColor: 'white',
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      Supervisor toy
                    </Text>
                    <Image
                      source={require("../../assets/images/Characters/Star.png")}
                      style={{ width: 18, height: 18 }}
                    />
                  </View>

                  <View
                    style={{
                      backgroundColor: Colors.pink.dark,
                      width: "100%",
                      height: 47,
                      justifyContent: "center",
                      borderRadius: 13,
                    }}
                  >
                    <Pressable
                      onPress={() =>
                        router.push("/(shopping)/characterDetails")
                      }
                      style={{}}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "white",
                        }}
                      >
                        View details
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>

              {/* Second Character */}
              <View
                style={{
                  width: 196,
                  minHeight: 314,
                  borderRadius: 11,
                  justifyContent: "flex-end",
                  marginLeft: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "90%",
                    borderRadius: 11,
                    padding: 16,
                  }}
                >
                  <View style={{ flex: 4 }}>
                    <Image
                      source={require("../../assets/images/Characters/Group 3.png")}
                      style={{
                        width: 20.47,
                        height: 19.5,
                        position: "absolute",
                        top: 0,
                        right: -3,
                        zIndex: 1,
                      }}
                    />
                    <Image
                      source={require("../../assets/images/Characters/Black master toy 2.png")}
                      style={{
                        width: 115,
                        height: 297,
                        position: "absolute",
                        top: -45,
                        left: "50%",
                        marginLeft: -50,
                        zIndex: 1,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      //backgroundColor: 'white',
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      Supervisor toy
                    </Text>
                    <Image
                      source={require("../../assets/images/Characters/Star.png")}
                      style={{ width: 18, height: 18 }}
                    />
                  </View>

                  <View
                    style={{
                      backgroundColor: Colors.pink.dark,
                      width: "100%",
                      height: 47,
                      justifyContent: "center",
                      borderRadius: 13,
                    }}
                  >
                    <Pressable
                      onPress={() =>
                        router.push("/(shopping)/characterDetails")
                      }
                      style={{}}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "white",
                        }}
                      >
                        View details
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Recent Orders */}
        <View
          style={{
            flex: 2,
            width: "100%",
            paddingHorizontal: 16,
            paddingVertical: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Recent Orders
          </Text>
          {/* Card Container */}
          <View style={{ flex: 1 }}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ paddingRight: 30 }}
            >
              {/* Card One */}
              <View style={{ width: 219, justifyContent: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    height: 85,
                    backgroundColor: "white",
                    borderRadius: 11,
                    justifyContent: "flex-end",
                    padding: 15,
                  }}
                >
                  <View style={{ width: "70%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                      Collector outfit
                    </Text>
                    <Text style={{ fontSize: 12 }}>3 items ordered</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 6,
                      }}
                    >
                      <Text
                        style={{
                          marginRight: 5,
                          color: "#8B8BA1",
                          fontSize: 12,
                        }}
                      >
                        View details
                      </Text>
                      <AntDesign name="arrowright" size={15} color="black" />
                    </View>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      width: 57,
                      height: 111,
                      top: -25,
                      left: 10,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/Characters/Staff 2.png")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>
              </View>

              {/* Card Two */}
              <View
                style={{ width: 219, justifyContent: "center", marginLeft: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    height: 85,
                    backgroundColor: "white",
                    borderRadius: 11,
                    justifyContent: "flex-end",
                    padding: 15,
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                      Doll
                    </Text>
                    <Text style={{ fontSize: 12 }}>1 item ordered</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 6,
                      }}
                    >
                      <Text
                        style={{
                          marginRight: 5,
                          color: "#8B8BA1",
                          fontSize: 12,
                        }}
                      >
                        View details
                      </Text>
                      <AntDesign name="arrowright" size={15} color="black" />
                    </View>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      width: 85,
                      height: 111,
                      top: -25,
                      left: 10,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/Characters/doll 1.png")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      {/* Main Icons Container */}
      <Tabs />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.WhiteBG,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 36,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    backgroundColor: "red",
    color: "#424242",
    width: "100%",
    height: "100%",
  },
});
