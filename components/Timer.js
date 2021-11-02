import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Vibration,
  Alert,
} from "react-native";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);

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
    } else if (minutes > 58) {
      setMinutes(0);
      setHours((hours) => hours + 1);
    } else if (hours > 22) {
      setHours(0);
    }
  };

  const reset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setStarted(false);
  };
  let myInterval = null;
  useEffect(() => {
    myInterval = setInterval(() => {
      if (started) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setStarted(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
        if (minutes === 0 && seconds === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
            setStarted(false);
          } else {
            setHours(hours - 1);
            setMinutes(59);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  // Stop Timer
  const stopTimer = () => {
    Alert.alert(
      "Timer Stopped",
      `You have stopped the timer.\n\nHours: ${hours}\nMinutes: ${minutes}\nSeconds: ${seconds}`,
      [
        {
          text: "OK",
          onPress: () => {
            reset();
          },
        },
      ]
    );
    setStarted(false);
    clearInterval(myInterval);
  };

  if (seconds === 0 && minutes === 0 && hours === 0) {
    Vibration.vibrate(500);
  }

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
              disabled={started ? true : false}
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
              disabled={started ? true : false}
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
              disabled={started ? true : false}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/fluency-systems-filled/100/000000/triangle.png",
                }}
                style={styles.increaseImg}
              />
            </TouchableOpacity>
            <Text style={styles.timerText}>
              {minutes < 10 ? `0${minutes}` : minutes}
            </Text>
            <TouchableOpacity
              style={styles.timecontainer}
              onPress={() => {
                setMinutes(minutes - 1);
                decButton();
              }}
              disabled={started ? true : false}
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
              disabled={started ? true : false}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/fluency-systems-filled/100/000000/triangle.png",
                }}
                style={styles.increaseImg}
              />
            </TouchableOpacity>
            <Text style={styles.timerText}>
              {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
            <TouchableOpacity
              style={styles.timecontainer}
              onPress={() => {
                setSeconds(seconds - 1);
                decButton();
              }}
              disabled={started ? true : false}
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
        {started ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              marginTop: 60,
            }}
          >
            <View style={styles.startButton}>
              <Button
                title="Stop"
                onPress={() => {
                  stopTimer();
                }}
                color="#007AFF"
              />
            </View>
            <View style={styles.startButton}>
              <Button title="Reset" onPress={reset} color="#379FCB" />
            </View>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Button
              title="Start"
              style={styles.startButton}
              onPress={() => {
                setStarted(true);
                Vibration.vibrate(1000);
              }}
              color="#007AFF"
            />
          </View>
        )}
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
    marginTop: 60,
  },
  buttonContainer: {
    marginTop: 60,
    width: "60%",
    elevation: 20,
    height: 200,
  },
  button: {
    height: 200,
  },
  startButton: {
    width: "40%",
    padding: 15,
    borderRadius: 40,
  },
});

export default Timer;

{
  /* "https://img.icons8.com/fluency-systems-filled/48/000000/triangle.png" 
  <img src="https://img.icons8.com/material-rounded/24/000000/give-way.png"/>*/
}
