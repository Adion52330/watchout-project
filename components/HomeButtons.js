import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const HomeButtons = ({ navigation }) => {
  return (
    <View style={styles.homeButtonContainer}>
      <TouchableOpacity
        onPress={() => navigation.push("TimerScreen")}
        style={styles.buttonContainer}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/250/000000/clock--v3.png",
          }}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Timer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.push("StopWatchScreen")}
        style={styles.buttonContainer}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/300/000000/stopwatch.png",
          }}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Stop Watch</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  homeButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonContainer: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
    padding: 18,
    elevation: 15,
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
  buttonText: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 18,
    padding: 5,
  },
});
export default HomeButtons;
