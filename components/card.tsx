import {StyleSheet, View} from "react-native";
import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Card1()
{
    return(
    <View>
        
<Card style={styles.card}>
    <Card.Content>
        <Title>Card Title</Title>
        <Paragraph>Lorem ipsum dolor sit amet lorem ipsum</Paragraph>
    </Card.Content>        
 </Card>
 </View>
);
}
const styles = StyleSheet.create({
   card: {
    backgroundColor:'white',
    height:115,
    width:150,
    borderRadius:20,
    padding:10,
    margin:10,
    alignSelf:'center',

   },
    });