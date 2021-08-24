import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { SIZES } from '../constants';


export default SettingBtn = ({text, screen, navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(screen)}>
      <Text style={styles.content}>{text}</Text>
      <Text style={styles.content}>></Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
  },
  content:{
    fontSize: SIZES.h3,
    fontFamily: 'RobotoRegular',    
  },
})