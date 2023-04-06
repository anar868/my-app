import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Card, Title, Paragraph, Badge } from "react-native-paper";

export default function Footer1() {
  const [modalVis, setModalVis] = useState(false);
  const [text, onChangeText] = useState(" ");

  



  return (
    <View style={styles.view}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVis}
        onRequestClose={() => {
          setModalVis(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize:30,}}>Add a new word</Text>
            <TextInput 
            style={{backgroundColor:"#e1e1e1",borderRadius:25,width:200, paddingBottom:2,marginBottom:25,}}
            onChangeText={onChangeText} 
            value={text} />
            <Button title="SAVE" onPress={() => setModalVis(false)}></Button>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVis(true)}>
        <Badge size={40} style={styles.button}>
          +
        </Badge>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "#b98dff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  view: {
    alignSelf: "center",
    textAlign: "center",
  },
  button: {
    margin: 2,
    backgroundColor: "#ff3b4a",
    fontSize: 35,
    fontWeight: "normal",
  },
});
