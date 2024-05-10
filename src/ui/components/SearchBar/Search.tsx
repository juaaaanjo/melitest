import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <View style={[styles.container, shadowStyle]}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="iPhone 14 pro max..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
      />

      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
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
    width: 355,
    borderRadius: 30,
    padding: 17,
    margin: 10,
    height: 56,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: width * 0.02,
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

export default Search;
