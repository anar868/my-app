
import {StyleSheet, View,Text} from "react-native";
import React from 'react';
import Card1 from "./card";

export default function BottomContent()
{
    return(

 <View style={[styles.header, { flex:1,flexDirection:"row"}]}>
 <View style={{flex:1}} >
   <Card1></Card1>
 </View>
  <View style={{flex:1}} >
   <Card1></Card1>
  </View>

 </View>

    

    )
}
const styles = StyleSheet.create({

    header:{
        backgroundColor:'#f6f6f6',
        height:'17%',
    },
    
})