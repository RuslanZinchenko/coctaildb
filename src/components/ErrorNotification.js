import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ErrorNotification = ({ text }) => (
  <View>
    <Text style={styles.errorText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  errorText: {
    color: "#ef5b4c",
    fontSize: 24,
    textAlign: "center",
    marginTop: 300,
  },
});
