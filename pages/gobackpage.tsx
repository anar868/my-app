import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default function GoBackPage(x: any) {
  return (<View>
    <Text>{x}</Text>
  </View>);
}

const styles = StyleSheet.create({
    view:
    {
     width:"100%",
     height:"100%",
     backgroundColor:"blue"
    }
});
