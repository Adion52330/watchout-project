import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const Stopwatch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View>
          <Text style={styles.timeText}>00:00:00</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#007AFF" }]}
          >
            <Text style={{ color: "white", fontSize: 26 }}>Start</Text>
          </TouchableOpacity>
          <Text>{"        "}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#379FCB" }]}
          >
            <Text style={{ color: "white", fontSize: 26 }}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  timeContainer: {
    top: 20,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    elevation: 20,
    height: "75%",
  },
  timeText: {
    fontSize: 65,
    top: 30,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  button: {
    marginTop: 55,
    height: 90,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
  },
});

export default Stopwatch;
