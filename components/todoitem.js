import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <MaterialIcons name="delete" size={24} color="#333" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 12,
    borderColor: "#bbb",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
