import React from 'react';
import { useState, useEffect } from 'react';
import { View, Dimensions, Text } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { COLORS, SIZES } from '../constants';

export default ({isRecent, volume, maxWeight, tags, selectedTag, cardNumber}) => {

  const [labels, setLabels] = useState([])
  const [data, setData] = useState([])

  const setTotalLabelAndDataForVolume = () => {
    const totalDate = Object.keys(volume)
    let dataList = []
    let labelsList = []
    totalDate.map((date) => {
      let elem = volume[date]
      if (selectedTag in elem) {
        //setData((prev) => [...prev, elem[selectedTag]])
        //setLabels((prev) => [...prev, date])
        if (elem[selectedTag] != 0) {
          dataList.push(elem[selectedTag])
          let dateSplitArr = date.split('-')
          labelsList.push(`${dateSplitArr[1]}-${dateSplitArr[2]}`)
        }
      }
    })
    setData(dataList)
    setLabels(labelsList)
  }

  const setTotalLabelAndDataForMaxWeight = () => {
    const selectedSession = '랫풀다운'
    const selectedTag_ = '등'

    console.log('this is maxweight--------------------------------------------')
    console.log(maxWeight[selectedSession][selectedTag_])
    //console.log(maxWeight)
    const keyList = Object.keys(maxWeight[selectedSession][selectedTag_])
    let maxWeightLabels = []
    let maxWeightDatasets = []
    keyList.map((key) => {
      let date = key
      console.log('this is maxweight of first date--------------------------------------------')
      console.log(maxWeight)
      let maxWeightValue = Math.max.apply(null, maxWeight[selectedSession][selectedTag_][date])
      let dateSplitArr = date.split('-')
      maxWeightLabels.push(`${dateSplitArr[1]}-${dateSplitArr[2]}`)
      maxWeightDatasets.push(maxWeightValue)
    })
    setLabels(maxWeightLabels)
    setData(maxWeightDatasets)
  }

  useEffect(() => {
    if (volume != null) {
      setTotalLabelAndDataForVolume()
    }
  }, [volume])

  useEffect(() => {
    if (maxWeight != null) {
      setTotalLabelAndDataForMaxWeight()
    }
  }, [maxWeight])

  return (
    <View style={{alignItems:'center'}}>
      { data && labels && data.length != 0 && labels.length != 0 && cardNumber == 1 && (
      <LineChart
          data={{
            labels: labels,
            datasets: [{
              data: data
            }]
          }}
          width={Dimensions.get('window').width*0.8}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            fillShadowGradient: '#ffffff',
            decimalPlaces: 0, // optional, defaults to 2dp
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
          onDataPointClick={(e) => console.log(e)}
        />
      )}
      { volume == null && data && labels && data.length != 0 && labels.length != 0 && cardNumber == 2 && (
      <LineChart
          data={{
            labels: labels,
            datasets: [{
              data: data
            }]
          }}
          width={Dimensions.get('window').width*0.8}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            fillShadowGradient: '#ffffff',
            decimalPlaces: 0, // optional, defaults to 2dp
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
          onDataPointClick={(e) => console.log(e)}
        />
      )}
      {
        data.length == 0 && (
        <View style={{height: 220, justifyContent: 'center', alignItems: 'center'}}>
          <Text> </Text>
        </View>
        )
      }
    </View>
  )
}

/*
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
*/