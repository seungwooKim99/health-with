import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Switch } from "react-native";
import { COLORS, SIZES } from '../../constants';
import { MaterialIcons, Entypo } from '@expo/vector-icons'

//components
import Chart from '../../components/LineChart';
import SwitchBtn from '../../components/SwitchBtn';
import { createWorkout, getWorkout } from '../../service/Workout';
import Tag from '../../components/Tag'
import PieChart from '../../components/PieChart';

const ReportCard = ({page, setPage, isEnabled, setIsEnabled, title}) => {
  return (
    <View style={style.cardContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10}}>
        <Text style={style.cardSubTitle}>{title}</Text>
        <SwitchBtn isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      </View>
      {
        page == 0 ? (
          <Chart />
        ) : (
          <PieChart />
        )
      }
      <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor: '#ffffff', margin: SIZES.padding, borderRadius: 16}}>
          <TouchableOpacity onPress={() => setPage(0)}>
            <MaterialIcons name="arrow-back-ios" size={28} color={COLORS.primary} />
          </TouchableOpacity>
          <View style={{justifyContent:'center', flexDirection:'row'}}>
            <Entypo name="dot-single" size={30} color={page == 0 ? COLORS.primary : COLORS.gray} />
            <Entypo name="dot-single" size={30} color={page == 1 ? COLORS.primary : COLORS.gray} />
          </View>
          <TouchableOpacity onPress={() => setPage(1)}>
            <MaterialIcons name="arrow-forward-ios" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      <View style={{flexDirection: 'row', padding: SIZES.padding}}>
        <Tag name={'하체'} color={COLORS.tag_yellow} />
        <Tag name={'가슴'} color={COLORS.tag_pink} />
        <Tag name={'코어'} color={COLORS.tag_blue} />
        <Tag name={'등'} color={COLORS.tag_green} />
      </View>
    </View>
  )
}

export default ({
  isEnabled,
  setIsEnabled,
  page,
  setPage,
  workouts,
  setWorkouts,
  sessions,
  tags,
  sets,
  createTables,
  createWorkout,
  createSession,
  createTag,
  createSet,
  calculateVolume,
  test,
  test2,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: COLORS.lightGray4}}>
      <View style={style.container}>
        <Text style={style.cardTitle}>운동 부위별 분석</Text>
        <ReportCard page={page} setPage={setPage} isEnabled={isEnabled} setIsEnabled={setIsEnabled} title={page == 0 ? '볼륨별 분석(kg)' : '전체 빈도별 분석(회)'} />
        <TouchableOpacity onPress={test}><Text>test</Text></TouchableOpacity>
        <TouchableOpacity onPress={test2}><Text>test2</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    width: '100%',
  },
  cardContainer:{
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: SIZES.padding,
  },
  cardTitle:{
    fontSize: SIZES.h3,
    fontWeight: '600',
    margin: SIZES.padding,
  },
  cardSubTitle:{
    fontSize: SIZES.h4,
    fontWeight: '600',
    margin: SIZES.padding,
  },
})

/*
      <View>
        <TouchableOpacity onPress={createTables}>
          <Text>테이블 생성</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => createWorkout('2021-01-01')}>
          <Text>Workout 생성 (2021-01-01)</Text>
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: SIZES.h3}}>Workout</Text>
          {
            workouts && workouts.map(workout => (
              <Text key={workout.id}>
                {JSON.stringify(workout)}
              </Text>
            ))
          }
        </View>
        <View>
          <Text style={{fontSize: SIZES.h3}}>Session</Text>
          {
            sessions && sessions.map(session => (
              <Text key={session.id}>
                {JSON.stringify(session)}
              </Text>
            ))
          }
        </View>
        <View>
          <Text style={{fontSize: SIZES.h3}}>Tags</Text>
          {
            tags && tags.map(tag => (
              <Text key={tag.id}>
                {JSON.stringify(tag)}
              </Text>
            ))
          }
        </View>
        <View>
          <Text style={{fontSize: SIZES.h3}}>Sets</Text>
          {
            sets && sets.map(set => (
              <Text key={set.id}>
                {JSON.stringify(set)}
              </Text>
            ))
          }
        </View>
      </View>
*/