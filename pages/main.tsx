import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Button,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import { ScrollView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height;

export default function Main() {
  const data0 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellusmollis nulla quis mauris placerat, eu suscipit felis rutrum.Pellentesque dapibus odio vitae nunc pretium pretium. Sed id erosmagna. Etiam fermentum nisl urna, at scelerisque odio cursus ac.Nulla porta lobortis augue, at pulvinar libero aliquam a. Integersollicitudin velit vel quam rhoncus, vel aliquet quam cursus.Aliquam erat volutpat. Praesent ligula magna, efficitur et magna ac,faucibus condimentum odio. Donec elementum neque et libero convallisvehicula. Ut nec pulvinar erat. Phasellus diam tellus, tincidunt nonlacinia sed, porttitor sit amet eros. Sed quis leo eros. Etiamtincidunt fringilla velit, non congue augue luctus et. Aenean semtellus, rhoncus eget nunc vitae, molestie tempus orci. Duis ornareturpis et libero egestas, ac semper dolor tristique. Lorem ipsumdolor sit amet, consectetur adipiscing elit. Donec a elit eu nisivestibulum sagittis. In eget tellus leo. Vivamus vitae condimentumlibero. Morbi finibus facilisis massa vitae hendrerit. Sed tinciduntporta iaculis. Proin condimentum nibh viverra lorem gravida,ultrices semper neque rutrum. Pellentesque porttitor luctus orci, agravida lacus sagittis ut. Ut nec pulvinar erat. Phasellus diamtellus, tincidunt non lacinia sed, porttitor sit amet eros. Sed quisleo eros. Etiam tincidunt fringilla velit, non congue augue luctuset. Aenean sem tellus, rhoncus eget nunc vitae, molestie tempusorci. Duis ornare turpis et libero egestas, ac semper dolortristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec a elit eu nisi vestibulum sagittis. In eget tellus leo.Vivamus vitae condimentum libero. Morbi finibus facilisis massavitae hendrerit. Sed tincidunt porta iaculis. Proin condimentum nibhviverra lorem gravida, ultrices semper neque rutrum. Pellentesqueporttitor luctus orci, a gravida lacus sagittis ut.";
  const data1 = "hi my name is kaan";
  const data2 =
    "this is second text is longer and repeat itself.this is second text is longer and repeat itself.this is second text is longer and repeat itself.";
  var listOfWords = [
    ["1", "2", "3", "4"],
    ["5", "6", "7", "8"],
    ["10", "11", "12", "13"],
  ];
  var currentPageWords = [];
  var arrOfTexts = [
    data0,
    data1,
    data2,
    data0,
    data1,
    data2,
    data0,
    data1,
    data2,
  ];
  var arrOfHigligtWords = [
    [
      "lorem",
      "dolor",
      "dolor",
      "dolor",
      "dolor",
      "dolor",
      "dolor",
      "dolor",
      "dolor",
      "dolor",
      "dolor",
    ],
    ["kaan"],
    ["this", "is"],
  ];
  var newArrOfHighlightWords = [];
  var myLoop = [];
  var words = [];
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTextNum, setCurrentTextNum] = useState(0);
  const [wordModalVisible, setWordModalVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(" ");
  words = ["lorem", "ipsum"];

  function veryImportantFunc(str: string) {
    let k;
    let y: any = [];
    k = str.split(" ");
    /*  {
    {word1;word2;}
  }*/

    k.forEach((x) => {
      y.push(
        <Text
          onPress={() => {
            console.log(x);
            setCurrentWord(x);
            setWordModalVisible(!wordModalVisible);
            console.log(x);
          }}
        >
          {x}{" "}
        </Text>
      );
    });
    return y;
  }

  useEffect(() => {
    // use current text num to renew words
    console.log(currentTextNum);
    console.log(ITEM_HEIGHT);
  });

  return (
    <View>
      <FlatList
        data={arrOfTexts}
        keyExtractor={(x, i: any) => i.toString()}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View key={item} style={styles.main}>
              <View style={styles.container}>
                <Text adjustsFontSizeToFit={true} style={styles.text}>
                  {veryImportantFunc(item)}
                </Text>
              </View>

              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    console.log("X");
                  }}
                >
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={{ height: 40, width: 40 }}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    console.log("Y");
                  }}
                >
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={{ height: 40, width: 40 }}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    console.log("Z");
                  }}
                >
                  <Image
                    source={{
                      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgElEQVR4nO2dv2oUURxGr2IQLCxsrHwAS1mQFN4vEAhIwNfYTtDK3KuwvoKtdr6GnXa2Vhb+gWhlaSGI+sks0Soh2bCT32/COTCQbmf3fGfmdikFAAAgKdrzbu3eV7enfNXmL8N3KVPnPMjQPynd+2XqRP+IWvNVii+UKRP9AwohCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIQhJTfSiRSEISU30okUhCElN9KJFIWcspPm3ml/U7ufLvxESV0jtfrvVvfn/sx75Vu1+TSFnL+Sruudl4YtHfOa92vyZR9b4Qn7W5me3F756TJhltvCV2vy0Nv9Y5z3w77v7weOp+ZWe+GZZkfrYN2r3S4Ssr5D32vPuqiIOEbNdu99RyGlf2M3fh0fO3fu+XNbE1sKXhndPbf7GI+vkMv4Mj5jt5utlJDYXvja8i2r3L94hKxxjx2Z5TG5+w0t9xWPs2KxyTD7vp6wTH2PH5qTH5HMr5LTH2LE57pg8fSHNH8c4xo7NYcfk2v2pTB0176j7w3DdaX44m3ujTITZ3Bu1+8Hy/odhNe9E3xMAAEA5gr/MINFZOac3UgAAAABJRU5ErkJggg==",
                    }}
                    style={{ height: 45, width: 40 }}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      ></FlatList>

      <Modal animationType="fade" transparent={true} visible={wordModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>{currentWord}</Text>
            <Button
              title={"like " + currentWord}
              onPress={() => setWordModalVisible(false)}
            ></Button>
            <Button
              title={currentWord}
              onPress={() => setWordModalVisible(false)}
            ></Button>
            <Button
              title={"unknown " + currentWord}
              onPress={() => setWordModalVisible(false)}
            ></Button>
            {/* geri butonuyla ve */}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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

  main: {
    height: ITEM_HEIGHT,
    width: "100%",
    paddingRight: 40,
    padding: 10,
    backgroundColor: "#ececec",
    alignSelf: "center",
    justifyContent: "center",
  },
  container: {
    height: ITEM_HEIGHT * 0.9,
    padding: 10,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  text: {
    maxHeight: ITEM_HEIGHT,
    fontSize: 40,
    textAlign: "center",
  },
  buttons: {
    position: "absolute",
    bottom: "22rem",
    right: 0,
    height: 300,
    width: 60,
    alignContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  button: {
    justifyContent: "center",
    width: 25,
    height: 25,
    marginBottom: 25,
  },
  screen: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  touchableOp: {
    width: "95%",
    height: 80,
    margin: 1,
    padding: 1,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    fontSize: 200,
    borderRadius: 25,
  },
});
