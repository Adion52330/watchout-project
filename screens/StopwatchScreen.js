import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import StopwatchHeader from "../components/StopwatchHeader";

const StopwatchScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StopwatchHeader navigation={navigation} />
    </SafeAreaView>
  );
};

export default StopwatchScreen;

const styles = StyleSheet.create({});
