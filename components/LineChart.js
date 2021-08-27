import React from 'react';
import { useState } from 'react';
import { View, Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { COLORS, SIZES } from '../constants';

export default Chart = ({labels, data, isRecent}) => {
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
                Math.random() * 100
              ]
            }]
          }}
          width={Dimensions.get('window').width}
          height={220}
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
          withHorizontalLabels={false}
          withVerticalLines={false}
          withHorizontalLines={false}
          withOuterLines={false}
          verticalLabelRotation={0}
        />
    </View>
  )
}