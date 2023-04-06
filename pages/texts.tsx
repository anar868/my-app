import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import GoBackPage from "./gobackpage";

const data =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellusmollis nulla quis mauris placerat, eu suscipit felis rutrum.Pellentesque dapibus odio vitae nunc pretium pretium. Sed id erosmagna. Etiam fermentum nisl urna, at scelerisque odio cursus ac.Nulla porta lobortis augue, at pulvinar libero aliquam a. Integersollicitudin velit vel quam rhoncus, vel aliquet quam cursus.Aliquam erat volutpat. Praesent ligula magna, efficitur et magna ac,faucibus condimentum odio. Donec elementum neque et libero convallisvehicula. Ut nec pulvinar erat. Phasellus diam tellus, tincidunt nonlacinia sed, porttitor sit amet eros. Sed quis leo eros. Etiamtincidunt fringilla velit, non congue augue luctus et. Aenean semtellus, rhoncus eget nunc vitae, molestie tempus orci. Duis ornareturpis et libero egestas, ac semper dolor tristique. Lorem ipsumdolor sit amet, consectetur adipiscing elit. Donec a elit eu nisivestibulum sagittis. In eget tellus leo. Vivamus vitae condimentumlibero. Morbi finibus facilisis massa vitae hendrerit. Sed tinciduntporta iaculis. Proin condimentum nibh viverra lorem gravida,ultrices semper neque rutrum. Pellentesque porttitor luctus orci, agravida lacus sagittis ut. Ut nec pulvinar erat. Phasellus diamtellus, tincidunt non lacinia sed, porttitor sit amet eros. Sed quisleo eros. Etiam tincidunt fringilla velit, non congue augue luctuset. Aenean sem tellus, rhoncus eget nunc vitae, molestie tempusorci. Duis ornare turpis et libero egestas, ac semper dolortristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec a elit eu nisi vestibulum sagittis. In eget tellus leo.Vivamus vitae condimentum libero. Morbi finibus facilisis massavitae hendrerit. Sed tincidunt porta iaculis. Proin condimentum nibhviverra lorem gravida, ultrices semper neque rutrum. Pellentesqueporttitor luctus orci, a gravida lacus sagittis ut.";


export default function Texts() {
  const [modalVisible, setModalVisible] = useState(false);
  const pressOut = () => {
    console.log("pressed out");
  };
  return (
    
    <View>
      <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.screen}>
           <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}><Text>Hide Modal</Text></Pressable>
           <ScrollView><Text style={{fontSize:25}}>{data}</Text></ScrollView>
            </View>
          </Modal>


      <ScrollView>
        <View style={styles.safeAreaTop}></View>
        <Pressable
          onPress={() => {
            pressOut();
            GoBackPage("ssssssss");
            setModalVisible(true);
          }}
          style={styles.Card}
        >
          <Text></Text>
        </Pressable>
        <Pressable
          onPress={() => {
            pressOut();
          }}
          style={styles.Card}
        >
          <Text></Text>
        </Pressable>
        <Pressable
          onPress={() => {
            pressOut();
          }}
          style={styles.Card}
        >
          <Text></Text>
        </Pressable>
        <Pressable
          onPress={() => {
            pressOut();
          }}
          style={styles.Card}
        >
          <Text></Text>
        </Pressable>

        <View style={styles.safeAreaBottom}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    width: 350,
    height: 200,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "grey",
  },
  safeAreaTop: {
    height: 30,
  },
  safeAreaBottom: {
    height: 50,
  },
  screen:
  {
    width:"100%",
    height:"100%",
    backgroundColor:"grey",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
