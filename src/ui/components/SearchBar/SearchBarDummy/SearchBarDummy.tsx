import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CommonText } from "../../Text";
import { Margin } from "../../Margin";
const { width, height } = Dimensions.get("window");
const SearchBarDummy = ({ onPress, animatedStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, shadowStyle, animatedStyle]}
    >
      <View style={styles.input}>
        <Text style={{ fontSize: 14, color: "#B5B5B5", fontWeight: "400" }}>
          {"iPhone 14 pro max..."}
        </Text>
      </View>

      <TouchableOpacity
        onPress={onPress}
        testID={"search-button"}
        style={styles.searchButton}
      >
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const shadowStyle = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  android: {
    elevation: 4,
  },
});

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.85,
    borderRadius: 30,
    padding: 17,
    margin: 10,
    height: 56,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: width * 0.02,
    justifyContent: "center",
  },
  searchButton: {
    backgroundColor: "#FFEB3B",
    width: width * 0.1,
    height: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  iconContainer: {
    padding: 8,
  },
});

export default SearchBarDummy;
