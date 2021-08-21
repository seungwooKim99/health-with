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
        fontFamily:'RobotoRegular',
        fontSize:SIZES.body3,
        minWidth:SIZES.h2*2,
        textAlign:'center'
    },
    container:{
        paddingLeft: SIZES.padding,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 4
    }
  });