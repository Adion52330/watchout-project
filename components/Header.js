import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
// TODO: Add a Time function
const Header = () => {
  // link: https://img.icons8.com/ios/50/000000/alarm-clock--v1.png
  const easterEgg = () => {
    Alert.alert("Made By", " 1) Adion \n 2) Aarul \n 3) Adharsh \n 4) Rinz ");
  };
  return (
    <View style={styles.header}>
      {/* <Text style={{ top: 14 }}>
        <AntDesign name="clockcircleo" size={30} />
      </Text> */}
      <View style={{ top: 14 }}>
        <TouchableOpacity onPress={easterEgg}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/000000/alarm-clock--v1.png",
            }}
            style={styles.headerImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>WATCH OUT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 40,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingTop: 0,
    flexDirection: "row",
    elevation: 20,
  },
  headerText: {
    paddingLeft: 15,
    top: 14,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
  },
  headerImage: {
    width: 30,
    height: 30,
  },
});

export default Header;
