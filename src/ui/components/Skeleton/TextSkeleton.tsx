import React from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const TextSkeleton = () => {
  const imageOpacity = new Animated.Value(0.5);
  const textOpacity = new Animated.Value(0.5);

  const imageAnimation = Animated.loop(
    Animated.sequence([
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(imageOpacity, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: true,
      }),
    ])
  );
  const textAnimation = Animated.loop(
    Animated.sequence([
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: true,
      }),
    ])
  );

  imageAnimation.start();
  textAnimation.start();

  return (
    <View style={styles.textSkeleton}>
      <Animated.View testID={'text-skeleton'} style={[styles.titleSkeleton, { opacity: textOpacity }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  textSkeleton: {
    alignItems: "flex-start",
  },
  titleSkeleton: {
    width: 250,
    height: 16,
    marginTop: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
});

export default TextSkeleton;
