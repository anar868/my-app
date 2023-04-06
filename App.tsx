import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Words from "./pages/words";
import Texts from "./pages/texts";
import {NavigationContainer} from '@react-navigation/native';

import Swiper from "react-native-swiper";
import Main from "./pages/main";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import BottomSheet from "./components/bottomSheet";
import React, { useState } from "react";
import Register from "./pages/register";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const token = "token";
  const [showRegister, setShowRegister] = useState(false); 
  let content;
  let bottom;
  if(token.length>2)
  {
    content =  <Swiper
    style={styles.container}
    index={1}
    loop={false}
    showsPagination={false}
    showsButtons={false}
    nextButton={<Text style={styles.buttonText}>›</Text>}
    prevButton={<Text style={styles.buttonText}>‹</Text>}
    buttonWrapperStyle={styles.buttonWrapperStyle}
  >
   <Words></Words>
   
    <Main></Main>
  
    
  
    
  </Swiper>
  }else if(token.length<2)
  {
    content=<Register></Register>
  }
  if(token.length>2){bottom = <BottomSheet></BottomSheet>}else if(token.length<2){bottom=null}


  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        
       {content}
      </PaperProvider>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 40,
    color: "black",
  },
  buttonWrapperStyle: {
    position: "absolute",
    paddingHorizontal: 1,
  },
  container: {
    backgroundColor: "#ececec",
  },
});
/**
 * 
 * 
 * <Register></Register>
        <Swiper
          style={styles.container}
          index={1}
          loop={false}
          showsPagination={false}
          showsButtons={false}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
          buttonWrapperStyle={styles.buttonWrapperStyle}
        >
          <Words></Words>
          <Main></Main>
          <Texts></Texts>
        </Swiper>
 * 
 * 
 * 
 * <Texts></Texts>
 * 
 * 
 * 
 *   {bottom}
 * 
 */