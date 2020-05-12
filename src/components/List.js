import React, { useState } from "react";
import { Item } from "./Item";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

export const List = ({
  data,
  onChoose,
  isOpen,
  onFilter,
  categoryName,
  onDisabled,
}) => {
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
    <View style={styles.wrapper}>
      {!isOpen && (
        <Text style={styles.title}>
          {categoryName ? categoryName : "No coctail coosen"}
        </Text>
      )}
      <Animated.View style={isOpen && animationCoordinates.getLayout()}>
        <FlatList
          style={isOpen ? styles.filtersList : styles.coctailsList}
          keyExtractor={(item) =>
            item.idDrink ? item.idDrink.toString() : item.id
          }
          data={data && data}
          renderItem={({ item }) =>
            item && (
              <Item
                {...item}
                isOpen={isOpen}
                onFilter={onFilter}
                onChoose={() => onChoose(item.id)}
              />
            )
          }
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={isOpen ? onFilter : !onDisabled ? onFilter : null}
        >
          <Text
            style={
              isOpen
                ? styles.enabledButton
                : onDisabled
                ? styles.disabledButton
                : styles.enabledButton
            }
          >
            {isOpen ? "APPLY" : "NEXT"}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  coctailsList: {
    marginTop: 20,
    height: "70%",
    marginBottom: 10,
    paddingLeft: 20,
  },
  filtersList: {
    paddingLeft: 20,
    paddingRight: 30,
    marginTop: 10,
    marginBottom: 10,
    height: "78.65%",
  },
  enabledButton: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#555",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  disabledButton: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#ccc",
    color: "#999",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
});
