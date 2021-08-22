import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, Button, ScrollView, TouchableOpacity} from "react-native";
import { COLORS, SIZES } from "../constants";

const Tag = ({tag}) => {
    //console.log(tag)
    return tag.map((d,i)=>{
        return(
            <View key={i} style={styles.container}>
                <View style={{backgroundColor:d.color, borderRadius:SIZES.radius}}>
                    <Text style={styles.tag}>{d.name}</Text>
                </View>
            </View>
        )
    })
}

export default Tag;

const styles = StyleSheet.create({
    tag:{
        color: COLORS.lightWhite,
        fontFamily:'RobotoBold',
        fontSize:SIZES.body4,
        minWidth:SIZES.h4*2,
        textAlign:'center',
        paddingTop:2
    },
    container:{
        paddingLeft: SIZES.base/2,
        marginBottom: 2
    }
  });