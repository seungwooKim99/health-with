import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Platform } from "react-native";
import { COLORS, SIZES } from '../../constants';
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import { AdMobBanner } from 'expo-ads-admob';
import Constants from 'expo-constants';


//components
import LineChart from '../../components/LineChart';
import SwitchBtn from '../../components/SwitchBtn';
import Tag from '../../components/Tag'
import PieChart from '../../components/PieChart';
import Spinner from '../../components/Spinner';

export default ({
  loading,
  isEnabled,
  setIsEnabled,
  page,
  setPage,
  workouts,
  sessions,
  tags,
  sets,
  volume,
  selectedTag,
  setSelectedTag,
  frequency,
  selectedTag2,
  setSelectedTag2,
  sessionFrequency,
  test,
  page2,
  setPage2
}) => {
  
  const adBannerUnitId =
    Platform.OS === 'android'
      ? '안드로이드 광고 id'
      : 'ca-app-pub-7862994126923480/2703910847' // 광고 ID 입력

  const adBannerUnitTestId = 
    Platform.OS === 'android'
    ? '안드로이드 광고 id'  
    : 'ca-app-pub-3940256099942544/6300978111'

  const AdBanner = () => {
    return (
      <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID={adBannerUnitTestId} // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(err) => {
            console.log(err)
          }}
        />
      </View>
    )
  }

  const ReportCard = ({cardNumber, title}) => {


    const onPressTagHandler = (name) => {
      setSelectedTag(name)
    }

    return (
      <View style={style.cardContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 0}}>
          <Text style={style.cardSubTitle}>{title}</Text>
          <SwitchBtn isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          {/* 운동 부위별 분석 파트 */}
          {
            /* 운동 부위별 분석 카드 - 왼쪽 화살표 */
            cardNumber == 1 && (
              <TouchableOpacity onPress={() => setPage(0)}>
                <MaterialIcons name="arrow-back-ios" size={28} color={page == 1 ? COLORS.primary : COLORS.gray} />
              </TouchableOpacity>
            )
          }
          {
            /* 스피너 */
            loading && cardNumber == 1&& (
              <View style={{height: 220, justifyContent: 'center', alignItems: 'center'}}>
                <Spinner />
              </View>
            )
          }
          {
            /* 운동 부위별 분석 카드 - 볼륨 분석 */
            !loading && cardNumber == 1 && page == 0 && (
              <>
              <LineChart volume={volume} tags={tags} selectedTag={selectedTag} />
              </>
            )
          }
          {
            /* 운동 부위별 분석 카드 - 빈도 분석 */
            !loading && cardNumber == 1 && page == 1 && (
              <>
              <PieChart frequency={frequency} cardNumber={1} />
              </>
            )
          }
          {
            /* 운동 부위별 분석 카드 - 오른쪽 화살표 */
            cardNumber == 1 && (
              <TouchableOpacity onPress={() => setPage(1)}>
                <MaterialIcons name="arrow-forward-ios" size={28} color={page == 0 ? COLORS.primary : COLORS.gray} />
              </TouchableOpacity>
            )
          }

          {/* 운동별 분석 파트 */}
          {
            /* 운동별 분석 카드 - 왼쪽 화살표 */
            cardNumber == 2 && (
              <TouchableOpacity onPress={() => setPage2(0)}>
                <MaterialIcons name="arrow-back-ios" size={28} color={page2 == 1 ? COLORS.primary : COLORS.gray} />
              </TouchableOpacity>
            )
          }
          {
            /* 스피너 */
            loading && cardNumber == 2 && (
              <View style={{height: 220, justifyContent: 'center', alignItems: 'center'}}>
                <Spinner />
              </View>
            )
          }
          {
            /* 운동별 분석 카드 - 빈도 분석 */
            !loading && cardNumber == 2 && page2 == 1 && (
              <>
              <PieChart frequency={sessionFrequency} selectedTag={selectedTag2} cardNumber={2} />
              </>
            )
          }
          {
            /* 운동별 분석 카드 - 오른쪽 화살표 */
            cardNumber == 2 && (
              <TouchableOpacity onPress={() => setPage2(1)}>
                <MaterialIcons name="arrow-forward-ios" size={28} color={page2 != 1 ? COLORS.primary : COLORS.gray} />
              </TouchableOpacity>
            )
          }
        </View>
        <View style={{flexDirection: 'row', padding: SIZES.padding}}>
          {/* 운동 부위별 분석 카드 - 태그 목록 */}
          {
            page == 0 && cardNumber == 1 && tags && tags.map((tag) => 
              (
                  <Tag
                    key={tag.id}
                    name={tag.name}
                    color={tag.name == selectedTag ? tag.color : COLORS.gray}
                    onPress={onPressTagHandler}
                  />
            ))
          }
          {
            /*
            page2 == 1 && cardNumber == 2 && sessionFrequency && Object.keys(sessionFrequency).map((tag, index) => 
              (
                <TouchableOpacity key={index} onPress={() => setSelectedTag2(tag)}>
                  <Tag key={index} name={tag} color={tag == selectedTag2 ? COLORS.tag_orange : COLORS.gray} />
                </TouchableOpacity>
            ))
            */
          }

          {/* 운동별 분석 카드 - 태그 목록 */}
          {
            page2 == 1 && cardNumber == 2 && sessionFrequency && tags.map((tag, index) => 
              (
                  <Tag
                    key={index}
                    name={tag.name}
                    color={tag.name == selectedTag2 ? tag.color : COLORS.gray}
                    onPress={setSelectedTag2}
                  />
            ))
          }
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: COLORS.lightGray4}}>
          <View style={style.container}>
            <Text style={style.cardTitle}>운동 부위별 분석</Text>
                <ReportCard
                  cardNumber={1}
                  title={page == 0 ? '볼륨 분석(kg)' : '빈도 분석(회)'}
                />
          </View>
          <View style={style.container}>
            <Text style={style.cardTitle}>운동별 분석</Text>
                <ReportCard
                  cardNumber={2}
                  title={page2 == 0 ? '무게 분석(kg)' : '빈도 분석(회)'}
                />
          </View>
        </View>
        <TouchableOpacity onPress={test}>
          <Text>test</Text>
        </TouchableOpacity>
      </ScrollView>
      <AdBanner />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    width: '100%',
    marginBottom: SIZES.padding
  },
  cardContainer:{
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    opacity: 1,
    borderRadius: 16,
    padding: SIZES.padding2,
  },
  cardTitle:{
    fontSize: SIZES.h4,
    fontWeight: '600',
    margin: SIZES.padding3,
    marginTop: 22
  },
  cardSubTitle:{
    fontSize: SIZES.body3,
    fontWeight: '600',
    margin: SIZES.padding,
  },
})