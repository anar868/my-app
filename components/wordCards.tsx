import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function wordCard(item:any) {
  return(
  <View
    style={{
      width: 300,
      height: 400,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Text style={{ fontSize: 80 }}>{item.id}</Text>
  </View>
  )
}
