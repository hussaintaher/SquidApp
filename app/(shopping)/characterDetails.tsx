import { Image, StyleSheet, View, Text, Pressable } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import Colors from "@/constants/Colors";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Tabs from "@/components/Tabs";

export default function CharacterDetails() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header */}
      <View
        style={{
          width: "100%",
          position: "absolute",
          top: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 1,
          paddingHorizontal: 40,
        }}
      >
        <View>
          <Pressable onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </Pressable>
        </View>
        <View>
          <Ionicons name="heart-outline" size={30} color="black" />
        </View>
      </View>

      {/* Banner */}
      <View style={{ height: "60%", flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: Colors.pink.light,
            height: "100%",
            width: "50%",
            borderBottomRightRadius: 50,
          }}
        ></View>
        <Image
          source={require("../../assets/images/Characters/Supervisor toy.png")}
          style={{
            width: 138,
            height: 398,
            position: "absolute",
            top: 90,
            left: 125,
          }}
        />
      </View>

      {/* Footer */}
      <View style={{ flex: 1, padding: 20, width: "100%" }}>
        <Text style={{ fontSize: 36, marginBottom: 10, fontWeight: "bold" }}>
          Supervisor toy
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: "#8B8BA1",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          $79.9
        </Text>

        {/* Increment & decrement */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              borderRadius: "50%",
              backgroundColor: Colors.pink.light,
              width: 44,
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <AntDesign name="minus" size={15} color="black" />
          </View>
          <Text style={{ marginRight: 20, fontWeight: "bold" }}>1</Text>
          <View
            style={{
              borderRadius: "50%",
              backgroundColor: Colors.pink.light,
              width: 44,
              height: 44,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="plus" size={15} color="black" />
          </View>
        </View>

        {/* Stars */}
        <View
          style={{
            flexDirection: "row",
            marginBottom: 26
          }}
        >
          <Image
            source={require("../../assets/images/Characters/Star.png")}
            style={{ width: 18, height: 18, marginLeft: 5 }}
          />
          <Image
            source={require("../../assets/images/Characters/Star.png")}
            style={{ width: 18, height: 18, marginLeft: 5 }}
          />
          <Image
            source={require("../../assets/images/Characters/Star.png")}
            style={{ width: 18, height: 18, marginLeft: 5 }}
          />
          <Image
            source={require("../../assets/images/Characters/Star.png")}
            style={{ width: 18, height: 18, marginLeft: 5 }}
          />
          <Image
            source={require("../../assets/images/Characters/Star.png")}
            style={{ width: 18, height: 18, marginLeft: 5 }}
          />
          <Text style={{ marginLeft: 5, color: "#979797" }}>5.5</Text>
        </View>

        {/* Buttons */}
        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
          <Pressable
              style={{
                width: 162,
                height: 62,
                backgroundColor: Colors.pink.light,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
                flexDirection: 'row',
              }}
            >
              <Text style={{fontWeight: 'bold', color: 'black', marginRight: 8}}>Add to cart</Text>
              <SimpleLineIcons name="basket" size={23} color="black" />            
            </Pressable>
            <Pressable
              style={{
                width: 143,
                height: 62,
                backgroundColor: Colors.pink.dark,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{fontWeight: 'bold', color: 'white'}}>Buy Now</Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
