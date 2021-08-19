import React, {useState} from "react";
import { StyleSheet, View, Text, SafeAreaView, Button, ScrollView} from "react-native";
import Constants from 'expo-constants';

import CalendarBase from "../components/Calendar";
import * as MyConstants from '../constants/index';
import { FontAwesome } from '@expo/vector-icons';

const Home = ( {navigation} ) => {

  function addWorkout(id){
    navigation.navigate("Workout",{
      itemId: id
    })
  }

  const [date,setdate] = useState(new Date)

  function renderCalendar() {
    return (
      <View style={{flex: 1}}>
        <CalendarBase/>
      </View>
    )
  }

  function renderTitle() {
    return(
      <View style={styles.titleView}>
        <Text style={styles.text}>8월 19일 목요일</Text>
        <View style>
          <FontAwesome.Button
            name="plus"
            backgroundColor={MyConstants.COLORS.transparent}
            color={MyConstants.COLORS.skyBlue}
            onPress={() => addWorkout(80)}>
          </FontAwesome.Button>
        </View>

      </View>
    )
  }

  function renderSchedule() {
    return (
      <ScrollView style={styles.scrollView}>
        <Button
          onPress={() => navigation.navigate("Workout", {
            itemId: 80
          })}
          title="수정 / 추가 탭"
        />
      </ScrollView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderCalendar()}
      {renderTitle()}
      {renderSchedule()}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: MyConstants.SIZES.padding * 3,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: MyConstants.SIZES.h2,
    alignSelf: 'center',
  },
});

export default Home;
