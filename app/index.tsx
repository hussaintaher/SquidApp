import React from "react";
import { Text } from "@/components/Themed";
import {
  Platform,
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Button,
  Pressable
} from "react-native";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';


const HomePage = () => {
    const router = useRouter();


  return (
    <View style={{ position: "relative", flex: 1 }}>
      <View
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          flex: 1,
          backgroundColor: "#FFF",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/images/Characters/Background.png")}
        />
      </View>

      {/* Main Container */}
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          height: "100%",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        {/* Logo */}
        <View style={{ marginTop: 42, alignItems: "center" }}>
          <Image
            style={{ width: 78, height: 29 }}
            source={require("../assets/images/Characters/logosm1.png")}
          />
        </View>

        {/* Shop Now */}
        <View
          style={{
            marginTop: "100%",
            width: "80%",
            height: 308,
            backgroundColor: 'rgba(255, 255, 255, 0.34)',
            alignSelf: "center",
            borderRadius: 40,
            padding: 19,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Image
            style={{ width: 240, height: 145 }}
            source={require("../assets/images/Characters/Logo.png")}
          />
          <Text style={{ textAlign: "center" }}>
            Shop your favourite toys and outfits of the Squid Game on the go!
          </Text>

          <View
            style={{
              backgroundColor: Colors.pink.dark,
              width: "100%",
              height: 56,
              justifyContent: 'center',
              borderRadius: 13,
            }}
          >
            <Pressable onPress={() => router.push('/(shopping)/')} style={{}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24}}>Shop Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
