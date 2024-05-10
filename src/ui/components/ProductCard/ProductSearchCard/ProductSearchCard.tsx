import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
const { height, width } = Dimensions.get("window");

const ProductSearchCard = ({ imageSource, title, subtitle, onPress, seller }) => {
  
  const cardContainerStyle = [
    styles.card,
    Platform.OS === "android" ? styles.androidShadow : styles.iosShadow,
  ];

  return (
    <TouchableOpacity testID="product-card" onPress={onPress}>
      <View style={cardContainerStyle}>
        <Image testID="product-image" src={imageSource}  style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
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
    height: height * 0.3,
  },
  image: {
    width: 110,
    height: 110,
  },
  subtitle: {
    marginTop: height * 0.01,
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
  },
  title: {
    marginTop: height * 0.03,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    
  },
  androidShadow: {
    elevation: 5,
  },
  iosShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default ProductSearchCard;
