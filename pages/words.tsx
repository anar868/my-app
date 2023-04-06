import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Alert,
  Button,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Divider, Provider as PaperProvider } from "react-native-paper";
import Footer1 from "../components/footer";
const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH= width;
const ITEM_HEIGHT = height;



export default function Words() {  
  const [modalVisible, setModalVisible] = useState(false);
  const [wordModalVisible, setWordModalVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(" ");
  var allWords = ["1", "2", "3", "4"];
  var data ="this is my text to highligt and make buttons";
  var words= ["text","make","do","it","harder","also","perf","issues"];
  var thisWord = allWords[0];
  var wordViews: any = [];
  var sth:any=[];

function veryImportantFunc(str:string)
{
  let k ;
  let y:any=[];
  k= str.split(' ');

  k.forEach(x => {

     y.push(<><Text onPress={()=>{console.log(x);
       setCurrentWord(x);
       setWordModalVisible(!wordModalVisible);
       }}>{x} </Text>
       </>
       )
       
  });
    return y;
}
 
  


  return (
    <>
   











      <FlatList
      style={{height:ITEM_HEIGHT*.9}}
        data={allWords}
        keyExtractor={(x, i: any) => i.toString()}
        snapToInterval={ITEM_HEIGHT*.9}
        decelerationRate="fast"
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            
            
            <View style={{height:ITEM_HEIGHT*.9}}>
            <View key={item} style={styles.card1}>

              <View style={{height:"20%",width:"100%",alignItems:"center",padding:25}}>
              <Text onPress={()=>console.log("word")} style={{fontSize:45,padding:5}}>wordstem</Text>
              </View>
              <Divider bold={true} style={{backgroundColor:"black", width:"50%", alignSelf:"center",}} ></Divider>
              <View style={{height:"20%",width:"100%",display:"flex",flexDirection:"row"}}>
                <View style={{ height:"100%",width:"50%",alignItems:"center"}}>
                  <Text style={{fontSize:25,padding:5}}>word1</Text>
                  <Text style={{fontSize:25,padding:5}}>word3</Text>
                  <Text style={{fontSize:25,padding:5}}>word5</Text>
                </View>
                <View style={{height:"100%",width:"50%",alignItems:"center"}}>
                <Text style={{fontSize:25,padding:5}}>word2</Text>
                <Text style={{fontSize:25,padding:5}}>word4</Text>
                <Text style={{fontSize:25,padding:5}}>word6</Text>
        
                </View>
              </View>

              <Divider bold={true} style={{backgroundColor:"black", width:"50%", alignSelf:"center"}}></Divider>
              <View style={{height:"20%",width:"100%",alignItems:"center"}}>
              <Text style={{fontSize:25,paddingVertical:40,}}>Word-meaning is here</Text>
              </View>
              <Divider bold={true} style={{backgroundColor:"black", width:"50%", alignSelf:"center"}} ></Divider>      
              <View style={{height:"20%",width:"100%",alignItems:"center"}}>
                
              <Text style={{fontSize:25,textAlign:"center"}}>{veryImportantFunc(data)}</Text>
              </View>
              <Divider bold={true} style={{backgroundColor:"black", width:"50%", alignSelf:"center"}} ></Divider>                 
          
              
             
             <TouchableOpacity
          style={styles.learned}
          onPress={() => {
            setModalVisible(true);
            console.log(item);
          }}
        ><Text style={[{ fontSize: 25, textAlign: "center" }]}>Translated also button {item}</Text></TouchableOpacity>
            </View>
            </View>
          );
        }}
      ></FlatList>














      <Modal
        animationType="fade"
        transparent={true}
        visible={wordModalVisible} >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Button title={currentWord}  onPress={()=>setWordModalVisible(false)}></Button>
            <Button title={"unknown "+currentWord}  onPress={()=>setWordModalVisible(false)}></Button>
            </View>

          </View>
         
        </Modal>
      <View style={styles.plusArea}>
        <Footer1></Footer1>
      </View>
     
    </>
  );
}

const styles = StyleSheet.create({
  modalArea: {
    position: "absolute",
    top: 200,
    left: 200,
  },
  plusArea: {
    alignSelf: "center",
    width: "93%",
    height: 50,
    backgroundColor: "#96d69a",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  card1: {
    marginTop:100,
    height: 600,
    width: 320,
    borderRadius: 50,
    alignSelf: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#3e7aff",
    borderBottomWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  swiper: {},
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
  button: {
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  learned: {
    alignSelf: "center",
    backgroundColor: "#ececec",
    borderRadius: 25,
    margin: 25,
    width: "50%",
    padding: 5,
  },
});
