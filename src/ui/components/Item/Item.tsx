import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const Item = ({ label, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    alignSelf: 'center',
    width: width * 0.8
  },
  label: {
    fontSize: 17,
    color: '#000',
    fontWeight: '400'
  },
  price: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Item;