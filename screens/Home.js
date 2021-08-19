import React, {useState} from "react";
import { StyleSheet, View, Text, SafeAreaView, Button, ScrollView, TouchableOpacity} from "react-native";
import Constants from 'expo-constants';

import CalendarBase from "../components/Calendar";
import { COLORS, SIZES } from "../constants";
import { FontAwesome } from '@expo/vector-icons';

import WorkoutCard from "../components/WorkoutCard";

const Home = ( {navigation} ) => {

  const today = new Date()
  const koreaday = ['일','월','화','수','목','금','토']
  const [selectedDate,setSelectedDate] = useState({
    month:today.getMonth()+1,
    date:today.getDate(),
    day:today.getDay()
  })

  function addWorkout(id){
    navigation.navigate("Workout",{
      itemId: id
    })
  }

  function renderCalendar() {
    return (
      <View style={{flex:1}}>
        <CalendarBase
          setSelectedDate={setSelectedDate}
        />
      </View>
    )
  }

  function renderTitle() {
    return(
      <View style={styles.titleView}>
        <Text style={styles.text}>{selectedDate.month}월 {selectedDate.date}일 {koreaday[selectedDate.day]}요일</Text>
        <View style={{marginRight:SIZES.padding2}}>
          <TouchableOpacity onPress={() => addWorkout(80)}>
            <FontAwesome
              name="plus"
              backgroundColor={COLORS.transparent}
              color={COLORS.skyBlue}
              size={SIZES.h2}
            >
            </FontAwesome>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderSchedule() {
    return (
      <ScrollView style={styles.scrollView}>
        <WorkoutCard></WorkoutCard>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    flex:1
  },
  text: {
    fontSize: SIZES.h2,
    alignSelf: 'center',
    fontFamily: 'RobotoRegular',
    marginLeft: SIZES.padding2,
  },
});

export default Home;
