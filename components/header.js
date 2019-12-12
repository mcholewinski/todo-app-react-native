import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 15,
    backgroundColor: "gold",
    marginTop: Constants.statusBarHeight
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
