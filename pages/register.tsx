import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Register() {
  const [text, setText] = useState("");
  return (
    <View>
      <Text>Register Screen is here</Text>
      <TextInput
        value={text}
        style={{ fontSize: 42, color: "steelblue" }}
        placeholder="Username"
        onChangeText={(text) => {
          setText(text);
        }}
      />
            <TextInput
        value={text}
        style={{ fontSize: 42, color: "steelblue" }}
        placeholder="Email"
        onChangeText={(text) => {
          setText(text);
        }}
      />
            <TextInput
        value={text}
        style={{ fontSize: 42, color: "steelblue" }}
        placeholder="Password"
        onChangeText={(text) => {
          setText(text);
        }}
      />
      
    </View>
  );
}
const styles = StyleSheet.create({});
