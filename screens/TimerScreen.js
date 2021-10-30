import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Timer from "../components/Timer";
import TimerHeader from "../components/TimerHeader";

const TimerScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TimerHeader navigation={navigation} />
      <Timer />
    </SafeAreaView>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({});
