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
  frequency
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

  const ReportCard = ({title}) => {


    const onPressTagHandler = (name) => {
      setSelectedTag(name)
    }

    return (
      <View style={style.cardContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 0}}>
          <Text style={style.cardSubTitle}>{title}</Text>
          <SwitchBtn isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
        </View>
        {
          loading && (
            <View style={{height: 220, justifyContent: 'center', alignItems: 'center'}}>
              <Spinner />
            </View>
          )
        }
        {
          !loading && page == 0 && (
            <>
            <LineChart volume={volume} tags={tags} selectedTag={selectedTag} />
            </>
          )
        }
        {
          !loading && page == 1 && (
            <>
            <PieChart frequency={frequency} />
            </>
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
          {
            page == 0 && tags && tags.map((tag) => 
              (
                <TouchableOpacity key={tag.id} onPress={() => onPressTagHandler(tag.name)}>
                  <Tag key={tag.id} name={tag.name} color={tag.name == selectedTag ? tag.color : COLORS.tag_gray} />
                </TouchableOpacity>
            ))
          }
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <AdBanner />
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: COLORS.lightGray4}}>
          <View style={style.container}>
            <Text style={style.cardTitle}>운동 부위별 분석</Text>
                <ReportCard
                  loading={loading}
                  tags={tags}
                  volume={volume}
                  page={page}
                  setPage={setPage}
                  isEnabled={isEnabled} 
                  etIsEnabled={setIsEnabled}
                  title={page == 0 ? '볼륨별 분석(kg)' : '전체 빈도별 분석(회)'}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                />
          </View>
          <View style={style.container}>
            <Text style={style.cardTitle}>운동별 분석</Text>
                <ReportCard
                  loading={loading}
                  tags={tags}
                  volume={volume}
                  page={page}
                  setPage={setPage}
                  isEnabled={isEnabled} 
                  etIsEnabled={setIsEnabled}
                  title={page == 0 ? '볼륨별 분석(kg)' : '전체 빈도별 분석(회)'}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                />
          </View>
        </View>
      </ScrollView>
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
    borderRadius: 16,
    padding: SIZES.padding2,
  },
  cardTitle:{
    fontSize: SIZES.h3,
    fontWeight: '600',
    margin: SIZES.padding3,
  },
  cardSubTitle:{
    fontSize: SIZES.h4,
    fontWeight: '600',
    margin: SIZES.padding,
  },
})