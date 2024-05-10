import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailScreen, HomeScreen } from "../../../ui/screens";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="DetailScreen"
        options={({ navigation }) => ({
          title: "",
          headerTitleAlign: "center",
          unmountOnBlur: true,
          headerShown: true,
          swipeEnabled: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="angle-left" size={30} color="#000000" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 0,
            borderColor: '#ffffff'
          },
        })}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
