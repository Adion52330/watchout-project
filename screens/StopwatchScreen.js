import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Stopwatch from "../components/Stopwatch";
import StopwatchHeader from "../components/StopwatchHeader";

const StopwatchScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StopwatchHeader navigation={navigation} />
      <Stopwatch />
    </SafeAreaView>
  );
};

export default StopwatchScreen;

const styles = StyleSheet.create({});
