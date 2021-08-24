import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SIZES } from '../constants';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';


export default Accordion = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Collapse style={{width: '100%'}}>
        <CollapseHeader>
          <View>
              <Text style={styles.content}>기타</Text>
            </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={styles.subContainer}>
            <Text style={styles.subContent}>버전</Text>
            <Text style={styles.subContent}>1.0.0</Text>
          </View>
          <TouchableOpacity style={styles.subContainer} onPress={() => navigation.navigate('Notice')}>
            <Text style={styles.subContent}>공지사항</Text>
            <Text style={styles.subContent}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subContainer} onPress={() => navigation.navigate('SendIdea')}>
            <Text style={styles.subContent}>의견 보내기</Text>
            <Text style={styles.subContent}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subContainer} onPress={() => navigation.navigate('SendReview')}>
            <Text style={styles.subContent}>리뷰 작성하기</Text>
            <Text style={styles.subContent}>></Text>
          </TouchableOpacity>
        </CollapseBody>
      </Collapse>
    </View>
  )
}

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