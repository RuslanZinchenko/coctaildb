import React from "react";
import { Item } from "./Item";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export const List = ({
  data,
  onChoose,
  isOpen,
  onFilter,
  categoryName,
  onDisabled,
}) => (
  <View style={styles.wrapper}>
    {!isOpen && (
      <Text style={styles.categoryName}>
        {categoryName ? categoryName : "No coctail coosen"}
      </Text>
    )}
    <FlatList
      style={isOpen ? styles.filterList : styles.list}
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
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  list: {
    marginTop: 20,
    height: "65%",
    marginBottom: 10,
  },
  filterList: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 30,
    marginTop: 10,
    marginBottom: 10,
    height: "73%",
  },
  enabledButton: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 130,
    paddingRight: 130,
    backgroundColor: "#555",
    color: "#fff",
    textAlign: "center",
  },
  disabledButton: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 130,
    paddingRight: 130,
    backgroundColor: "#ccc",
    color: "#999",
    textAlign: "center",
  },
  categoryName: {
    fontSize: 18,
    marginTop: 20,
  },
});
