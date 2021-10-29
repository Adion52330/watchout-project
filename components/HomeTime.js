import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Localisation from "expo-localization";

const HomeTime = () => {
  let date = new Date();
  //   Getting time
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  //   Adding 0 if less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  //   Getting day
  let day = date.getDay();
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = dayNames[day];
  //   Getting Date
  let dateNumber = date.getDate();
  let month = date.getMonth();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = monthNames[month];
  let year = date.getFullYear();

  return (
    <View
      style={{
        // alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "white",
        flexDirection: "row",
        margin: 20,
        borderRadius: 8,
        marginTop: 50,
        elevation: 5,
      }}
    >
      <View style={styles.leftContainer}>
        <Text style={{ fontSize: 20, fontWeight: "700", paddingBottom: 10 }}>
          Your Location:{" "}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "700", paddingBottom: 10 }}>
          Time:{" "}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "700", paddingBottom: 10 }}>
          Day:{" "}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "700", paddingBottom: 10 }}>
          Date:{" "}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={{ fontSize: 20, fontWeight: "400", paddingBottom: 10 }}>
          {Localisation.timezone}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "400", paddingBottom: 10 }}>
          {hours + " : " + minutes + " : " + seconds}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "400", paddingBottom: 10 }}>
          {dayName}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "400", paddingBottom: 10 }}>
          {dateNumber + " " + monthName + ", " + year}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    justifyContent: "flex-start",
  },
  rightContainer: {
    justifyContent: "flex-end",
  },
});

export default HomeTime;
