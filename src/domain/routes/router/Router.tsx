import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "../AppRoutes/AppRoutes";
import { useSelector } from "react-redux";

export const Router = () => {

  return (
    <NavigationContainer>
     <AppRoutes />
    </NavigationContainer>
  );
};
