import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Switch } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { COLORS, SIZES } from '../../constants';

//components
import Chart from '../../components/Chart';
import SwitchBtn from '../../components/SwitchBtn';
import { createWorkout, getWorkout } from '../../service/Workout';

const Tag = ({text, color}) => {
  return (
    <TouchableOpacity style={{backgroundColor: color, borderRadius: SIZES.radius, margin: 4, padding: 4}}>
      <Text style={{fontSize: SIZES.h4, color: '#ffffff', fontWeight: '400'}}>{text}</Text>
    </TouchableOpacity>
  )
}

const ReportCard = ({isEnabled, setIsEnabled, title}) => {
  return (
    <View style={style.cardContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10}}>
        <Text style={style.cardSubTitle}>{title}</Text>
        <SwitchBtn isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      </View>
      <Chart />
      <View style={{flexDirection: 'row', padding: SIZES.padding}}>
        <Tag text={'하체'} color={COLORS.tag_yellow} />
        <Tag text={'가슴'} color={COLORS.tag_pink} />
        <Tag text={'코어'} color={COLORS.tag_blue} />
        <Tag text={'등'} color={COLORS.tag_green} />
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
  createSet
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: COLORS.lightGray4}}>
      <View style={style.container}>
        <Text style={style.cardTitle}>운동 부위별 분석</Text>
        <ReportCard isEnabled={isEnabled} setIsEnabled={setIsEnabled} title={page == 0 ? '볼륨별 분석(kg)' : '전체 빈도별 분석(회)'} />
        <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor: '#ffffff', margin: SIZES.padding, borderRadius: 16}}>
          <TouchableOpacity onPress={() => setPage(0)}>
            <Text style={{fontSize: SIZES.h4}}>prev</Text>
          </TouchableOpacity>
          <Text style={{fontSize: SIZES.h4}}>{page+1}</Text>
          <TouchableOpacity onPress={() => setPage(1)}>
            <Text style={{fontSize: SIZES.h4}}>next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => {
          createWorkout('2021-01-01')
        }}>
          <Text>Workout 생성 (2021-01-01)</Text>
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: SIZES.h3}}>Workout</Text>
          {
            workouts && Array.isArray(workouts) && workouts.length != 0 && workouts.map(workout => (
              <Text key={workout.id}>
                {JSON.stringify(workout)}
              </Text>
            ))
          }
        </View>
        <View>
          <Text style={{fontSize: SIZES.h3}}>Session</Text>
          {
            sessions && Array.isArray(sessions) && sessions.length != 0 && sessions.map(session => (
              <Text key={session.id}>
                {JSON.stringify(session)}
              </Text>
            ))
          }
        </View>
        <View>
          <Text style={{fontSize: SIZES.h3}}>Tags</Text>
          {
            tags && Array.isArray(tags) && tags.length != 0 && tags.map(tag => (
              <Text key={tag.id}>
                {JSON.stringify(tag)}
              </Text>
            ))
          }
        </View>
        <View>
          <Text style={{fontSize: SIZES.h3}}>Sets</Text>
          {
            sets && Array.isArray(sets) && sets.length != 0 && sets.map(set => (
              <Text key={set.id}>
                {JSON.stringify(set.weight)}
              </Text>
            ))
          }
        </View>
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