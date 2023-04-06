import { StyleSheet, View, Text, Dimensions } from "react-native";
import React, { useEffect } from "react";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Footer1 from "./footer";
import BottomContent from "./bottomContent";
import { Chip } from "react-native-paper";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function BottomSheet() {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT + 380);
      console.log(translateY.value);
    })
    .onEnd(() => {
      if (translateY.value > -220 && translateY.value <60 ) {
        translateY.value = withSpring(-18, { damping: 50 });
      } else if (translateY.value < -220 && translateY.value > -422) {
        translateY.value = withSpring(-417, { damping: 50 });
      }
    });

  useEffect(() => {
    (translateY.value = withSpring(-18)), { damping: 50 };
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateY.value }] };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <Footer1></Footer1>
        <View style={styles.header}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              Example Chip
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              Example Chip with longer text
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              Example Chip third with overflow
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              Example Chip
            </Chip>
          </ScrollView>
        </View>
        <BottomContent></BottomContent>
        <BottomContent></BottomContent>
      </Animated.View>
    </GestureDetector>
  );
}
const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: 450,
    width: "100%",
    backgroundColor: "grey",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 90,
    height: 4,
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
  footer: {
    backgroundColor: "grey",
    height: "10%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  header: {
    backgroundColor: "#grey",
  },
  chip: {
    backgroundColor: "orange",
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    textAlign: "center",
  },
});
