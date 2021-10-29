import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [stopwatchStatus, setStopwatchStatus] = useState("stopped");
  const [buttonText, setButtonText] = useState("Start");

  // const text = () => {
  //   if (stopwatchStatus == "started") {
  //     setButtonText("Stop");
  //   } else {
  //     setButtonText("Start");
  //   }
  // };
  // Function startStopwatch
  const stopwatchLogic = () => {
    // setInterval(() => {
    //   setSeconds((seconds) => seconds + 1);
    // }, 1000);
    // setInterval(() => {
    //   setMinutes((minutes) => minutes + 1);
    // }, 61000);
    // setInterval(() => {
    //   setHours((hours) => hours + 1);
    // }, 3600000);
    // setButtonText("Stop");
    setSeconds((seconds) => seconds + 1);
  };
  if (seconds / 60 === 1) {
    setSeconds(0);
    setMinutes((minutes) => minutes + 1);
    if (minutes / 60 === 1) {
      setMinutes(0);
      setHours((hours) => hours + 1);
    }
  }
  let interval = null;

  const startStop = () => {
    if (stopwatchStatus === "stopped") {
      interval = setInterval(stopwatchLogic, 1000);
      setButtonText("Stop");
      setStopwatchStatus("started");
    } else {
      clearInterval(interval);
      setButtonText("Start");
      setStopwatchStatus("stopped");
    }
  };
  // Funtion for reset
  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setStopwatchStatus("stopped");
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View>
          <Text style={styles.timeText}>
            {hours + " : " + minutes + " : " + seconds}
          </Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              startStop();
            }}
            style={[styles.button, { backgroundColor: "#007AFF" }]}
          >
            <Text style={{ color: "white", fontSize: 26 }}>{buttonText}</Text>
          </TouchableOpacity>
          <Text>{"        "}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#379FCB" }]}
            onPress={reset}
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
    top: 60,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginBottom: 40,
    color: "grey",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  button: {
    top: 55,
    height: 60,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    elevation: 10,
  },
});

export default Stopwatch;
