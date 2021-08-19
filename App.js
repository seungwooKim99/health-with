import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Tabs from "./navigation/tabs";
import { Details, Workout } from "./screens";

const Stack = createStackNavigator();

// font 적용
import { useFonts } from 'expo-font';

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
  // key name으로 fontfaily 적용가능.
  const [loaded] = useFonts({
    RobotoBlack : require('./assets/fonts/Roboto-Black.ttf'),
    RobotoBold : require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoRegular : require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium : require('./assets/fonts/Roboto-Medium.ttf'),
    RobotoThin : require('./assets/fonts/Roboto-Thin.ttf'),
    RobotoLight : require('./assets/fonts/Roboto-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

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
