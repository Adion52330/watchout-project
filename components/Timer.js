import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //   Starting from 59 when going below 0
  const decButton = () => {
    if (seconds < 0) {
      setSeconds(59);
    } else if (minutes < 0) {
      setMinutes(59);
    } else if (hours < 0) {
      setHours(23);
    }
  };
  const incButton = () => {
    if (seconds > 58) {
      setSeconds(0);
      setMinutes(minutes + 1);
    } else if (minutes > 57) {
      setMinutes(0);
      setHours((hours) => hours + 1);
    } else if (hours > 22) {
      setHours(0);
    }
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.timerContainer}>
        <Text style={styles.descText}>hrs : min : sec</Text>
        <View style={styles.container}>
          {/* Hours */}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                setHours(hours + 1);
                incButton();
              }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/fluency-systems-filled/100/000000/triangle.png",
                }}
                style={styles.increaseImg}
              />
            </TouchableOpacity>
            <Text style={styles.timerText}>{hours}</Text>
            <TouchableOpacity
              style={styles.timecontainer}
              onPress={() => {
                setHours(hours - 1);
                decButton();
              }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/material-rounded/100/000000/give-way.png",
                }}
                style={styles.increaseImg}
              />
            </TouchableOpacity>
          </View>
          {/* Minutes */}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                setMinutes(minutes + 1);
                incButton();
              }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/fluency-systems-filled/100/000000/triangle.png",
                }}
                style={styles.increaseImg}
              />
            </TouchableOpacity>
            <Text style={styles.timerText}>{minutes}</Text>
            <TouchableOpacity
              style={styles.timecontainer}
              onPress={() => {
                setMinutes(minutes - 1);
                decButton();
              }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/material-rounded/100/000000/give-way.png",
                }}
                style={styles.increaseImg}
              />
            </TouchableOpacity>
          </View>
          {/* Seconds */}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                setSeconds(seconds + 1);
                incButton();
              }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/fluency-systems-filled/100/000000/triangle.png",
                }}
                style={styles.increaseImg}
              />
            </TouchableOpacity>
            <Text style={styles.timerText}>{seconds}</Text>
            <TouchableOpacity
              style={styles.timecontainer}
              onPress={() => {
                setSeconds(seconds - 1);
                decButton();
              }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/material-rounded/100/000000/give-way.png",
                }}
                style={styles.increaseImg}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Start"
            style={styles.startButton}
            onPress={() => setIsRunning(!isRunning)}
            color="#007AFF"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "white",
    elevation: 10,
    width: "90%",
    height: "80%",
    borderRadius: 10,
  },
  descText: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 30,
    color: "grey",
  },
  timerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "grey",
  },
  increaseImg: {
    width: 40,
    height: 40,
  },
  timecontainer: {
    alignItems: "center",
  },
  container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  buttonContainer: {
    marginTop: 50,
    height: 200,
    width: 200,
  },
  startButton: {
    padding: 20,
    borderRadius: 20,
  },
});

export default Timer;

{
  /* "https://img.icons8.com/fluency-systems-filled/48/000000/triangle.png" 
  <img src="https://img.icons8.com/material-rounded/24/000000/give-way.png"/>*/
}
