import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const StopwatchHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ top: 10 }}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/300/000000/stopwatch.png",
            }}
            style={styles.headerImage}
          />
        </View>
        <Text style={styles.headerText}>STOPWATCH</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={25} />
          <Text style={{ color: "#2980b9" }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 50,
    height: 50,
  },
  headerText: {
    padding: 15,
    top: 10,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
  },
  header: {
    height: 90,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingTop: 0,
    elevation: 20,
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: 10,
  },
});

export default StopwatchHeader;
