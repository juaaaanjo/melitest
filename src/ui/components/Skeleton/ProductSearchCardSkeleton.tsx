import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, Animated, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const ProductSearchCardSkeleton = () => {
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
    <View style={{flexDirection: "row", justifyContent:"space-between"}}> 
    <TouchableOpacity disabled>
      <View style={styles.card}>
        <Animated.View testID={'image-skeleton'} style={[styles.imageSkeleton, { opacity: imageOpacity }]} />
        <View style={styles.textSkeleton}>
          <Animated.View testID={'title-skeleton'} style={[styles.titleSkeleton, { opacity: textOpacity }]} />
          <Animated.View testID={'subtitle-skeleton'} style={[styles.subtitleSkeleton, { opacity: textOpacity }]} />
        </View>
      </View>
    </TouchableOpacity>

<TouchableOpacity disabled>
<View style={styles.card}>
  <Animated.View style={[styles.imageSkeleton, { opacity: imageOpacity }]} />
  <View style={styles.textSkeleton}>
    <Animated.View style={[styles.titleSkeleton, { opacity: textOpacity }]} />
    <Animated.View style={[styles.subtitleSkeleton, { opacity: textOpacity }]} />
  </View>
</View>
</TouchableOpacity>
</View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 10,
    margin: 10,
    width: width * 0.4,
    height: height * 0.25,
  },
  imageSkeleton: {
    width: 110,
    height: 110,
    borderRadius: 20,
    marginBottom: 8,
    backgroundColor: "#E0E0E0",
  },
  textSkeleton: {
    alignItems: "center",
  },
  titleSkeleton: {
    width: 150,
    height: 16,
    marginTop: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  subtitleSkeleton: {
    width: 50,
    height: 14,
    marginTop: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
});

export default ProductSearchCardSkeleton;