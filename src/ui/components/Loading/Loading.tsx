import React from 'react';
import { Dimensions, View, ActivityIndicator, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoadingComponent = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator testID="activity-indicator" size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingComponent;