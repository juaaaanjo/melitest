import React from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const LayoutSafeArea = ({ header, content, footer, marginTop }) => {
  return (
    <SafeAreaView style={[
      styles.container,
      { marginTop: marginTop || height * -0.05 }
    ]}>
      {header && <View style={styles.header}>{header}</View>}
      <View style={styles.content}>{content}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  header: {
    padding: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: width * 0.06
  },
  footer: {
    // Styles for the footer if needed
  },
});

export default LayoutSafeArea;