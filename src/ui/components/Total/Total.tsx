import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const Total = ({ label, subtitle }) => {
  return (
    <View testID='total-container' style={styles.container}>
      <Text testID='total-label' style={styles.label}>{label}:</Text>
      <Text testID='total-price' style={styles.price}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 10,
    alignSelf: 'flex-start',

    gap:8
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

export default Total;