import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StopwatchScreen from "./screens/StopwatchScreen";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import TimerScreen from "./screens/TimerScreen";
import TimerStatScreen from "./screens/TimerStatScreen";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WatchOut">
        <Stack.Screen
          name="WatchOut"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="StopWatchScreen"
          component={StopwatchScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TimerScreen"
          component={TimerScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TimerStatScreen"
          component={TimerStatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
