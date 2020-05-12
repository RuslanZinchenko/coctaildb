import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export const Item = ({
  strDrinkThumb,
  strDrink,
  strCategory,
  onChoose,
  isOpen,
  checked,
}) => (
  <View style={isOpen ? styles.filtersWrapper : styles.coctailsWrapper}>
    {strDrinkThumb && (
      <Image style={styles.pic} source={{ uri: strDrinkThumb }} />
    )}
    <TouchableOpacity
      style={styles.flexBox}
      activeOpacity={0.5}
      onPress={isOpen ? onChoose : null}
    >
      <Text style={styles.name}>{strDrink || strCategory}</Text>
      {isOpen && (
        <View>
          {checked && (
            <Image
              style={styles.checkmark}
              source={{
                uri:
                  "https://icons.iconarchive.com/icons/icons8/ios7/512/Very-Basic-Checkmark-icon.png",
              }}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  filtersWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
  },
  coctailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 40,
  },
  name: {
    fontSize: 16,
    marginLeft: 20,
    width: 200,
  },
  pic: {
    width: 100,
    height: 100,
  },
  flexBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkmark: {
    width: 40,
    height: 40,
  },
});
