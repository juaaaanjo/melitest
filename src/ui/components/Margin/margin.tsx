import React from 'react';
import { View } from 'react-native';

const Margin = ({ children, marginTop, marginLeft, marginBottom, marginRight  }) => {
  return (
    <View testID="child" style={{ marginTop, marginLeft, marginBottom, marginRight }}>
      {children}
    </View>
  );
};

export default Margin;