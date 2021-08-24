import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, SIZES } from '../constants';

// Components
import Accordion from '../components/Accordion';
import SettingBtn from '../components/SettingBtn';

//Screens
//import { HowToUse, Notice, RemoveAd, SendIdea, SendReview } from './Details';


const Settings = ({ navigation }) => {

  return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
          <SettingBtn text={'상단 광고 제거'} screen={'RemoveAd'} navigation={navigation} />
          <SettingBtn text={'사용 방법'} screen={'HowToUse'} navigation={navigation} />
          <Accordion navigation={navigation} />
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
  },
  content:{
    fontSize: SIZES.h3,
    fontFamily: 'RobotoRegular',    
  },
  subContent:{
    fontSize: SIZES.h4,
    fontFamily: 'RobotoRegular',
  }
})

export default Settings;