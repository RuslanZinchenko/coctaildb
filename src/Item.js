import React from "react";
import { Text, View, Image, StyleSheet, CheckBox } from "react-native";

export const Item = ({
  strDrinkThumb,
  strDrink,
  strCategory,
  onChoose,
  isOpen,
  checked,
  onFilter,
}) => (
  <View style={isOpen ? styles.wrapperCategory : styles.wrapper}>
    {strDrinkThumb && (
      <Image style={styles.pic} source={{ uri: strDrinkThumb }} />
    )}
    <View style={styles.flexBox}>
      <Text style={styles.name}>{strDrink || strCategory}</Text>
      {isOpen && <CheckBox value={checked} onChange={onChoose} />}
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapperCategory: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 60,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 40,
  },
  name: {
    fontSize: 16,
    marginLeft: 20,
  },
  pic: {
    width: 100,
    height: 100,
  },
  filter: {
    marginBottom: 130,
    paddingBottom: 130,
  },
  flexBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  select: {
    fontSize: 24,
  },
});
