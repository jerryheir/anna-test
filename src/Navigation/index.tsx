import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { fetchData } from "../Actions";
import Restaurants from "../Components/Restaurants";
import Applications from "../Components/Applications";
import { Routes } from "./routes";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name={Routes.Restaurants} component={Restaurants} />
        <Stack.Screen name={Routes.Applications} component={Applications} />
      </Stack.Navigator>
    )
}

const Navigation = ({  }) => {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(fetchData());
  }, []);
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;