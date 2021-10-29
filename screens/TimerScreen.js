import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import TimerHeader from "../components/TimerHeader";

const TimerScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TimerHeader navigation={navigation} />
    </SafeAreaView>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({});
