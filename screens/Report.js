import React from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import Tag from '../components/Tag';
import { COLORS, SIZES } from '../constants';


const Chart = () => {
  return (
    <View style={{alignItems:'center'}}>
      <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={Dimensions.get('window').width} // from react-native
          height={Dimensions.get('window').height*0.4}
          chartConfig={{
            backgroundColor: '#cs2d1d',
            backgroundGradientFrom: '#dddddd',
            backgroundGradientTo: '#dddddd',
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
            marginVertical: 8,
            borderRadius:16
          }}
          withHorizontalLabels={false}
          withVerticalLines={false}
          withHorizontalLines={false}
          withOuterLines={false}
        />
    </View>
  )
}

const ReportCard = () => {
  return (
    <View style={style.cardContainer}>
      <Text style={style.cardTitle}>운동 부위별 분석</Text>
      <View style={{justifyContent:'flex-start', backgroundColor: 'red'}}>
        <Text style={style.cardSubTitle}>볼륨별 분석</Text>
        <Chart />
      </View>
      <Tag />
    </View>
  )
}
const Report = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
            <ReportCard />
        </View>
    );
};

const style = StyleSheet.create({
  cardContainer:{
    width: '100%',
    padding: SIZES.padding2,
  },
  cardTitle:{
    fontSize: SIZES.h3,
    fontFamily: 'RobotoRegular',    
  },
  cardSubTitle:{
    fontSize: SIZES.h4,
    fontFamily: 'RobotoRegular',    
  },
})

export default Report;