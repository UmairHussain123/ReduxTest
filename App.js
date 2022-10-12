import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import Home from "./Screen/Home";
import Fromd from "./Screen/Fromd";
import StudentList from "./Screen/StudentList";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Fromd" component={Fromd} />
          <Stack.Screen name="StudentList" component={StudentList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
