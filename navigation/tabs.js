import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Settings } from "../screens";
// import { COLORS, icons } from "../constatns"

import Report from "../screens/Report"

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //     tabBarIcon: ({focused}) => (
        //         <Image
        //             source={icons.blabla}
        //             resizeMode="contain"
        //             style={{
        //                 width: 25,
        //                 height: 25,
        //                 tintColor: focused? COLORS.primary: COLORS.secondary
        //             }}
        //         />
        //     )
        // }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Tabs;
