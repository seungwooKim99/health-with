import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Switch } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { COLORS, SIZES } from '../../constants';

const Tag = ({text, color}) => {
  return (
    <TouchableOpacity style={{backgroundColor: color, borderRadius: SIZES.radius, margin: 4, padding: 4}}>
      <Text style={{fontSize: SIZES.h4, color: '#ffffff', fontWeight: '400'}}>{text}</Text>
    </TouchableOpacity>
  )
}

const SwitchBtn = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Switch
        trackColor={{ false: '#767577', true: COLORS.primary }}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor={COLORS.gray}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const Chart = ({labels, data, isRecent}) => {
  return (
    <View style={{alignItems:'center'}}>
      <LineChart
          data={{
            labels: ['21.05.01', '21.06.01', '21.07.01', '21.07.15', '21.08.01'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100              ]
            }]
          }}
          width={Dimensions.get('window').width}
          height={Dimensions.get('window').height*0.4}
          chartConfig={{
            backgroundColor: '#cs2d1d',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `${COLORS.primary}`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 4
            },
            propsForDots: {
              r: "3",
              strokeWidth: "1",
              stroke: `${COLORS.primary}`,
            }
          }}
          style={{
            marginVertical: 0,
            borderRadius:16,
          }}
          withHorizontalLabels={true}
          withVerticalLines={false}
          withHorizontalLines={false}
          withOuterLines={false}
          verticalLabelRotation={0}
        />
    </View>
  )
}

export default ({
  workouts,
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
        <View style={style.cardContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10}}>
            <Text style={style.cardSubTitle}>볼륨별 분석(kg)</Text>
            <SwitchBtn />
          </View>
          <Chart />
          <View style={{flexDirection: 'row', padding: SIZES.padding}}>
            <Tag text={'하체'} color={COLORS.tag_yellow} />
            <Tag text={'가슴'} color={COLORS.tag_pink} />
            <Tag text={'코어'} color={COLORS.tag_blue} />
            <Tag text={'등'} color={COLORS.tag_green} />
          </View>
        </View>
      </View>
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