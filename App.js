import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Tabs from "./navigation/tabs";
import { Details, Workout } from "./screens";

const Stack = createStackNavigator();

// header에 탭 이름 가져오는 함수
function getHeaderTitle(route) {
  // tab navigator의 `route.state` state를 사용한다
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return '캘린더';
    case 'Report':
      return '통계';
    case 'Settings':
    return '설정';
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
      >
        <Stack.Screen
          name="캘린더"
          component={Tabs}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route)
          })}
        />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
