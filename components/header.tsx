
import {StyleSheet, View,ScrollView} from "react-native";
import React from 'react';
import {Chip} from 'react-native-paper';


export default function Header1()
{
    return(
<View >
        <View style={styles.safeArea}></View>
        <View style={styles.header}>
  <ScrollView  horizontal={true}>
  <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
  <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip with longer text</Chip>
  <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip third with overflow</Chip>
  <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
  </ScrollView>
</View>
</View>
    );
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#f6f6f6',
        height:'7%',
        borderRadius:25,
        
        
      },chip:
      {
      backgroundColor:'orange',
      height:40,
      marginTop:10,
      marginLeft:10,
      textAlign:'center',
     
      },
      safeArea:{
        backgroundColor:'green',
        height:'3%'
      },
      scrollView:
      {
       width:'95%',
       borderRadius:25
      }

})