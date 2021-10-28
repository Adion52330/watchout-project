import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import HomeButtons from "../components/HomeButtons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "lightgrey" }}>
      <View style={{ backgroundColor: "#E5E5E5", height: "100%" }}>
        {/* Header */}
        <Header navigation={navigation} />
        <HomeButtons navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
