import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";

export const Header = ({ title, onPress, isOpen }) => {
  const animationCoordinates = useState(
    new Animated.ValueXY({ x: -400, y: 0 })
  )[0];

  const showFiltersList = () => {
    Animated.timing(animationCoordinates, {
      toValue: { x: isOpen ? 0 : -400, y: 0 },
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  setTimeout(showFiltersList, 0);

  return (
    <View style={styles.navbarWrapper}>
      <Animated.View style={isOpen && animationCoordinates.getLayout()}>
        <View style={isOpen ? styles.reverseNavbar : styles.navbar}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={styles.buttonWrapper}
          >
            <Image
              style={styles.button}
              alt="filter"
              source={{
                uri: isOpen
                  ? "https://www.pinclipart.com/picdir/big/43-432252_arrow-png-icon-back-arrow-icon-android-clipart.png"
                  : "https://image.flaticon.com/icons/png/512/23/23795.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  navbarWrapper: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 3,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
  },
  reverseNavbar: {
    width: "55%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomColor: "#ddd",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: 30,
    height: 30,
  },
});
