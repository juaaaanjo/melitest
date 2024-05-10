import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const Separator = () => {
  return <View testID='separator' style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 10,
    alignSelf: 'center',
    width: width * 0.8
  },
});

export default Separator;