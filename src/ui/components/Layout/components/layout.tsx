import React from "react";
import { View, StyleSheet } from "react-native";

const Layout = ({ header, content, footer }) => {
  return (
    <View style={styles.container}>
      {header && <View style={styles.header}>{header}</View>}
      <View style={styles.content}>{content}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  footer: {
  },
});

export default Layout;