import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Header = ({ title, onPress }) => (
  <View style={styles.navbar}>
    <Text style={styles.text}>{title}</Text>
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.button}>Button</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomColor: "#aaa",
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    width: 150,
    height: 150,
    display: "flex",
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#555",
    color: "#fff",
  },
});
