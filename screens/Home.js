import React, {useState, useEffect} from "react";
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
    day:today.getDay(),
    dateString: today.toISOString().substr(0,10)
  })
  const [schedule,setSchedule] = useState(0)

  // 임시
  const [sessionTitle,setSessionTitle] = useState([
      {
        title: '랫풀다운',
        tag: [{name:'등',color:COLORS.tag_orange}],
      },
      {
        title: '데드리프트',
        tag: [{name:'등',color:COLORS.tag_darkblue},{name:'하체',color:COLORS.tag_purple}],
      }
    
  ])

  const [sessionBody, setSessionBody] = useState([
    {
      title: '랫풀다운',
      data: [
        {rep: 10, weight: 40, time: null},
        {rep: 10, weight: 40, time: null},
        {rep: 10, weight: 40, time: null},
        {rep: 10, weight: 40, time: null},
        {rep: 10, weight: 40, time: null}
      ]
    },
    {
      title: '데드리프트',
      data: [
        {rep: 10, weight: 80, time: null},
        {rep: 10, weight: 80, time: null},
        {rep: 10, weight: 80, time: null},
        {rep: 10, weight: 80, time: null},
        {rep: 10, weight: 100, time: null},
      ]
    }
  ])

  // plus button
  function addWorkout(id){
    navigation.navigate("Workout",{
      itemId: id
    })
  }

  function getWorkoutFromDB(props){
    // db로 datestring 넘겨서
    // workout.workout_date = props 인 workout.id get.
    // 해당 workout.id로 session 있는지 체크
    // if (session) {
    //   join문으로 세션이름, 태그 가져오고
    //   세션 아이디로 세트수 가져오기
    // }else{
    //   해당 날짜에 운동이 없다고 표시해야함.
    //   리턴으로 뭘 주면 좋을까
    // }
    if (props == 1){
      // 운동 함
      //console.log(props)
      setSchedule(1)
    }else{
      // 운동안함
      setSchedule(0)
    }
  }

  const [workout,setWorkout] = useState({
    id: 1,
    dateString: selectedDate.dateString
  })

  useEffect(()=>{
    if (selectedDate.dateString != ''){
      if (selectedDate.dateString == "2021-08-23" || selectedDate.dateString == "2021-08-24"){
        setWorkout({
          // 임시로 쓰는 id.
          id: 2,
          dateString:selectedDate.dateString
        })
      }
      else{
        setWorkout({
          // 임시로 쓰는 id.
          id: 1,
          dateString:selectedDate.dateString
        })
      }
    }
  },[selectedDate])

  useEffect(()=>{
    getWorkoutFromDB(workout.id)
  },[workout])

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
        <View style={{marginRight:SIZES.padding*2}}>
          <TouchableOpacity onPress={() => addWorkout(workout.id)}>
            <FontAwesome
              name="plus"
              backgroundColor={COLORS.transparent}
              color={COLORS.primary}
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
      <View style={{flex:1}}>
        <WorkoutCard
          sessionTitle={sessionTitle}
          sessionBody={sessionBody}
        ></WorkoutCard>
      </View>
    )
  }

  function noSchedule() {
    return (
      <View style={{flex:1}}>
        <Text>
          오늘은 운동을 안했네요
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {renderCalendar()}
        <View
          style={{
              height: 1,
              width: "100%",
              backgroundColor: COLORS.lightGray2,
              marginTop:SIZES.padding/2
          }}
        />
        {renderTitle()}
        <>
          {schedule === 1 ? renderSchedule() : noSchedule()}
        </>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleView: {
    flexDirection: 'row',
    backgroundColor: COLORS.transparent,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:SIZES.padding2
  },
  text: {
    fontSize: SIZES.h4,
    alignSelf: 'center',
    fontFamily: 'RobotoRegular',
    marginLeft: SIZES.padding*2,
  },
});

export default Home;
