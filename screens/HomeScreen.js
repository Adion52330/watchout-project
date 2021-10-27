import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <View>
      <View style={{ backgroundColor: "#E5E5E5", height: "100%" }}>
        {/* Header */}
        <Header />
        {/* Stopwatch and Timer buttons */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
