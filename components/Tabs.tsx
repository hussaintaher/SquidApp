import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, Entypo, SimpleLineIcons } from "@expo/vector-icons";
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

const Tabs = () => {
  return (
    <View
    style={{
        width: "100%",
        height: 84,
        top: "100%",
        position: "absolute",
        alignItems: "center",
      }}
    >
{/* Icons Container */}
<View
          style={{
            minWidth: 261,
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: 'center',
            marginBottom: 20
          }}
        >
          {/* Icon one */}
          <Pressable
            style={{
              borderRadius: "50%",
              backgroundColor: 'rgba(255, 206, 224, 1)',
              width: 56,
              height: 56,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
              evolutions: 0.5
            }}
          >
            <Entypo name="home" size={24} color="white" />          
          </Pressable>

          {/* Icon Two */}
          <Pressable
            style={{
              width: 44,
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <SimpleLineIcons name="basket" size={24} color="black" />         
          </Pressable>
          {/* Icon Three */}
          <Pressable
            style={{
              width: 44,
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <AntDesign name="hearto" size={24} color="black" /> 
          </Pressable>
          {/* Icon Four */}
          <Pressable
            style={{
              width: 44,
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <Ionicons name="settings-outline" size={24} color="black" /> 
          </Pressable>
        </View>
    </View>
  )
}

export default Tabs